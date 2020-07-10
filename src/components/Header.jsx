import React, { useState } from 'react'
import Link from 'next/link'

import RegistrarseModal from './RegistrarseModal'
import IniciarSeccionModal from './IniciarSeccionModal'
import { css } from '@emotion/core'

export const Header = () => {
  const [isRegister, setIsRegister] = useState(true)

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link href="/app">
          <a className="navbar-brand h1 mb-0">Empleos RD</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/publicar/nueva-vacante">
                <a className="nav-link" aria-current="page">
                  Publicar Vacante
                </a>
              </Link>
            </li>
          </ul>
          {isRegister ? (
            <div className="d-flex align-items-center">
              <div className="mr-2">
                <p className="mb-0 h6">Erickson Manuel Holguín</p>
                <p className="mb-0 text-right">Ing. Sistema</p>
              </div>
              <Link href="/perfil/erickson01d">
                <a>
                  <div
                    css={css`
                      width: 3rem;
                      height: 3rem;
                    `}
                  >
                    <img
                      className="img-fluid rounded"
                      src="https://persona-app-es.herokuapp.com/assets/personas/1-e0e7223aeb2f66a659d032fb393d11d7e62e00706b1bef5f9f1a13eaa93d4b4b.png"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <RegistrarseModal />
              <hr className="mr-2" />
              <IniciarSeccionModal />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
