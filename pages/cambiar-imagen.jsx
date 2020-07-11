import React, { useState, useCallback } from 'react'
import CropImage from '../src/components/CropImage'
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 position-relative">
          <CropImage />
        </div>
      </div>
    </div>
  )
}

export default App
