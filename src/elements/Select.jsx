import React, { useState, useEffect } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'react-feather'
import { css } from '@emotion/core'

export const Select = ({
  className,
  options,
  selected,
  setSelected,
  cssProp,
}) => {
  const [estado, setEstado] = useState(false)
  const [optionsLocal, setOptionsLocal] = useState(options)

  useEffect(() => {
    setOptionsLocal(options)
  }, [options])

  const variantSelectOptions = {
    hidden: {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      zIndex: 20,
    },
    visible: {
      height: 'max-content',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  }

  return (
    <div className={`relative h-max ${className}`} css={cssProp}>
      <div
        tabIndex="0"
        onFocus={() => {
          setEstado(true)
        }}
        onBlur={(e) => {
          setTimeout(() => {
            setEstado(false)
          }, 50)
        }}
        className="form-control d-flex justify-content-between align-items-center"
      >
        <p className="mr-2 mb-0">
          {selected.label ? selected.label : 'Select Option'}
        </p>
        <ChevronRight
          className={`duration-150 transform ${
            estado ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </div>
      <motion.div
        // className="w-full mt-2 border-secondary-500 rounded shadow-elevation-xs absolute bg-white left-0 overflow-hidden z-10"
        className="card position-absolute w-100 mt-1"
        variants={variantSelectOptions}
        initial={estado ? 'visible' : 'hidden'}
        animate={estado ? 'visible' : 'hidden'}
        transition={{
          ease: 'linear',
          duration: 0.1,
        }}
      >
        <Scrollbar
          css={css`
            height: 190px !important;
            .ScrollbarsCustom-TrackY {
              width: 5px !important;
              margin-right: 5px;
            }
            .ScrollbarsCustom-TrackX {
              height: 5px !important;
            }
          `}
        >
          <ul className="contenido-dropdown p-2">
            {optionsLocal?.map((option) => (
              <li
                key={option.id}
                className="mb-1 cursor-pointer duration-150 delay-100 hover:bg-secondary-100 px-2 py-1 rounded hover:text-secondary-500 flex items-center w-full"
                onClick={() => {
                  setSelected(option)
                  setEstado(false)
                }}
              >
                {/* <CheckBox /> */}
                {option.label}
              </li>
            ))}
          </ul>
        </Scrollbar>
      </motion.div>
    </div>
  )
}
