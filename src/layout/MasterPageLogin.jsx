import React from 'react'
import { HeaderLogin } from '../components'
import { motion } from 'framer-motion'

const MasterPageLogin = ({ children, title }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <HeaderLogin title={title} />
      <main>{children}</main>
    </motion.div>
  )
}

export default MasterPageLogin
