import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import sortArray from 'sort-array'
import RequisitosFormularioNuevaVacante from './RequisitosFormularioNuevaVacante'
import ConocimientosFormularioNuevaVacante from './ConocimientosFormularioNuevaVacante'
import BeneficiosFormularioNuevaVacante from './BeneficiosFormularioNuevaVacante'
import IdiomaFormularioNuevaVacante from './IdiomaFormularioNuevaVacante'
import { AlertNotification } from '../../elements'

import provincias from '../../../json/provincias.json'
import areas from '../../../json/areas.json'
import { css } from '@emotion/core'
import Link from 'next/link'

const StyleTextArea = css`
  min-height: 150px;
  max-height: 200px;
`

export const FormularioNuevaVacante = () => {
  const [idiomas, setIdiomas] = useState([])
  const [requisitos, setRequisitos] = useState([])
  const [conocimientos, setConocimientos] = useState([])
  const [beneficios, setBeneficios] = useState([])
  const { errors, handleSubmit, register } = useForm()

  const provinciasOrder = sortArray(provincias, {
    by: 'provincia',
    order: 'asc',
  })
  const areasOrder = sortArray(areas, {
    by: 'area',
    order: 'asc',
  })

  const onSubmit = (data) => {
    const datos = { ...data, conocimientos, requisitos, beneficios }
    console.log(datos)
  }
  useEffect(() => {}, [errors])

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <AlertNotification
          message={'Debe de completar los campos obligatorios'}
        />
      )}
      <p className="text-center h1 py-2 py-md-4">Nueva Vacante</p>
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <form className="p-md-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="mb-3 col-5 col-md-4">
                <label htmlFor="area" className="form-label">
                  Area
                </label>
                <select
                  className="form-control"
                  name="area"
                  id="area"
                  ref={register({ required: true })}
                >
                  <option value="">Seleccione una area</option>
                  {areasOrder.map((area, i) => (
                    <option key={i} value={area}>
                      {area.area}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 col-7 col-md-8">
                <label htmlFor="ubicacion" className="form-label">
                  Ubicación
                </label>
                <select
                  className="form-control"
                  name="ubicacion"
                  id="ubicacion"
                  ref={register({ required: true })}
                >
                  <option value="">Ciudad o provincia</option>
                  {provinciasOrder.map((provincia, i) => (
                    <option key={i} value={provincia.id}>
                      {provincia.provincia}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <input
                id="titulo"
                className="form-control"
                type="text"
                name="titulo"
                ref={register}
                placeholder="Ej: Buscamos desarrollador web..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción
              </label>
              <textarea
                id="descripcion"
                className="form-control"
                type="text"
                name="descripcion"
                cols="30"
                rows="10"
                ref={register}
                placeholder="Descripción"
                css={StyleTextArea}
              ></textarea>
            </div>
            <div className="row">
              <div className="mb-3 col-4">
                <label htmlFor="salario" className="form-label">
                  Salario
                </label>
                <input
                  id="salario"
                  name="salario"
                  type="number"
                  className="form-control"
                  min={0}
                  ref={register}
                  placeholder="$$$"
                />
              </div>

              <div className="mb-3 col-6">
                <label htmlFor="jornada" className="form-label">
                  Jornada
                </label>
                <select
                  name="jornada"
                  id="jornada"
                  className="form-control"
                  ref={register}
                >
                  <option value="">Jornada</option>
                  <option value="">Tiempo completo</option>
                  <option value="">Medio tiempo</option>
                  <option value="">Por contrato</option>
                  <option value="">Temporal</option>
                  <option value="">Comisión</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="salario" className="form-label">
                Idiomas
              </label>
              <IdiomaFormularioNuevaVacante idioma="Ingles" />
            </div>
            <div className="mb-3">
              <label htmlFor="puesto" className="form-label">
                Puesto
              </label>
              <input
                id="puesto"
                type="text"
                className="form-control"
                ref={register}
                name="puesto"
                placeholder="ej: Desarrollador Web"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numero-vacantes" className="form-label">
                Número de Vacantes
              </label>
              <input
                type="number"
                className="form-control w-25"
                id="numero-vacantes"
                placeholder="#"
              />
            </div>
            <i className="mb-2 d-block"></i>
            <RequisitosFormularioNuevaVacante
              requisitos={requisitos}
              setRequisitos={setRequisitos}
            />
            <i className="mb-2 d-block"></i>
            <ConocimientosFormularioNuevaVacante
              conocimientos={conocimientos}
              setConocimientos={setConocimientos}
            />
            <i className="mb-2 d-block"></i>
            <BeneficiosFormularioNuevaVacante
              beneficios={beneficios}
              setBeneficios={setBeneficios}
            />
            <div className="my-3">
              <label htmlFor="mensajes-postulantes" className="form-label">
                Mensaje para los postulantes
              </label>
              <textarea
                id="mensajes-postulantes"
                className="form-control"
                type="text"
                name="mensajes-postulantes"
                cols="30"
                rows="10"
                ref={register}
                placeholder="Descripción"
                css={StyleTextArea}
              ></textarea>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <Link href="/app">
                <a className="btn btn-danger mr-2">Cancelar</a>
              </Link>
              <button className="btn btn-success">Publicar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
