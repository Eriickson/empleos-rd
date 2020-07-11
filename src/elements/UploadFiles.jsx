import React, { useCallback } from 'react'
import Dropzone from 'react-dropzone'

export const UploadFileButton = ({ labelButton, getFile, accept }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)

    getFile(acceptedFiles)
  }, [])
  // const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    // <div {...getRootProps()}>
    //   <input {...getInputProps()} />
    //   <button className="btn btn-primary">{labelButton}</button>
    // </div>
    <Dropzone accept={accept} onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <button className="btn btn-primary">{labelButton}</button>
        </div>
      )}
    </Dropzone>
  )
}
