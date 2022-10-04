import React from 'react'
import { useColorMode, Button, Icon, HStack } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import {FaTasks} from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function MenuItem() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  
  return (
    <HStack>
    <Button onClick={() => {router.push('/list')}}>
      <Icon as={FaTasks}></Icon>
    </Button>
    <Button onClick={toggleColorMode}>{colorMode == "light" ? <MoonIcon /> : <SunIcon />}</Button>
    </HStack>
  )
}
