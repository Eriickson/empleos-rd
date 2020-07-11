import React from 'react'
import { Container } from '../elements'
import { css } from '@emotion/core'
import Link from 'next/link'
import CambiarAutenticacion from './CambiarAutenticacion'
import CambiarRole from './CambiarRole'

export const Footer = () => {
  return (
    <div
      className="py-5"
      css={css`
        background-color: #009ddc;
      `}
    >
      <Container>
        <div className="d-flex flex-column align-items-center">
          <p className="text-white h3">Empleos RD </p>
          <div className="d-flex">
            <CambiarRole />
            <CambiarAutenticacion />
          </div>
          <ul className="nav my-4">
            <li className="nav-item">
              <Link href="">
                <a className="nav-link text-white lead">Empleos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="">
                <a className="nav-link text-white lead">Usuarios</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="">
                <a className="nav-link text-white lead">CV</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="">
                <a className="nav-link text-white lead">Empresas</a>
              </Link>
            </li>
          </ul>
          <p className="text-white">Erickson01d@gmail.com</p>
          <hr className="text-white w-100" />
          <p className="text-white h6">Todos los derechos reservados</p>
        </div>
      </Container>
    </div>
  )
}
