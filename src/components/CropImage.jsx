import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { css } from '@emotion/core'
import * as Feather from 'react-feather'

const CropImage = ({ urlImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = useCallback((croppedAreaPixels) => {
    console.log(croppedAreaPixels)
  }, [])

  return (
    <>
      <div
        className="position-relative"
        css={css`
          height: 50vh;
        `}
      >
        <div className="App">
          <div className="crop-container">
            <Cropper
              image={urlImage}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              showGrid={false}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              zoomWithScroll={false}
              cropShape={'round'}
            />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="btn-group mb-2 mr-2">
          <button
            className="btn btn-primary"
            onClick={() => zoom > 1 && setZoom(zoom - 0.03)}
          >
            <Feather.ZoomOut />
          </button>
          <button
            className="btn btn-primary"
            onClick={() => zoom < 1.5 && setZoom(zoom + 0.03)}
          >
            <Feather.ZoomIn />
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setCrop({ x: 0, y: 0 })}
          >
            <Feather.Aperture />
          </button>
        </div>
      </div>
    </>
  )
}

export default CropImage
