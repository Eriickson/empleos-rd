import React from 'react'
import { Modal } from '../../elements'
import * as Feather from 'react-feather'

const ModalPosturte = () => {
  return (
    <div className="mt-5 d-flex flex-column">
      <Modal
        classNameButton="btn btn-primary mb-2"
        name="postularme"
        labelButton={
          <>
            <Feather.PlusCircle className="mr-2" />
            Postularme
          </>
        }
      >
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="card p-3">
                <p className="mb-0 lead">Nota de la empresa para usted</p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  repudiandae consectetur quam, temporibus laboriosam ipsa.
                  Libero voluptatibus perferendis possimus nemo! Quam soluta hic
                  ut dicta a porro odio ea atque.
                </p>
                <hr className="w-100" />
                <div className="d-flex justify-content-end">
                  <button className="btn btn-outline-danger mr-2 dark-modal-postularme">
                    Cancelar
                  </button>
                  <button className="btn btn-primary">Postularme</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <button className="btn btn-outline-primary mb-2">
        <Feather.Heart className="mr-2" />
        Guardar
      </button>
    </div>
  )
}

export default ModalPosturte
