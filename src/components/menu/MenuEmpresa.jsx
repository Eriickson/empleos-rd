import React from 'react'
import Link from 'next/link'
import * as Feather from 'react-feather'

const MenuEmpresa = () => {
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
        <Link
          href="/empresa/editar/[idEmpresa]"
          as="/empresa/editar/uno-call-center"
        >
          <a className="btn btn-primary d-flex align-items-center justify-content-center py-2">
            <Feather.Edit className="mr-2" />
            Editar Perfil
          </a>
        </Link>
      </li>
      <li className="mb-2 w-50">
        <Link href="/publicar/nueva-vacante">
          <a className="btn btn-primary d-flex align-items-center justify-content-center py-2">
            <Feather.PlusSquare className="mr-2" />
            Nueva Vacante
          </a>
        </Link>
      </li>
      <li className="mb-2 w-50">
        <Link href="/app">
          <a className="btn btn-primary d-flex align-items-center justify-content-center py-2">
            <Feather.File className="mr-2" />
            Publicaciones
          </a>
        </Link>
      </li>
    </>
  )
}

export default MenuEmpresa
