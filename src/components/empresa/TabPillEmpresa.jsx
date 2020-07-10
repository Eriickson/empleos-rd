import React from 'react'
import {
  TPContainerHeader,
  TPContainerBody,
  TabNav,
  TabBody,
} from '../../elements'
import TablaPublicaciones from './TablaPublicaciones'

const TabPillEmpresa = () => {
  return (
    <>
      <TPContainerHeader title={'informacion'}>
        <TabNav isActive={true} title="Información" name="informacion" />
        <TabNav title="Publicaciones" name="publicaciones" />
      </TPContainerHeader>
      <TPContainerBody name={'informacion'}>
        <TabBody isActive={true} name="informacion">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            cupiditate asperiores. Rerum deleniti iure possimus! Deleniti odio
            atque non numquam minus? Beatae ea quam, necessitatibus odit
            quisquam eaque asperiores nostrum.
          </p>
        </TabBody>
        <TabBody name="publicaciones">
          <TablaPublicaciones />
        </TabBody>
      </TPContainerBody>
    </>
  )
}

export default TabPillEmpresa
