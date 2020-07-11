import React from 'react'
import { Modal } from './Modal'
import { css } from '@emotion/core'

export const ScreenPDF = ({ url, labelButton }) => {
  return (
    <Modal
      labelButton={labelButton ? labelButton : 'ver'}
      classNameButton="btn btn-primary"
      btnClose={true}
    >
      <object
        data={url}
        type="application/pdf"
        css={css`
          width: 100vw;
          height: 100vh;
        `}
      >
        <p className="text-white">
          <a href={url}>click here to download the PDF file.</a>
        </p>
      </object>
    </Modal>
  )
}
