import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #555;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`

export default style
