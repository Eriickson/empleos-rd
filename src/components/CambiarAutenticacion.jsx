import React, { useState, useEffect } from 'react'
import { boolean } from 'boolean'

const CambiarAutenticacion = () => {
  const [autenticado, setAutenticado] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const estado = boolean(localStorage.getItem('autenticado'))

      setAutenticado(estado)
    }
  }, [autenticado])

  return (
    <button
      className="btn btn-secondary"
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          autenticado
            ? localStorage.setItem('autenticado', 'false')
            : localStorage.setItem('autenticado', 'true')
          document.location.reload()
        }
      }}
    >
      {autenticado ? 'AUTH' : 'NO AUTH'}
    </button>
  )
}

export default CambiarAutenticacion
