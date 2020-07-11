import React, { useState, useCallback } from 'react'
import * as Feather from 'react-feather'

import { Modal, UploadFileButton } from '../../../elements'
import { css } from '@emotion/core'
import CropImage from '../../CropImage'

const ModalCambiarFoto = () => {
  const [file, setFile] = useState({ urlImage: null, file: null })
  const cambiarArchivo = (data) => {
    const objFile = { urlImage: URL.createObjectURL(data[0]), file: data[0] }
    setFile(objFile)
  }
  return (
    <Modal
      classNameButton="mt-2 btn btn-primary"
      labelButton={<Feather.Edit />}
      closeZone={false}
      btnClose={true}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <CropImage urlImage={file.urlImage} />

            <UploadFileButton
              accept={'image/png,image/jpeg'}
              labelButton={<Feather.Image />}
              getFile={cambiarArchivo}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalCambiarFoto
