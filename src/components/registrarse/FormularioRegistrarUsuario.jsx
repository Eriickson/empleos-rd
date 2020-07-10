import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import paises from 'i18n-iso-countries/langs/es.json'

// Apollo & GraphQL
import { useMutation } from '@apollo/react-hooks'
import { REGISTRAR_USUARIO_M } from '../../../graphql/mutations'

import { AlertNotification } from '../../elements'

export const FormularioRegistrarUsuario = () => {
  const [error, setError] = useState({ value: false, message: null })
  const { handleSubmit, register, errors } = useForm()
  const [registrarUsuario, { data }] = useMutation(REGISTRAR_USUARIO_M)

  const onSubmit = async (data) => {
    if (data.confirmarContrasenya !== data.contrasenya) {
      setError({ value: true, message: 'Las contraseñas no coinciden' })
      setTimeout(() => {
        setError({ value: false, message: null })
      }, 3000)
      return null
    }
    delete data.confirmarContrasenya
    const variables = { input: data }

    registrarUsuario({ variables }).catch((err) => {
      const errorManejado = JSON.parse(`${err}`.split('GraphQL error: ').pop())
      console.log(errorManejado)
    })
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
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setError({ value: true, message: 'Todos los campos son obligatorios' })
    }
    setTimeout(() => {
      setError({ value: false, message: null })
    }, 3000)
  }, [errors])
  console.log(errors)

  return (
    <>
      {error.value && <AlertNotification message={error.message} />}
      <div className="row">
        <div className="offset-md-3 col-md-6 card py-3 px-3 px-md-5 mt-md-5">
          <p className="text-center h3 mb-0">Regístrate</p>
          <p className="text-center mb-4">(Usuario)</p>
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 col-6">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="form-control"
                placeholder="Erickson Manuel"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="apellido" className="form-label">
                Apellidos
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                className="form-control"
                placeholder="Holguín"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                correo
              </label>
              <input
                id="correo"
                name="correo"
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
              <label htmlFor="usuario" className="form-label">
                Nombre de Usuario
              </label>
              <input
                id="usuario"
                name="usuario"
                type="text"
                className="form-control"
                placeholder="Erickson01d"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pais-origen" className="form-label">
                Pais de Origen
              </label>
              <select
                id="pais-origen"
                name="paisOrigen"
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
              <label htmlFor="contrasenya" className="form-label">
                contraseña
              </label>
              <input
                id="contrasenya"
                name="contrasenya"
                type="text"
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
              <label htmlFor="confirmar-contrasenya" className="form-label">
                confirmar contraseña
              </label>
              <input
                id="confirmar-contrasenya"
                name="confirmarContrasenya"
                type="text"
                className="form-control"
                placeholder=""
                ref={register({ required: true })}
              />
            </div>
            <div>
              <label className="form-check-label mb-2">Sexo</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sexo"
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
                  name="sexo"
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
