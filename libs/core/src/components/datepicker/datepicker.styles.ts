import { css } from 'lit'

export const styles = css`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 1ch;
      box-sizing: border-box;
      gap: 1ch;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: 1ch;
      padding-block-end: 1ch;
    }
  }
`
