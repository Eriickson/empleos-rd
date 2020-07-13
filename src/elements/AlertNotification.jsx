import React, { useState, useEffect } from 'react'
import * as Feather from 'react-feather'
import { motion, AnimatePresence } from 'framer-motion'
import { css } from '@emotion/core'

export const AlertNotification = ({ message }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="alert alert-danger w-100 d-flex justify-content-center"
          css={css`
            position: fixed;
            /* top: 0; */
            left: 0;
            z-index: 100;
          `}
          initial={{
            top: '-4rem',
          }}
          animate={{
            top: 0,
          }}
          exit={{
            top: '-4rem',
          }}
        >
          <div className="d-flex flex-row">
            <Feather.Slash />
            <p className="ml-2 mb-0">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
