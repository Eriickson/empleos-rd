import React from 'react'
import Link from 'next/link'
import { Modal } from '../elements'

const IniciarSeccionModal = () => {
  return (
    <Modal
      name="iniciar-seccion"
      labelButton="Iniciar Sección"
      classNameButton="btn btn-primary"
    >
      <div className="container">
        <div className="row">
          <div className="offset-md-3 offset-lg-4 col-md-6 col-lg-4">
            <div className="card p-3 text-center">
              <p className="h4 text-center mb-4">Iniciar como</p>
              <Link href="/iniciar-seccion/empresa">
                <a className="btn btn-primary mb-3">Empresa</a>
              </Link>
              <Link href="/iniciar-seccion">
                <a className="btn btn-primary">Usuario</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default IniciarSeccionModal
