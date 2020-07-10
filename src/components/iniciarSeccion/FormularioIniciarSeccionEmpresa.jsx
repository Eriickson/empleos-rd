import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

export const FormularioIniciarSeccionEmpresa = () => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4 card py-3 px-5 mt-5">
        <p className="text-center h3">Iniciar Sección</p>
        <p className="text-center mb-4">(Empresa)</p>
        <form className="row" onSubmit={handleSubmit(() => {})}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Correo
            </label>
            <input
              id="nombre"
              className="form-control"
              name="correo"
              type="text"
              placeholder="Correo o Nombre de la empresa"
              ref={register({ required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasenya" className="form-label">
              Contraseña
            </label>
            <input
              name="contrasenya"
              type="text"
              className="form-control"
              id="contrasenya"
              placeholder="Contraseña"
              ref={register({ required: true })}
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="recordarme"
              />
              <label className="form-check-label" htmlFor="recordarme">
                Recordarme
              </label>
            </div>
            <Link href="/recuperar-cuenta">
              <a>Olvidaste la contraseña?</a>
            </Link>
          </div>
          <input
            type="submit"
            value="Iniciar Seccion"
            className="btn btn-success btn-block mt-3"
          />
        </form>
        <span className="my-3 text-center">O</span>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-block btn-outline-primary mr-2"
            onClick={() => signInWithGoogle()}
          >
            Google
          </button>
          <button className="btn btn-block btn-outline-primary m-0">
            Facebook
          </button>
        </div>
        <p className="text-center mt-3">
          No has registrado tu empresa?,
          <Link href="/registrarse/nueva-empresa">
            <a className="ml-1">Hazlo aquí</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
