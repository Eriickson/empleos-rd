import React from 'react'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'
import { ScreenPDF } from '../../../../elements'

const ItemEducacionNoFormal = () => {
  return (
    <div className="mb-2">
      <p className="lead mb-1">
        <b>React, La Guía Completa: Hooks Context Redux MERN +15 Apps</b>
      </p>
      <div className="d-flex align-items-center">
        <img
          className="mr-2"
          css={css`
            width: 1.8rem;
          `}
          src="https://image.flaticon.com/icons/svg/3143/3143460.svg"
          alt=""
        />
        <ScreenPDF
          labelButton={'Certificado'}
          url="http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/ElPrincipito.pdf"
        />
      </div>
      <div
        className="d-flex align-items-center mt-2"
        css={css`
          font-size: 0.8rem;
          color: gray;
          svg {
            width: 1rem;
            height: 1rem;
          }
        `}
      >
        <Feather.Clock className="mr-1" />
        <span>11/2019 - 03/2020</span>
      </div>
    </div>
  )
}

export default ItemEducacionNoFormal
