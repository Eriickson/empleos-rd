import React from 'react'
import { useForm } from 'react-hook-form'
import { generate } from 'shortid'
import { Collapse } from '../../elements'
import * as Feather from 'react-feather'

const RequisitosFormularioNuevaVacante = ({ requisitos, setRequisitos }) => {
  const { errors, handleSubmit, register } = useForm()

  return (
    <div>
      <Collapse title="Requisitos">
        <ul className="list-group mt-2">
          {requisitos?.map(({ id, titulo }) => (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <span>{titulo}</span>
              </div>
              <span
                onClick={() => {
                  const nuevosRequisitos = requisitos.filter(
                    (requisito) => requisito.id !== id,
                  )
                  setRequisitos(nuevosRequisitos)
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
              name="requisito"
              ref={register({ required: true })}
            />
            <button
              className="btn btn-primary"
              onClick={handleSubmit(({ requisito }) => {
                setRequisitos([
                  ...requisitos,
                  {
                    id: generate(),
                    titulo: requisito,
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

export default RequisitosFormularioNuevaVacante
