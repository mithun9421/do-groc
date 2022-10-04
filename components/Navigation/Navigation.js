import React from 'react';
import {Box, Center, Flex,Container} from '@chakra-ui/react'
import Logo from './Logo';
import MenuItem from './MenuItem'

const Header = (props) => {
    return (
        <Container maxW={'7xl'} maxH={'max-content'} py={12}>
         <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Logo />
                <MenuItem />
            </Flex>
        </Container>
    )
}

export default Header;