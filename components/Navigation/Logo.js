import React from "react"
import { useRouter } from 'next/router'
import { Box, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion'

const Logo = (props) => {
  const router = useRouter()

  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" _hover={{ cursor: "pointer" }} onClick={() => { router.push('/') }}>
        <motion.span 
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.2,
          }}>{"Do Groc"}</motion.span>
      </Text>
    </Box>
  )
}

export default Logo;
