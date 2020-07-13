import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import paises from 'i18n-iso-countries/langs/es.json'

import { ScreenPDF, ActionsFormBottom } from '../../../elements'
import ModalCambiarFoto from './ModalCambiarFoto'

const DatosPersonales = () => {
  const [urlPdf, setUrlPdf] = useState(null)
  const { register, handleSubmit, errors } = useForm()

  let customPaises = Object.keys(paises.countries).map((key) => {
    return { key, pais: paises.countries[key] }
  })
  customPaises.sort((a, b) => {
    if (a.pais > b.pais) {
      return 1
    }
    if (a.pais < b.pais) {
      return -1
    }
    return 0
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="container p-0 p-md-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <p>Imagen</p>
              <img
                src="https://persona-app-es.herokuapp.com/assets/personas/1-e0e7223aeb2f66a659d032fb393d11d7e62e00706b1bef5f9f1a13eaa93d4b4b.png"
                alt=""
                className="img-fluid rounded w-25"
              />
              <br />
              <ModalCambiarFoto />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="name"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                placeholder="lastname"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="birthDate" className="form-label">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                placeholder="birthDate"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Sexo</label> <br />
              <label className="mr-3" htmlFor="m">
                <input
                  className="form-check-input mr-2"
                  type="radio"
                  id="m"
                  name="sex"
                  placeholder="sexo"
                  ref={register({ required: true })}
                />
                Masculino
              </label>
              <label className="mr-3" htmlFor="f">
                <input
                  className="form-check-input mr-2"
                  type="radio"
                  id="f"
                  name="sex"
                  placeholder="sexo"
                  ref={register({ required: true })}
                />
                Femenino
              </label>
            </div>
            <div className="form-file">
              <input
                type="file"
                className="form-file-input mb-2"
                id="cv"
                name="cv"
                accept="application/pdf"
                ref={register}
                onChange={(e) => {
                  const url = URL.createObjectURL(e.target.files[0])
                  setUrlPdf(url)
                }}
                multiple={false}
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
              <label htmlFor="direction" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="direction"
                name="direction"
                placeholder="direccion"
                ref={register}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="civilStatus" className="form-label">
                Estado Civil
              </label>
              <input
                id="civilStatus"
                name="civilStatus"
                type="text"
                className="form-control"
                placeholder="Estado Civil"
                ref={register}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="nationality" className="form-label">
                Pais de Origen
              </label>
              <select
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
                placeholder="Pais de Origen"
                ref={register({ required: true })}
              >
                <option value="">Selecciona un pais</option>
                {customPaises.map(({ key, pais }) => (
                  <option key={key} value={key}>
                    {pais}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="form-label">
                Mi Descripción
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Descripción"
                cols="30"
                rows="10"
                ref={register}
              ></textarea>
            </div>
          </div>
          <ActionsFormBottom />
        </div>
      </form>
    </div>
  )
}

export default DatosPersonales
