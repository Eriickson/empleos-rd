import React from 'react'
import { ActionsFormBottom } from '../../../elements'

const Contactos = () => {
  return (
    <div className="container p-0 p-md-2">
      <div className="row">
        <div className="col-md-6">
          <div>
            <p className="h4">Contactos</p>
            <div className="mb-2">
              <div className="mb-1">
                <label htmlFor="telefono-1">Teléfono Fijo</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <label htmlFor="telefono-1">Teléfono Celular</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <label htmlFor="telefono-1">Otro Teléfono</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <label htmlFor="telefono-1">Correo Electrónico</label>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <p className="h4">Redes Sociales</p>
            <div className="mb-2">
              <div className="mb-1 d-flex justify-content-between align-items-end w-100">
                <input className="w-50" type="text" placeholder="Usuario" />
                <label htmlFor="telefono-1">Facebook</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1 d-flex justify-content-between align-items-end w-100">
                <input className="w-50" type="text" placeholder="Usuario" />
                <label htmlFor="telefono-1">Whatsapp</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1 d-flex justify-content-between align-items-end w-100">
                <input className="w-50" type="text" placeholder="Usuario" />
                <label htmlFor="telefono-1">Instagram</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1 d-flex justify-content-between align-items-end w-100">
                <input className="w-50" type="text" placeholder="Usuario" />
                <label htmlFor="telefono-1">Twitter</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1 d-flex justify-content-between align-items-end w-100">
                <input className="w-50" type="text" placeholder="Usuario" />
                <label htmlFor="telefono-1">GitHub</label>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <div className="mb-1 d-flex justify-content-between align-items-end w-100">
                <input className="w-50" type="text" placeholder="Usuario" />
                <label htmlFor="telefono-1">TikTok</label>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <ActionsFormBottom />
      </div>
    </div>
  )
}

export default Contactos
