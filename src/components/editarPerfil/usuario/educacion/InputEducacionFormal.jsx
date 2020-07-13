import React from 'react'
import { css } from '@emotion/core'

const InputEducacionFormal = ({ name }) => {
  return (
    <div className="mb-3">
      <label
        className="mb-1"
        htmlFor=""
        css={css`
          &::first-letter {
            text-transform: uppercase;
          }
        `}
      >
        {name}
      </label>
      <input type="text" className="form-control w-100" />
    </div>
  )
}

export default InputEducacionFormal
