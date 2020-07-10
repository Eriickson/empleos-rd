import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { AlertNotification } from '../../elements'

export const FormularioRegistrarEmpresa = () => {
  const { handleSubmit, errors, register } = useForm()

  const onSubmit = async (data) => {
    if (data.confirmarContrasenya !== data.contrasenya) {
      return null
    }
    delete data.confirmarContrasenya
    console.log(data)
  }
  return (
    <>
      {Object.keys(errors).length > 0 && (
        <AlertNotification message={'Todos los campos son obligatorios'} />
      )}

      <div className="row">
        <div className="offset-md-3 col-md-6 card py-3 px-3 px-md-5 mt-md-5">
          <p className="text-center h3 mb-0">Regístrate</p>
          <p className="text-center mb-4">(Empresa)</p>
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre de la empresa
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
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                correo
              </label>
              <input
                id="correo"
                name="correo"
                type="text"
                className="form-control"
                placeholder="correo@correo.com"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numeroEmpleados" className="form-label">
                Numero de Empleados
              </label>
              <select
                id="numeroEmpleados"
                name="numeroEmpleados"
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
              <label htmlFor="contrasenya" className="form-label">
                contraseña
              </label>
              <input
                id="contrasenya"
                name="contrasenya"
                type="text"
                className="form-control"
                id="contrasenya"
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
