import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export const FormularioRegistrarEmpresa = () => {
  const { handleSubmit, errors, register } = useForm()

  const onSubmit = async (data) => {
    if (data.confirmPassword !== data.password) {
      console.log('No')

      return null
    }
    delete data.confirmPassword
    console.log(data)
  }

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
          <p className="text-center mb-4">(Empresa)</p>
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="businessName"
                className="form-label d-flex justify-content-between"
              >
                Nombre de la empresa
                {errors.businessName && AlertRequerido}
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                className="form-control"
                placeholder="Erickson Manuel"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label d-flex justify-content-between"
              >
                correo{errors.email && AlertRequerido}
              </label>
              <input
                id="email"
                name="email"
                type="text"
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
                htmlFor="numberEmployees"
                className="form-label d-flex justify-content-between"
              >
                Numero de Empleados{errors.numberEmployees && AlertRequerido}
              </label>
              <select
                id="numberEmployees"
                name="numberEmployees"
                className="form-control"
                ref={register({ required: true })}
              >
                <option value="">Cúantos Empleados?</option>
                <option value="1">1-4</option>
                <option value="2">5-9</option>
                <option value="3">10-19</option>
                <option value="4">20-29</option>
                <option value="5">30-49</option>
                <option value="6">50-99</option>
                <option value="7">+100</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label d-flex justify-content-between"
              >
                contraseña{errors.password && AlertRequerido}
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
                confirmar contraseña{errors.confirmPassword && AlertRequerido}
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
            <input
              type="submit"
              value="Registrarse"
              className="btn btn-success btn-block mt-3"
            />
          </form>
          <p className="text-center mt-3">
            Ya Registrate tu empresa?,
            <Link href="/iniciar-seccion/empresa">
              <a className="ml-1">Inicia Aquí</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
