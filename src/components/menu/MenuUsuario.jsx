import React from 'react'
import Link from 'next/link'
import * as Feather from 'react-feather'

const MenuUsuario = () => {
  return (
    <>
      <li className="mb-2 w-50">
        <Link href="/perfil/[username]" as="/perfil/erickson01d">
          <a className="btn btn-primary d-flex align-items-center justify-content-center py-2">
            <Feather.User className="mr-2" />
            Perfil
          </a>
        </Link>
      </li>
      <li className="mb-2 w-50">
        <Link href="/perfil/editar/[username]" as="/perfil/editar/erickson01d">
          <a className="btn btn-primary d-flex align-items-center justify-content-center py-2">
            <Feather.Edit className="mr-2" />
            Editar Perfil
          </a>
        </Link>
      </li>
      <li className="mb-2 w-50">
        <Link href="">
          <a className="btn btn-primary d-flex align-items-center justify-content-center py-2">
            <Feather.MessageCircle className="mr-2" />
            Postulaciones
          </a>
        </Link>
      </li>
      <li className="mb-2 w-50">
        <Link href="">
          <a className="btn btn-danger d-flex align-items-center justify-content-center py-2">
            <Feather.Heart className="mr-2" />
            Guardados
          </a>
        </Link>
      </li>
    </>
  )
}

export default MenuUsuario
