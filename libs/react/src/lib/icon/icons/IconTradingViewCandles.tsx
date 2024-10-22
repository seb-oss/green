import React from 'react'
import { createComponent } from '@lit/react'

import { IconTradingViewCandles as Icon } from '@sebgroup/green-core/components/icon/icons/trading-view-candles.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTradingViewCandles = createComponent({
  tagName: getScopedTagName('gds-icon-trading-view-candles'),
  elementClass: Icon,
  react: React,
})
