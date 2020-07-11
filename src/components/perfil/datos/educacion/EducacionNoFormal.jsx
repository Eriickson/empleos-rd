import React from 'react'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'
import Link from 'next/link'
import { ScreenPDF } from '../../../../elements'
import ItemEducacionNoFormal from './ItemEducacionNoFormal'

const EducacionNoFormal = () => {
  return (
    <div className="mb-3">
      <p className="h4">Educación No Formal</p>
      <div className="pl-3">
        <ItemEducacionNoFormal />
        <ItemEducacionNoFormal />
        <ItemEducacionNoFormal />
      </div>
    </div>
  )
}

export default EducacionNoFormal
