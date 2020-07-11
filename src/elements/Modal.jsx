import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { css } from '@emotion/core'
import { AreaScroll } from './'
import * as Feather from 'react-feather'

export const Modal = ({
  labelButton,
  children,
  classNameButton,
  name,
  className,
  btnClose,
  closeZone,
}) => {
  const [estado, setEstado] = useState(false)

  return (
    <>
      <button className={classNameButton} onClick={() => setEstado(!estado)}>
        {labelButton}
      </button>
      <AnimatePresence>
        {estado && (
          <motion.div
            css={css`
              position: fixed;
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              width: 100%;
              z-index: 20;
            `}
            className={`dark-modal-${name} ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: 'linear',
            }}
            style={{
              backgroundColor: 'rgba(25, 25, 25, 0.85)',
            }}
            onClick={(e) => {
              if (e.target.classList.contains(`dark-modal-${name}`)) {
                closeZone ? setEstado(!estado) : null
              }
            }}
          >
            {children}
            {btnClose && (
              <button
                onClick={() => setEstado(false)}
                css={css`
                  position: fixed;
                  width: 4rem;
                  height: 4rem;
                  color: white;
                  border-radius: 50%;
                  bottom: 3rem;
                  right: 3rem;
                  background-color: purple;
                `}
              >
                <Feather.X />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

Modal.defaultProps = {
  closeZone: true,
}
