import React from 'react'
import { ActionsFormBottom } from '../../../elements'

const Cuenta = () => {
  return (
    <div className="container p-0 p-md-2">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              name="usuario"
              placeholder="usuario"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo-electronico" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="text"
              className="form-control"
              id="correo-electronico"
              name="correo-electronico"
              placeholder="correo-electronico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contrasenya" className="form-label">
              Contraseña
            </label>
            <input
              type="text"
              className="form-control"
              id="contrasenya"
              name="contrasenya"
              placeholder="contrasenya"
            />
          </div>
          <div className="mb-4 form-check form-switch">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input className="form-check-input" type="checkbox" id="estado" />
          </div>
          <button className="mt-4 btn btn-outline-warning btn-block">
            Deshabilitar cuenta
          </button>
          <button className="mt-2 btn btn-outline-danger btn-block">
            Eliminar Cuenta
          </button>
        </div>
        <ActionsFormBottom />
      </div>
    </div>
  )
}

export default Cuenta
