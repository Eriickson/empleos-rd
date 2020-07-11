import React, { useState, useEffect } from 'react'

const CambiarRole = () => {
  const [role, setRole] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const estado = localStorage.getItem('role')

      setRole(estado)
    }
  }, [role])

  return (
    <button
      className="btn btn-secondary mr-2"
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          role === 'user'
            ? localStorage.setItem('role', 'business')
            : localStorage.setItem('role', 'user')
          document.location.reload()
        }
      }}
    >
      {`${role}`.toLocaleUpperCase()}
    </button>
  )
}

export default CambiarRole
