import { LitElement, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/dropdown/index.js'
import '@sebgroup/green-core/components/layout/container/index.js'

@customElement('app-root')
export class AppElement extends LitElement {
  static styles = css`
    .container1 {
      margin: 8px;
      padding: 8px;
    }

    .flex1 {
      display: flex;
      gap: 8px;
    }

    .card1 {
      border: 1px #bbb solid;
      padding: 8px;
      border-radius: 8px;
    }
  `

  entries = Array.from({ length: 1000 }, (_, i) => i)

  // render() {
  //   return html`${this.entries.map(
  //     (e) =>
  //       html`<gds-input
  //         supporting-text="Hello"
  //         label="${`Input ${e}`}"
  //         value="Some value"
  //         clearable
  //       >
  //         <span slot="extended-supporting-text">Hello hello</span>
  //       </gds-input>`,
  //   )}`
  // }

  // render() {
  //   return html`${this.entries.map(
  //     (e) =>
  //       html`<gds-dropdown label="${`Input ${e}`}">
  //         <gds-option>Hello hello</gds-option>
  //       </gds-dropdown>`,
  //   )}`
  // }

  render() {
    return html`${repeat(
      this.entries,
      (e) =>
        html`<gds-container margin="s" padding="s">
          <gds-flex gap="s">
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >1</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >2</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >3</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >1</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >2</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >3</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >1</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >2</gds-card
            >
            <gds-card border="4xs/primary" padding="s" border-radius="s"
              >3</gds-card
            >
          </gds-flex>
        </gds-container>`,
    )}`
  }

  // render() {
  //   return html`${this.entries.map(
  //     (e) =>
  //       html`<div class="container1">
  //         <div class="flex1">
  //           <div class="card1">1</div>
  //           <div class="card1">2</div>
  //           <div class="card1">3</div>
  //           <div class="card1">1</div>
  //           <div class="card1">2</div>
  //           <div class="card1">3</div>
  //           <div class="card1">1</div>
  //           <div class="card1">2</div>
  //           <div class="card1">3</div>
  //         </div>
  //       </div>`,
  //   )}`
  // }
}
