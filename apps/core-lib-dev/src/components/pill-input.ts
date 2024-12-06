import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('tp-pill-input')
export class TpSliderInput extends LitElement {
  @property({ type: String }) value = ''

  static styles = css`
    div {
      width: fit-content;
    }
    input {
      min-width: 20px;
      background-color: var(--gds-color-l1-background-primary);
      color: var(--gds-color-l1-content-primary);
      border-radius: var(--gds-space-max);
      border: none;

      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      text-align: center;

      padding: var(--gds-space-xs) var(--gds-space-s);
      margin: 0;
    }
  `

  render() {
    return html`
      <div>
        <input
          @input=${this.#handleOnInput}
          @change=${this.#handleOnChange}
          style="width: ${this.value.length}ch;"
          type="text"
          .value=${this.value}
        />
      </div>
    `
  }

  #handleOnInput = (e: Event) => {
    const element = e.target as HTMLInputElement
    this.value = element.value
  }

  #handleOnChange = (e: Event) => {
    const element = e.target as HTMLInputElement
    this.value = element.value
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true,
      }),
    )
  }
}
