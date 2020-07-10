import React, { useEffect, useState } from 'react'
import { Perfil as P } from '../../src/components'
import Router from 'next/router'

const Perfil = () => {
  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    isAuth ? null : Router.push('/app')
  }, [isAuth])

  if (!isAuth) {
    return <p>Seccion no iniciada</p>
  }
  return <P />
}
export default Perfil
