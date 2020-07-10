import React, { useState } from 'react'
import Redirect from 'next/router'

// Firebase
import firebase from 'firebase/app'
import { auth } from '../../firebase'

// My Components
import MasterPageLogin from '../../src/layout/MasterPageLogin'
import { FormularioRegistrarUsuario } from '../../src/components'
import { Container } from '../../src/elements'

const NuevoUsuario = () => {
  const [isRegister, setIsRegister] = useState(true)

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const data = await auth.signInWithPopup(provider)

    // Si el usuario ya existe lo enviamos a la página principal
    if (!data.additionalUserInfo.isNewUser) {
      Redirect.push('/app')
    }

    // Si el usuario se registra
    setIsRegister(data.additionalUserInfo.isNewUser)
  }

  return (
    <MasterPageLogin title="Usuario">
      <Container className={'pt-1 pt-md-5'}>
        {!isRegister && (
          <div className="row">
            <div className="offset-md-3 col-md-6 card py-3 px-3 px-md-5 mt-md-5">
              <p className="text-center h3 mb-4">Regístrate con:</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary mr-3"
                  onClick={signInWithGoogle}
                >
                  Google
                </button>
                <button className="btn btn-primary">Facebook</button>
              </div>
            </div>
          </div>
        )}
        {isRegister && <FormularioRegistrarUsuario />}
      </Container>
    </MasterPageLogin>
  )
}

export default NuevoUsuario
