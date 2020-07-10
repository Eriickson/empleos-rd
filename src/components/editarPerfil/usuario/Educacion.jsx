import React, { useState } from 'react'

const Educacion = () => {
  const [institucion, setInstitucion] = useState([1, 2, 3, 4])

  return (
    <div className="container p-0 p-md-2">
      <div className="row">
        <div className="col-md-6">
          <p className="h5 mb-4">Educacion Formal</p>
          <div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Primaria
              </label>
              <input type="text" className="form-control w-100" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Secundaria
              </label>
              <input type="text" className="form-control w-100" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Técnico
              </label>
              <input type="text" className="form-control w-100" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Universitario
              </label>
              <input type="text" className="form-control w-100" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Maestría
              </label>
              <input type="text" className="form-control w-100" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Doctorado
              </label>
              <input type="text" className="form-control w-100" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="h5 mb-4">Educacion No Formal</p>
          {institucion?.map((a, i) => (
            <div className="mb-4" key={i}>
              <input
                className="mb-1 w-100"
                type="text"
                defaultValue={'Institución'}
                placeholder="Nombre de la Institución"
              />
              <div className="input-group">
                <input type="text" className="form-control" />
                <button className="btn btn-primary">Archivo</button>
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
      </div>
    </div>
  )
}

export default Educacion
