import React from 'react'
import { createComponent } from '@lit/react'
import { IconTradingViewCandles } from '@sebgroup/green-core/components/icon/icons/trading-view-candles'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TradingViewCandles = createComponent({
  tagName: getScopedTagName('gds-icon-trading-view-candles'),
  elementClass: IconTradingViewCandles,
  react: React
})
