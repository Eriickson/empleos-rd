import React from 'react'
import DatosPersonales from './DatosPersonales'
import Contactos from './Contactos'
import Educacion from './Educacion'
import DatosLaborales from './DatosLaborales'
import Cuenta from './Cuenta'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'

const styleNav = css`
  flex-wrap: nowrap;
  min-width: max-content;
`

const MenuEditarUsuario = () => {
  return (
    <div className="menu-editar-usuario row">
      <div
        className="p-0 p-md-2 col-lg-3 mb-3"
        css={css`
          overflow: auto;
        `}
      >
        <div
          className="nav align-items-center align-items-lg-start flex-lg-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
          css={styleNav}
        >
          <a
            className="nav-link active d-flex align-items-center"
            id="v-pills-datos-personales-tab"
            data-toggle="pill"
            href="#v-pills-datos-personales"
            role="tab"
            aria-controls="v-pills-datos-personales"
            aria-selected="true"
          >
            <Feather.User className="mr-2" />
            Datos Personales
          </a>
          <a
            className="nav-link"
            id="v-pills-contactos-tab"
            data-toggle="pill"
            href="#v-pills-contactos"
            role="tab"
            aria-controls="v-pills-contactos"
            aria-selected="false"
          >
            <Feather.PhoneCall className="mr-2" />
            Contactos
          </a>
          <a
            className="nav-link"
            id="v-pills-educacion-tab"
            data-toggle="pill"
            href="#v-pills-educacion"
            role="tab"
            aria-controls="v-pills-educacion"
            aria-selected="false"
          >
            <Feather.BookOpen className="mr-2" />
            Educacion
          </a>
          <a
            className="nav-link"
            id="v-pills-datos-laborales-tab"
            data-toggle="pill"
            href="#v-pills-datos-laborales"
            role="tab"
            aria-controls="v-pills-datos-laborales"
            aria-selected="false"
          >
            <Feather.Briefcase className="mr-2" />
            Datos Laborales
          </a>
          <a
            className="nav-link"
            id="v-pills-cuenta-tab"
            data-toggle="pill"
            href="#v-pills-cuenta"
            role="tab"
            aria-controls="v-pills-cuenta"
            aria-selected="false"
          >
            <Feather.Settings className="mr-2" />
            Cuenta
          </a>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-datos-personales"
            role="tabpanel"
            aria-labelledby="v-pills-datos-personales-tab"
          >
            <DatosPersonales />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-contactos"
            role="tabpanel"
            aria-labelledby="v-pills-contactos-tab"
          >
            <Contactos />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-educacion"
            role="tabpanel"
            aria-labelledby="v-pills-educacion-tab"
          >
            <Educacion />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-datos-laborales"
            role="tabpanel"
            aria-labelledby="v-pills-datos-laborales-tab"
          >
            <DatosLaborales />
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-cuenta"
            role="tabpanel"
            aria-labelledby="v-pills-cuenta-tab"
          >
            <Cuenta />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuEditarUsuario
