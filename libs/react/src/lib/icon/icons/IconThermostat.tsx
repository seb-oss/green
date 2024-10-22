import React from 'react'
import { createComponent } from '@lit/react'
import { IconThermostat as Icon } from '@sebgroup/green-core/components/icon/icons/thermostat.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconThermostat = createComponent({
  tagName: getScopedTagName('gds-icon-thermostat'),
  elementClass: Icon,
  react: React,
})
