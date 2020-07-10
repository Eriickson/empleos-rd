import React, { useState } from 'react'
import { ScreenPDF } from '../../../elements'

const DatosPersonales = () => {
  const [urlPdf, setUrlPdf] = useState(null)

  return (
    <div className="container p-0 p-md-2">
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-4">
            <p>Imagen</p>
            <img
              src="https://persona-app-es.herokuapp.com/assets/personas/1-e0e7223aeb2f66a659d032fb393d11d7e62e00706b1bef5f9f1a13eaa93d4b4b.png"
              alt=""
              className="img-fluid rounded w-25"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              placeholder="apellido"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha-nacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha-nacimiento"
              name="fecha-nacimiento"
              placeholder="fecha-nacimiento"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Sexo</label> <br />
            <label className="mr-3" htmlFor="m">
              <input
                className="form-check-input mr-2"
                type="radio"
                id="m"
                name="sexo"
                placeholder="sexo"
              />
              Masculino
            </label>
            <label className="mr-3" htmlFor="f">
              <input
                className="form-check-input mr-2"
                type="radio"
                id="f"
                name="sexo"
                placeholder="sexo"
              />
              Femenino
            </label>
          </div>
          <div className="form-file">
            <input
              type="file"
              className="form-file-input mb-2"
              id="cv"
              accept="application/pdf"
              onChange={(e) => {
                const url = URL.createObjectURL(e.target.files[0])
                setUrlPdf(url)
              }}
            />
            <label className="form-file-label" htmlFor="cv">
              <span className="form-file-text">CV (Máximo 5 Mb y PDF)</span>
              <span className="form-file-button">Agregar Archivo</span>
            </label>
            <ScreenPDF url={urlPdf} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-4">
            <label htmlFor="direccion" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              placeholder="direccion"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="estado-civil" className="form-label">
              Estado Civil
            </label>
            <input
              type="text"
              className="form-control"
              id="estado-civil"
              name="estado-civil"
              placeholder="estado-civil"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pais-origen" className="form-label">
              Pais de Origen
            </label>
            <select
              type="text"
              className="form-control"
              id="pais-origen"
              name="pais-origen"
              placeholder="pais-origen"
            >
              <option value="">Selecciona un pais</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="form-label">
              Mi Descripción
            </label>
            <textarea
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              placeholder="descripcion"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatosPersonales
