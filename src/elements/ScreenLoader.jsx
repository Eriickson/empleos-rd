import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from 'react-loader-spinner'
import { css } from '@emotion/core'

export const ScreenLoader = ({ isVisible }) => {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 100vh;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 10;
              background-color: #ffffffe1;
            `}
            initial={
              {
                // opacity: 0,
              }
            }
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
            <p className="lead mt-3">Cargando...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
