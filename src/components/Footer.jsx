import React from 'react'
import { Container } from '../elements'
import Link from 'next/link'
import CambiarAutenticacion from './CambiarAutenticacion'
import CambiarRole from './CambiarRole'

export const Footer = () => {
  return (
    <div className="py-5 footer">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <p className="h3">Empleos RD </p>
          <div className="d-flex">
            <CambiarRole />
            <CambiarAutenticacion />
          </div>
          <ul className="nav my-4">
            <li className="nav-item">
              <Link href="">
                <a className="nav-link lead">Empleos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="">
                <a className="nav-link lead">Usuarios</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="">
                <a className="nav-link lead">CV</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="">
                <a className="nav-link lead">Empresas</a>
              </Link>
            </li>
          </ul>
          <p className="">Erickson01d@gmail.com</p>
          <hr className="w-100" />
          <p className="h6">Todos los derechos reservados</p>
        </div>
      </Container>
    </div>
  )
}
