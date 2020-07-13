import React, { useState } from 'react'
import { Header, Footer, Menu } from '../components'
import { ScrollUpButton } from '../elements'
import { motion } from 'framer-motion'
import { css } from '@emotion/core'
import { isAuth } from '../hooks'

const MasterPage = ({ children }) => {
  const [estadoMenu, setEstadoMenu] = useState(false)
  const { autenticado } = isAuth()

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
          style={{
            filter: estadoMenu ? 'blur(5px)' : null,
          }}
          css={css`
            min-height: 70vh;
          `}
        >
          {children}
        </main>
        <Footer />
        <ScrollUpButton />
        {autenticado && (
          <Menu isActive={estadoMenu} setActive={setEstadoMenu} />
        )}
      </motion.div>
    </>
  )
}

export default MasterPage
