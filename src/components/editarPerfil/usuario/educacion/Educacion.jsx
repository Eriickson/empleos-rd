import React, { useState } from 'react'

import { UploadFileButton, ActionsFormBottom } from '../../../../elements'
import * as Feather from 'react-feather'
import InputEducacionFormal from './InputEducacionFormal'

const Educacion = () => {
  const [institucion, setInstitucion] = useState([1])

  return (
    <div className="container p-0 p-md-2">
      <div className="row">
        <div className="col-md-6">
          <p className="h5 mb-4">Educacion Formal</p>
          <div>
            <InputEducacionFormal name={'primaria'} />
            <InputEducacionFormal name={'secundaria'} />
            <InputEducacionFormal name={'tecnico'} />
            <InputEducacionFormal name={'universitario'} />
            <InputEducacionFormal name={'maestria'} />
            <InputEducacionFormal name={'doctorado'} />
          </div>
        </div>
        <div className="col-md-6">
          <p className="h5 mb-4">Educacion No Formal</p>
          {institucion?.map((a, i) => (
            <div className="mb-4" key={i}>
              <div className="d-flex justify-content-between">
                <input
                  className="mb-1"
                  type="text"
                  placeholder="Nombre de la Institución"
                />
                <div>12/2020 - 20/2021</div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título obtenido..."
                />
                <UploadFileButton labelButton={<Feather.FilePlus />} />
                <button className="btn btn-outline-danger">
                  <Feather.X />
                </button>
              </div>
            </div>
          ))}
          <div className="mb-4">
            <button
              className="btn btn-outline-primary btn-block"
              onClick={() => {
                setInstitucion([...institucion, 1])
              }}
            >
              Agregar
            </button>
          </div>
        </div>
        <ActionsFormBottom />
      </div>
    </div>
  )
}

export default Educacion
