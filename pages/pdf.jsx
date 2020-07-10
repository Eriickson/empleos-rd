import React from 'react'
import { Modal, Container } from '../src/elements'
import { css } from '@emotion/core'

const pdf = () => {
  return (
    <Container>
      <Modal labelButton="ver" classNameButton="btn btn-primary">
        <object
          data="/pdf.pdf"
          type="application/pdf"
          css={css`
            height: 100vh;
            width: 100vw;
          `}
        >
          <p>
            It appears you don't have a PDF plugin for this browser. No
            biggie... you can{' '}
            <a href="myfile.pdf">click here to download the PDF file.</a>
          </p>
        </object>
      </Modal>
    </Container>
  )
}

export default pdf
