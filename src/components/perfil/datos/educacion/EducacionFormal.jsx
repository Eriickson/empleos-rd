import React from 'react'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'
import Link from 'next/link'

const EducacionFormal = () => {
  return (
    <div className="mb-4">
      <p className="h4">Educación Formal</p>
      <div
        css={css`
          overflow: auto;
        `}
      >
        <div
          className="pl-3"
          css={css`
            min-width: max-content;
          `}
        >
          <p className="mb-1 d-flex align-items-center">
            <img
              className="mr-2"
              css={css`
                width: 1.8rem;
              `}
              src="https://image.flaticon.com/icons/svg/3094/3094671.svg"
              alt=""
            />
            <b className="mr-2">PRIMARIA:</b>
            <span>Escuela Básica Canabacoa</span>
          </p>
          <p className="mb-1 d-flex align-items-center">
            <img
              className="mr-2"
              css={css`
                width: 1.8rem;
              `}
              src="https://image.flaticon.com/icons/svg/2941/2941651.svg"
              alt=""
            />
            <b className="mr-2">SECUNDARIA:</b>
            <span>Lic. José Mercedes Alvino</span>
          </p>
          <p className="mb-1 d-flex align-items-center">
            <img
              className="mr-2"
              css={css`
                width: 1.8rem;
              `}
              src="https://image.flaticon.com/icons/svg/2083/2083228.svg"
              alt=""
            />
            <b className="mr-2">TECNICO:</b>
            <span>Instituto Tecnológico de Las Américas (ITLA)</span>
          </p>
          <p className="mb-1 d-flex align-items-center">
            <img
              className="mr-2"
              css={css`
                width: 1.8rem;
              `}
              src="https://image.flaticon.com/icons/svg/3135/3135810.svg"
              alt=""
            />
            <b className="mr-2">UNIVERSITARIO:</b>
            <span>Universidad Tecnológica de Santiago (UTESA)</span>
          </p>
          <p className="mb-1 d-flex align-items-center">
            <img
              className="mr-2"
              css={css`
                width: 1.8rem;
              `}
              src="https://image.flaticon.com/icons/svg/3135/3135807.svg"
              alt=""
            />
            <b className="mr-2">MAESTRIA:</b>
            <span>Universidad Tecnológica de Santiago (UTESA)</span>
          </p>
          <p className="mb-1 d-flex align-items-center">
            <img
              className="mr-2"
              css={css`
                width: 1.8rem;
              `}
              src="https://image.flaticon.com/icons/svg/2972/2972059.svg"
              alt=""
            />
            <b className="mr-2">DOCTORADO:</b>
            <span>Universidad Tecnológica de Santiago (UTESA)</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EducacionFormal
