import React from 'react'
import { isAuth } from '../../hooks'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { css } from '@emotion/core'
import * as Feather from 'react-feather'
import MenuEmpresa from './MenuEmpresa'
import MenuUsuario from './MenuUsuario'

export const Menu = ({ isActive, setActive }) => {
  const { role } = isAuth()

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="p-3 flex-column justify-content-between align-items-center area-menu"
            css={css`
              position: fixed;
              width: 100vw;
              height: 100vh;
              background-color: #fff;
              z-index: 100;
              top: 0;
              left: 0;
              border: 2px solid;
            `}
            initial={{
              opacity: 0,
            }}
            animate={{
              display: 'flex',
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div
              css={css`
                height: 100vh;
                width: 100vw;
                position: relative;
              `}
            >
              <ul className="nav d-flex align-items-center flex-column">
                <h1 className="h1 mb-5">
                  <b>Empleos RD</b>
                </h1>
                {role === 'user' ? <MenuUsuario /> : <MenuEmpresa />}
              </ul>
              <button
                className="position-fixed py-4 w-100 h2 lead"
                css={css`
                  bottom: 0;
                  left: 0;
                  background-color: transparent;
                `}
                onClick={() => setActive(!isActive)}
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setActive(!isActive)}
        css={css`
          position: fixed;
          width: 4rem;
          height: 4rem;
          background-color: #0466ff;
          bottom: 3.125rem;
          color: white;
          border-radius: 50%;
          right: 1.25rem;
          border: 2px solid white;
        `}
      >
        <Feather.X
          style={{
            transition: '400ms',
            transform: isActive ? null : 'rotate(45deg)',
          }}
        />
      </button>
    </>
  )
}
