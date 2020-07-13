import React, { useState } from 'react'
import Link from 'next/link'
import * as Feather from 'react-feather'

// My Components
import TabPillEmpresa from './TabPillEmpresa'
import ModalSolicitarEmpleo from './ModalSolicitarEmpleo'

// Hooks
import { isAuth } from '../../hooks'

export const EmpresaTemplate = () => {
  const { autenticado, role } = isAuth()

  const editarPerfil = (
    <Link
      href="/empresa/editar/[idEmpresa]"
      as={'/empresa/editar/uno-call-center'}
    >
      <a className="btn btn-outline-info btn-block mb-2">Editar</a>
    </Link>
  )

  const descripcion = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo.
      Corrupti iusto fuga, fugiat consectetur id recusandae deserunt. Nulla
      aperiam nobis iure temporibus fugiat animi dolores non distinctio, illum
      deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
      quo. Corrupti iusto fuga, fugiat consectetur id recusandae deserunt. Nulla
      aperiam nobis iure temporibus fugiat animi dolores non distinctio, illum
      deserunt?
    </p>
  )

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div>
            <div className="d-flex justify-content-center p-2">
              <img src="/img/uno.png" className="img-fluid rounded" alt="" />
            </div>
            {autenticado && role === 'business' && editarPerfil}
            {autenticado && role === 'user' && <ModalSolicitarEmpleo />}
            <p className="h2 mb-2 d-md-none">Uno Call Center</p>
            <div className="mb-2">
              <span className="mr-2 badge bg-warning">Desarrollador Web</span>
              <span className="mr-2 badge bg-success">Diseñador Gráfico</span>
              <span className="mr-2 badge bg-primary">UX/UI</span>
            </div>
            <div className="d-flex flex-column">
              <p>
                <Feather.Phone className="mr-1" /> +1 (829) 816-0959
              </p>
              <p>
                <Feather.Mail className="mr-1" /> Erickson01d@gmail.com
              </p>
              <p>
                <Feather.MapPin className="mr-1" /> Santiago/Rep. Dom.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <p className="h2 mb-5 d-none d-md-block">Uno Call Center</p>
          {autenticado && role === 'business' ? (
            <TabPillEmpresa />
          ) : (
            descripcion
          )}
        </div>
      </div>
    </>
  )
}
