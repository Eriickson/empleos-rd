import React from 'react'
import { css } from '@emotion/core'

export const RedSocialInput = ({ redSocial, register }) => {
  return (
    <div className="mb-2">
      <div className="mb-1 d-flex justify-content-between align-items-end w-100">
        <input
          name={`redesSociales.${redSocial}.name`}
          className="w-50"
          type="text"
          placeholder="Usuario"
          ref={register}
        />
        <label
          htmlFor="telefono-1"
          css={css`
            &::first-letter {
              text-transform: uppercase;
            }
          `}
        >
          {redSocial}
        </label>
      </div>
      <input
        name={`redesSociales.${redSocial}.url`}
        type="text"
        className="form-control"
        ref={register}
      />
    </div>
  )
}
