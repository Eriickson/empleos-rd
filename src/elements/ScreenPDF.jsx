import React from 'react'
import { Modal } from './Modal'

export const ScreenPDF = ({ url }) => {
  return (
    <Modal labelButton="ver" classNameButton="btn btn-primary">
      <object
        data={`https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`}
        type="application/pdf"
      >
        <p className="text-white">
          <a href={url}>click here to download the PDF file.</a>
        </p>
      </object>
    </Modal>
  )
}
