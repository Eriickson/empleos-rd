import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionsFormBottom, RedSocialInput } from '../../../elements'

const Contactos = () => {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="container p-0 p-md-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div>
              <p className="h4">Contactos</p>
              <div className="mb-2">
                <div className="mb-1">
                  <label htmlFor="phoneNumber">Teléfono Fijo</label>
                </div>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  ref={register}
                />
              </div>
              <div className="mb-2">
                <div className="mb-1">
                  <label htmlFor="phoneCell">Teléfono Celular</label>
                </div>
                <input
                  id="phoneCell"
                  name="phoneCell"
                  type="text"
                  className="form-control"
                  ref={register}
                />
              </div>
              <div className="mb-2">
                <div className="mb-1">
                  <label htmlFor="otherCell">Otro Teléfono</label>
                </div>
                <input
                  id="otherCell"
                  name="otherCell"
                  type="text"
                  className="form-control"
                  ref={register}
                />
              </div>
              <div className="mb-2">
                <div className="mb-1">
                  <label htmlFor="email">Correo Electrónico</label>
                </div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="form-control"
                  ref={register({ required: true })}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <p className="h4">Redes Sociales</p>
              <RedSocialInput register={register} redSocial={'facebook'} />
              <RedSocialInput register={register} redSocial={'whatsapp'} />
              <RedSocialInput register={register} redSocial={'instagram'} />
              <RedSocialInput register={register} redSocial={'twitter'} />
              <RedSocialInput register={register} redSocial={'gitHub'} />
              <RedSocialInput register={register} redSocial={'tiktok'} />
            </div>
          </div>
          <ActionsFormBottom />
        </div>
      </form>
    </div>
  )
}

export default Contactos
