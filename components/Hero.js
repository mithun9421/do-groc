import React from 'react'
import HeroImage from '../images/casual-life-3d-meditation-crystal.png'
import { Box, Container, Image, HStack, Stack, StackDivider, SimpleGrid, Flex, GridItem, Icon, useColorModeValue, Text, Heading, Button } from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import GraphSet from './GraphSet'

const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Hero() {
    return (
        <Container maxW={'7xl'} maxH={'max-content'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Heading>Never loose track of groceries</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        One stop solution to keep track of groceries at home, calculate montly budgets and easier infographics to understand monthly expenditure.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Track Groceries'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Check Monthly Budgets'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Expenditure Check'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={HeroImage.src}
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
            <GraphSet />
            <Flex mt={10} alignItems={"center"} justifyContent={"center"}>
                <Button>Sign Up Now</Button>
            </Flex>
        </Container>
    )
}
