import React, { useState } from 'react'
import Link from 'next/link'

// Hooks
import { isAuth } from '../hooks'

import RegistrarseModal from './RegistrarseModal'
import IniciarSeccionModal from './IniciarSeccionModal'
import { css } from '@emotion/core'

export const Header = () => {
  const { autenticado, role } = isAuth()

  return (
    <nav className="header navbar py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <Link href="/app">
                  <a className="mb-0 mr-3">
                    <h1 className="titulo">Empleos RD</h1>
                  </a>
                </Link>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  {autenticado && role === 'business' && (
                    <li className="nav-item d-none d-md-block">
                      <Link href="/publicar/nueva-vacante">
                        <a className="nav-link" aria-current="page">
                          Publicar Vacante
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              {autenticado ? (
                role === 'user' ? (
                  <div className="d-flex align-items-center">
                    <div className="mr-2">
                      <p className="d-none d-md-block mb-0 h6">
                        Erickson Manuel Holguín
                      </p>
                      <p className="d-none d-md-block mb-0 text-right">
                        Ing. Sistema
                      </p>
                    </div>
                    <Link href="/perfil/[username]" as="/perfil/erickson01d">
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
                  <div className="d-flex align-items-center">
                    <div className="mr-2">
                      <p className="d-none d-md-block mb-0 h6">
                        Uno Call Center
                      </p>
                      <p className="d-none d-md-block mb-0 text-right">
                        Empresa
                      </p>
                    </div>
                    <Link
                      href="/empresa/[idEmpresa]"
                      as="/empresa/uno-call-center"
                    >
                      <a>
                        <div
                          css={css`
                            width: 3rem;
                            height: 3rem;
                          `}
                        >
                          <img
                            className="img-fluid rounded"
                            src="/img/uno.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                )
              ) : (
                <div className="d-flex">
                  <RegistrarseModal />
                  <hr className="mr-2" />
                  <IniciarSeccionModal />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
