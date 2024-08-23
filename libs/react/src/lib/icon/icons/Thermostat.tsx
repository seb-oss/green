import React from 'react'
import { createComponent } from '@lit/react'
import { IconThermostat } from '@sebgroup/green-core/components/icon/icons/thermostat'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Thermostat = createComponent({
  tagName: getScopedTagName('gds-icon-thermostat'),
  elementClass: IconThermostat,
  react: React
})
