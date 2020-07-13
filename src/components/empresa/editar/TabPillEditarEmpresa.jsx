import React from 'react'
import {
  TPContainerHeader,
  TPContainerBody,
  TabBody,
  TabNav,
} from '../../../elements/'
import CuentaEmpresa from './CuentaEmpresa'
import DatosEmpresa from './DatosEmpresa'

const TabPillEditarEmpresa = () => {
  return (
    <div>
      <TPContainerHeader center={true}>
        <TabNav title="Cuenta" name="config-cuenta" isActive={true} />
        <TabNav title="Empresa" name="config-empresa" />
      </TPContainerHeader>
      <TPContainerBody>
        <TabBody name="config-cuenta" isActive={true}>
          <CuentaEmpresa />
        </TabBody>
        <TabBody name="config-empresa">
          <DatosEmpresa />
        </TabBody>
      </TPContainerBody>
    </div>
  )
}

export default TabPillEditarEmpresa
