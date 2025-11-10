import { css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { html } from '@sebgroup/green-core/scoping.js'

@customElement('css-layout-1')
export class CssLayout1 extends LitElement {
  static styles = css`
    .container1 {
      margin: 12px;
      padding: 12px;
    }

    .flex1 {
      display: flex;
      gap: 12px;
    }

    .card1 {
      border: 1px #ccc solid;
      padding: 12px;
      border-radius: 12px;
    }
  `

  entries = Array.from({ length: 1000 }, (_, i) => i)

  render() {
    return html`${repeat(
      this.entries,
      () =>
        html`<div class="container1">
          <div class="flex1">
            <div class="card1">1</div>
            <div class="card1">2</div>
            <div class="card1">3</div>
            <div class="card1">1</div>
            <div class="card1">2</div>
            <div class="card1">3</div>
            <div class="card1">1</div>
            <div class="card1">2</div>
            <div class="card1">3</div>
          </div>
        </div>`,
    )}`
  }
}
