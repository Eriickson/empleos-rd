import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import paises from 'i18n-iso-countries/langs/es.json'

// Apollo & GraphQL

export const FormularioRegistrarUsuario = () => {
  const { handleSubmit, register, errors } = useForm()
  const [passwordError, setPasswordError] = useState(false)

  const onSubmit = async (data) => {
    if (data.confirmPassword !== data.password) {
      setPasswordError(true)
      setTimeout(() => {
        setPasswordError(false)
      }, 5000)
      return null
    }
    delete data.confirmPassword
    console.log(data)
  }

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

  const AlertRequerido = (
    <div>
      <span className="mr-1 text-danger">*</span>
      <span className="text-danger text-decoration-underline">requerido</span>
    </div>
  )

  return (
    <>
      <div className="row">
        <div className="offset-md-3 col-md-6 card py-3 px-3 px-md-5 mt-md-5">
          <p className="text-center h3 mb-0">Regístrate</p>
          <p className="text-center mb-4">(Usuario)</p>
          {passwordError && (
            <label htmlFor="password" className="text-center text-danger mb-4">
              Las contraseñas no coinciden
            </label>
          )}
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 col-6">
              <label
                htmlFor="name"
                className="form-label d-flex justify-content-between"
              >
                Nombre
                {errors.name && AlertRequerido}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Erickson Manuel"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3 col-6">
              <label
                htmlFor="lastname"
                className="form-label d-flex justify-content-between"
              >
                Apellidos
                {errors.lastname && AlertRequerido}
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                className="form-control"
                placeholder="Holguín"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label d-flex justify-content-between"
              >
                correo
                {errors.email && AlertRequerido}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="correo@correo.com"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Correo inválido',
                  },
                })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="form-label d-flex justify-content-between"
              >
                Nombre de Usuario
                {errors.username && AlertRequerido}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                placeholder="Erickson01d"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="nationality"
                className="form-label d-flex justify-content-between"
              >
                Pais de Origen
                {errors.nationality && AlertRequerido}
              </label>
              <select
                id="nationality"
                name="nationality"
                className="form-control"
                ref={register({
                  required: true,
                })}
              >
                <option value="">Ej: Rep. Dom.</option>
                {customPaises.map(({ key, pais }) => (
                  <option key={key} value={key}>
                    {pais}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label d-flex justify-content-between"
              >
                contraseña
                {errors.password && AlertRequerido}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder=""
                ref={register({
                  required: {
                    value: true,
                    message:
                      'La contraseña debe contar con almenos 6 caracteres',
                  },
                })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label d-flex justify-content-between"
              >
                confirmar contraseña
                {errors.confirmPassword && AlertRequerido}
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="form-control"
                placeholder=""
                ref={register({ required: true })}
              />
            </div>
            <div>
              <label className="form-check-label mb-2 d-flex justify-content-between">
                Sexo
                {errors.sex && AlertRequerido}
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  id="femenino"
                  ref={register({ required: true })}
                  value="F"
                />
                <label className="form-check-label" htmlFor="femenino">
                  Femenino
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  id="masculino"
                  ref={register({ required: true })}
                  value="M"
                />
                <label className="form-check-label" htmlFor="masculino">
                  Masculino
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Registrarse"
              className="btn btn-success btn-block mt-3"
            />
          </form>
          <p className="text-center mt-3">
            Ya tienes una cuenta,
            <Link href="/iniciar-seccion">
              <a className="ml-1">Inicia Sección</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
