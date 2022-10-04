import React from 'react'
import TaskList from '../components/TaskList'
import {Container} from '@chakra-ui/react'

export default function list() {
  return (
    <Container maxW={"5xl"}>
      <TaskList />
    </Container>
  )
}
