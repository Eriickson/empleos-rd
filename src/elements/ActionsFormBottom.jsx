import React from 'react'

export const ActionsFormBottom = () => {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-outline-danger mr-2" type="button">
          Cancelar
        </button>
        <input
          type="submit"
          className="btn btn-primary"
          value="Guardar Cambios"
        />
      </div>
    </div>
  )
}
