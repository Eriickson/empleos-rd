import React from 'react'
import Link from 'next/link'
import { Modal, Container } from '../elements'

const RegistrarseModal = () => {
  return (
    <Modal
      name="registro"
      labelButton="Regístrate"
      classNameButton="btn btn-primary"
    >
      <div className="container">
        <div className="row">
          <div className="offset-md-3 offset-lg-4 col-md-6 col-lg-4">
            <div className="card p-3 text-center">
              <p className="h4 text-center mb-4">Regístrate como</p>
              <Link href="/registrarse/nueva-empresa">
                <a className="btn btn-primary mb-3">Empresa</a>
              </Link>
              <Link href="/registrarse/nuevo-usuario">
                <a className="btn btn-primary">Usuario</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default RegistrarseModal
