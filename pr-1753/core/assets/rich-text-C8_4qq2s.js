import{g as d,G as h}from"./custom-element-scoping-CpYtbs9r.js";import{t as c}from"./tokens.style-Dw60-dNf.js";import{o as m}from"./observe-light-dom-CmJPHUQ4.js";import{d as g}from"./default-typography.styles-BOILWASB.js";import{i as u}from"./lit-element-C_s9q329.js";const p=u`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
  }

  :host > :first-child {
    margin-top: 0;
  }

  /*
  * typography
  * -----------------------------------------------------------
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.6lh;
    margin-bottom: 0.3lh;
  }

  p {
    margin-bottom: 1lh;
  }

  blockquote {
    margin: unset;
    border-left: 0.2rem solid currentColor;
    padding-left: 1ch;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol,
  li {
    margin: 0 0 0 1ch;
    padding: 0 0 0.3lh 0;
  }
  li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure
  * -----------------------------------------------------------
  */
  figure {
    margin: 0;
    padding: 0;
    & img {
      display: block;
    }
  }
  figcaption {
    font-size: smaller;
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
  }
  th,
  td {
    padding: 0.3lh 0.6ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border: var(--default-border);
    border-radius: var(--gds-space-xs);
    padding: 0.5em 0.5em 0;
  }

  summary {
    font-weight: var(--gds-text-weight-book);
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
  }

  details[open] {
    padding: 0.5em;
  }

  details[open] summary {
    border-bottom: var(--default-border);
    margin-bottom: 0.5em;
  }
`;var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,n=(t,r,s,o)=>{for(var e=o>1?void 0:o?f(r,s):r,l=t.length-1,a;l>=0;l--)(a=t[l])&&(e=(o?a(r,s,e):a(e))||e);return o&&e&&b(r,s,e),e};let i=class extends h{querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):new NodeList}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):null}get innerHTML(){var t;return((t=this.shadowRoot)==null?void 0:t.innerHTML)||""}set innerHTML(t){this.shadowRoot&&(this.shadowRoot.innerHTML=t)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};i.styles=[c,g,p];n([m()],i.prototype,"_captureDOM",1);i=n([d("gds-rich-text")],i);
