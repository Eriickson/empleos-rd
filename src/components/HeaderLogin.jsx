import React from 'react'
import Link from 'next/link'
import * as Feather from 'react-feather'

import { Modal } from '../elements'
import RegistrarseModal from './RegistrarseModal'
import IniciarSeccionModal from './IniciarSeccionModal'

export const HeaderLogin = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link href="/app">
            <a className="navbar-brand">
              <Feather.ChevronLeft />
            </a>
          </Link>
          {/* <p className="mb-0">Aplicación de {title}</p> */}
          <i></i>
        </div>
      </div>
    </nav>
  )
}
