import React from 'react'
import { useForm } from 'react-hook-form'
import { generate } from 'shortid'
import { Collapse } from '../../elements'
import * as Feather from 'react-feather'

const BeneficiosFormularioNuevaVacante = ({ beneficios, setBeneficios }) => {
  const { errors, handleSubmit, register } = useForm()

  return (
    <div>
      <Collapse name="beneficios" title="Beneficios">
        <ul className="list-group">
          {beneficios?.map(({ id, titulo }) => (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <span>{titulo}</span>
              </div>
              <span
                onClick={() => {
                  const nuevosBeneficios = beneficios.filter(
                    (beneficio) => beneficio.id !== id,
                  )
                  setBeneficios(nuevosBeneficios)
                }}
              >
                <Feather.X className="" />
              </span>
            </li>
          ))}
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              name="beneficio"
              ref={register({ required: true })}
            />
            <button
              className="btn btn-primary"
              onClick={handleSubmit(({ beneficio }) => {
                setBeneficios([
                  ...beneficios,
                  {
                    id: generate(),
                    titulo: beneficio,
                  },
                ])
              })}
            >
              Agregar
            </button>
          </div>
        </ul>
      </Collapse>
    </div>
  )
}

export default BeneficiosFormularioNuevaVacante
