import { Router } from '@lit-labs/router'
import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping.js'

import './benches/decl-layout-1'
import './benches/css-layout-1'
import './benches/form-layout-1'
import './benches/table-benchmark'

@customElement('app-root')
export class AppElement extends LitElement {
  private _router = new Router(this, [
    { path: '/', render: () => html`<h1>Green Core Benchmarks</h1>` },
    {
      path: '/decl-layout-1',
      render: () => html`<decl-layout-1></decl-layout-1>`,
    },
    {
      path: '/css-layout-1',
      render: () => html`<css-layout-1></css-layout-1>`,
    },
    {
      path: '/form-layout-1',
      render: () => html`<form-layout-1></form-layout-1>`,
    },
    {
      path: '/table-benchmark',
      render: () => html`<table-benchmark></table-benchmark>`,
    },
  ])

  render() {
    return html`<main>${this._router.outlet()}</main>`
  }
}
