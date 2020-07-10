import React from 'react'
import { useForm } from 'react-hook-form'
import { generate } from 'shortid'
import { Collapse } from '../../elements'
import * as Feather from 'react-feather'

const ConocimientosFormularioNuevaVacante = ({
  conocimientos,
  setConocimientos,
}) => {
  const { errors, handleSubmit, register } = useForm()

  return (
    <div>
      <Collapse name="conocimientos" title="Conocimientos">
        <ul className="list-group">
          {conocimientos.map(({ id, titulo, puntuacion }) => (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <span>{titulo}</span>
              </div>
              <span
                onClick={() => {
                  const nuevosConocimientos = conocimientos.filter(
                    (conocimiento) => conocimiento.id !== id,
                  )
                  setConocimientos(nuevosConocimientos)
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
              name="conocimiento"
              ref={register({ required: true })}
            />
            <button
              className="btn btn-primary"
              onClick={handleSubmit(({ conocimiento }) => {
                setConocimientos([
                  ...conocimientos,
                  {
                    id: generate(),
                    titulo: conocimiento,
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

export default ConocimientosFormularioNuevaVacante
