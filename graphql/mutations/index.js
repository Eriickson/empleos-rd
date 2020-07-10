import gql from 'graphql-tag'

export const REGISTRAR_USUARIO_M = gql`
  mutation registrarUsuario($input: UsuarioInput) {
    registrarUsuario(input: $input) {
      id
      correo
      usuario
      contrasenya
      nombre
      apellido
      sexo
      paisOrigen
    }
  }
`
