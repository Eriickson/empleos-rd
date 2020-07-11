import React from 'react'
import Link from 'next/link'
import ModalPosturte from './ModalPosturte'
import * as Feather from 'react-feather'
import { IsAuth } from '../../hooks'

const CartaDetalles = () => {
  const { autenticado } = IsAuth()

  const linkIniciarSeccion = (
    <Link href="/iniciar-seccion">
      <a className="btn btn-primary mb-3">Inicia Sección</a>
    </Link>
  )

  return (
    <div className="col-md-3">
      <div className="card w-100 p-3">
        <Link href="/empresa/[idEmpresa]" as="/empresa/uno-call-center">
          <a className="h4 mb-3">Uno Call Center</a>
        </Link>
        <p className="h5">Contactos</p>
        <ul className="">
          <li className="mb-1">
            <Feather.Link className="mr-2" />
            Uno Call Center
          </li>
          <li className="mb-1">
            <Feather.Mail className="mr-2" />
            Vacantes@institucion.edu
          </li>
          <li className="mb-1">
            <Feather.Phone className="mr-2" />
            +1 (829) 816-0959
          </li>
        </ul>
        {autenticado ? <ModalPosturte /> : linkIniciarSeccion}
      </div>
    </div>
  )
}

export default CartaDetalles
