import React from 'react'
import { Header, Footer } from '../components'
import { ScrollUpButton } from '../elements'
import { motion } from 'framer-motion'
import { css } from '@emotion/core'

const MasterPage = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <Header />
        <main
          className="py-5"
          css={css`
            min-height: 70vh;
          `}
        >
          {children}
        </main>
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </>
  )
}

export default MasterPage
