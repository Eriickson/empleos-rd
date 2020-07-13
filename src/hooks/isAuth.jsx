import { useState, useEffect } from 'react'
import { boolean } from 'boolean'

export const isAuth = () => {
  const [autenticado, setAutenticado] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    const lsAutenticado = boolean(localStorage.getItem('autenticado'))
    const lsRole = localStorage.getItem('role')

    setAutenticado(lsAutenticado)
    setRole(lsRole)
  }, [autenticado, role])

  return { autenticado, role, setAutenticado }
}
