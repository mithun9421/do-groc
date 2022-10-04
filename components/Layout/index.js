import React from 'react'
import Header from '../Navigation/Navigation'
import {motion} from 'framer-motion'

export default function Layout({
    children
}) {
    return (
        <motion.div animate={{opacity: 1}}>
            <Header />
            {children}
        </motion.div>
    )
}
