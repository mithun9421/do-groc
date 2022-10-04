import React, { useEffect, useState } from 'react'
import { Box, Heading, Flex, Button, Text, Icon, Divider, HStack, VStack, ListItem, UnorderedList, useColorModeValue, Checkbox } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

import { AiFillFileAdd } from 'react-icons/ai'
import { taskListGroupFromJSON } from '../../configs/task-data'
import { motion, AnimatePresence } from 'framer-motion'

import { ref, set } from "firebase/database";
import {database} from '../../firebase/configs'

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function TaskList() {
    const [currentTaskGroup, setCurrentTaskGroup] = useState(-99);
    const [taskListGroup, setTaskListGroup] = useState(taskListGroupFromJSON)
    const [isOpen, setIsOpen] = useState(false);
    const [taskGroupName, setTaskGroupName] = useState("");
    const [currentTaskText, setCurrentTaskText] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleAddTaskGroup = () => {
        setIsOpen(true)
    }

    const onClose = () => { setIsOpen(false); setTaskList([]) };
    
    const onSubmit = () => {
        console.log(":Submitting");
        const db = database();
        set(ref(db, 'dogroc-d0976-default-rtdb/' + '123'), {
          username: "Mit",
          email: "email",
          profile_picture : "imageUrl"
        });
      
    }

    const renderTasksList = () => {
        if (taskList?.length == 0) {
            return (
                <Text mt={2} textAlign={"center"}>No Tasks Added</Text>
            )
        } else {
            return (
                <VStack mt={5} alignItems={'flex-start'}>
                    {
                        taskList?.map((task, idx) => {
                            return (
                                <Box bg={useColorModeValue('gray.800', 'gray.800')} key={idx} listStyleType={'none'} p={2} px={3} borderRadius={5} w={'max-content'}>
                                    <Text color={useColorModeValue('gray.200', 'gray.200')}>{task}</Text>
                                </Box>
                            )
                        })
                    }
                </VStack>
            )

        }
    }

    const handleTaskChange = (event) => {
        if (event.charCode == 13 || event?.keyCode == 13) {
            handleAddNewTask(event.target.value)
        } else {
            setCurrentTaskText(event.target.value)
        }
    }

    const handleAddNewTask = (text) => {
        setCurrentTaskText("")
        if (!(taskList.includes(text) || text == "" || text == undefined)) {
            setTaskList([text, ...taskList])
        }
    }

    const getTaskDone = (tasks) => {
        if (tasks == 0) {
            return "0"
        } else {
            return tasks.filter(task => task.done == true).length + "/" + tasks.length;
        }
    }

    const handleTaskGroupClick = (taskGroup) => {
        if (currentTaskGroup.id == taskGroup?.id) {
            setCurrentTaskGroup(-99)
        } else {
            setCurrentTaskGroup(taskGroup);
        }
    }

    const setCheckItem = (taskGroup, task, isChecked) => {
        // TODO : Change the logic


        // console.log(taskGroup, task, isChecked)
        console.log("TLG" , taskListGroup)
        let reqTaskGroup = taskListGroup?.filter(taskListGroupObj => taskGroup.id == taskListGroupObj.id).map((res) => res)
        console.log("req, ", reqTaskGroup)
        let reqTask = reqTaskGroup.taskList?.filter(taskObj => taskObj.id == task.id).map(res => res);
        console.log("task ", task)
        
    }

    return (
        <>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Heading width={"max-content"}>Task Group</Heading>
                <Button float={"left"} onClick={handleAddTaskGroup}>Add Task Group</Button>
            </Flex>

            <VStack mt={5} alignItems={"flex-start"}>
                {
                    taskListGroup?.map((taskGroup) => {
                        return (
                            <MotionFlex _hover={{ cursor: "pointer" }} alignItems={"center"} w={"100%"} borderRadius={5} bg={useColorModeValue("gray.50", "gray.600")} key={taskGroup.id} px={5} py={5} onClick={() => { handleTaskGroupClick(taskGroup) }}>
                                <Box w={'24'}>
                                    <Text fontSize='5xl'>{getTaskDone(taskGroup.taskList)}</Text>
                                </Box>
                                <VStack alignItems={"flex-start"}>
                                    <Box><Text>{taskGroup?.label}</Text></Box>
                                    <Box><Text color={'gray.400'}>{"You have tasks pending!"}</Text></Box>
                                    <AnimatePresence initial={false}>
                                        {
                                            taskGroup.id == currentTaskGroup.id &&
                                            <motion.section
                                                key="content"
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                variants={{
                                                    open: { opacity: 1, height: "auto" },
                                                    collapsed: { opacity: 0, height: 0 }
                                                }}
                                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <Box mt={4}>
                                                    <Text fontSize={'1xl'}>Task List</Text>
                                                    <VStack mt={2} alignItems={'flex-start'}>
                                                        {
                                                            taskGroup?.taskList?.map((task) => {
                                                                return (
                                                                    <Checkbox
                                                                        onChange={(e) => setCheckItem(taskGroup, task, e.target.checked)}
                                                                        isChecked={task.done}>{task.label}</Checkbox>
                                                                )
                                                            })
                                                        }
                                                    </VStack>
                                                </Box>
                                            </motion.section>
                                        }
                                    </AnimatePresence>
                                </VStack>
                            </MotionFlex>
                        )
                    })
                }
            </VStack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Oh! You got new task group</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel htmlFor='taskGroupName'>Task Group Name</FormLabel>
                            <Input id='taskGroupName' type='text' onChange={(event) => { setTaskGroupName(event.target.value) }} value={taskGroupName} />
                            <Divider mt={5} />
                            <Flex mt={5} justify={"center"} justifyContent={"center"}>
                                <HStack w={"100%"}>
                                    <Input value={currentTaskText} placeholder='Type the tasks to add them' w={"80%"} id='taskGroupName' type='text' onKeyPress={handleTaskChange} onChange={handleTaskChange} />
                                    <Button w={"20%"} onClick={() => { handleAddNewTask(currentTaskText) }}>
                                        <Icon as={AiFillFileAdd}></Icon>
                                    </Button>
                                </HStack>
                            </Flex>
                            {renderTasksList()}
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onSubmit} disabled={(taskList.length == 0 || taskGroupName.length < 1)}>
                            Add New Task Group
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
