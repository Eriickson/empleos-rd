import React, { useState, useEffect } from 'react'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'
import { motion, AnimatePresence } from 'framer-motion'

export default ({ message, remover }) => {
  const [centerWidth, setCenterWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('alert-error-1')
      setCenterWidth(-1 * (element.offsetWidth / 2))
    }
  }, [centerWidth])

  return (
    <motion.div
      id="alert-error-1"
      className="alert-error d-flex align-items-center"
      initial={{
        bottom: '5rem',
        left: '50%',
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        marginLeft: `${centerWidth}px`,
      }}
      transition={{
        duration: 0.3,
        ease: 'linear',
      }}
      exit={{
        opacity: 0,
        right: '-20rem',
      }}
    >
      <div className="d-flex align-items-center mr-4">
        <Feather.AlertCircle />
        <p className="mb-0">{message}</p>
      </div>
      <Feather.X
        onClick={remover}
        css={css`
          opacity: 0.4;
          transition: 150ms;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
            transition: 150ms;
          }
        `}
      />
    </motion.div>
  )
}
