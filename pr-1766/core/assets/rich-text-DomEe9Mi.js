import{g as d,G as h}from"./custom-element-scoping-b4lD3laR.js";import{t as c}from"./tokens.style-BMleC81K.js";import{o as g}from"./observe-light-dom-CmJPHUQ4.js";import{d as p}from"./text-DvHB6r6T.js";import{i as m}from"./lit-element-C_s9q329.js";const u=m`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
  }

  :host > :first-child {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: var(--gds-space-2xl);
    margin-bottom: var(--gds-space-xs);
  }

  h1 + h2 {
    margin-top: 0;
  }

  h2 + h3 {
    margin-top: 0;
  }

  h3 + h4 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h5 + h6 {
    margin-top: 0;
  }

  // h2 {
  //   margin-bottom: var(--gds-space-xs);
  // }

  // h3 {
  //   margin-bottom: var(--gds-space-2xs);
  // }

  // h1 {
  //   margin-bottom: var(--gds-space-xs);
  // }

  // Consider to do this some other way

  p {
    margin: 0;
    margin-bottom: var(--gds-space-xs);
    max-width: 80ch;
    line-height: 22px;
  }

  // tests

  blockquote {
    margin: unset;
    margin-block: 2lh;
    border-left: 0.2rem solid currentColor;
    padding-left: 2ch;
    max-width: 40ch;
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
    margin-top: var(--gds-space-xl);
    & img {
      display: block;
    }
  }
  figcaption {
    font-size: smaller;
    margin-block-start: var(--gds-space-xs);
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: var(--default-border);
    border-radius: var(--gds-space-s);
  }
  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: var(--gds-color-l3-content-secondary);
  }

  th:not(:last-child) {
    border-right: var(--default-border);
  }

  th,
  td {
    padding: 0.3lh 2ch;
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
    border-top: solid var(--gds-space-4xs) var(--gds-color-l3-border-tertiary);
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    color: var(--gds-color-l2-content-secondary);
  }

  summary {
    font-weight: var(--gds-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font-size: var(--gds-text-size-body-l);
    line-height: var(--gds-text-line-height-body-l);
    color: var(--gds-color-l2-content-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-space-2xs);
    outline-color: currentColor;

    &:focus-visible {
      border-radius: var(--gds-space-2xs);
    }
  }

  summary::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-weight: var(--gds-text-weight-regular);
    font-size: var(--gds-text-size-body-l);
  }

  details[open] summary::after {
    content: '-';
  }

  details[open] {
    margin-bottom: 1lh;
  }

  details[open] summary {
    border-bottom: var(--gds-space-4xs) solid
      var(--gds-color-l3-border-tertiary);
  }
`;var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l=(t,e,a,o)=>{for(var r=o>1?void 0:o?f(e,a):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(r=(o?n(e,a,r):n(r))||r);return o&&r&&b(e,a,r),r};let s=class extends h{querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):new NodeList}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):null}get innerHTML(){var t;return((t=this.shadowRoot)==null?void 0:t.innerHTML)||""}set innerHTML(t){this.shadowRoot&&(this.shadowRoot.innerHTML=t)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};s.styles=[c,p,u];l([g()],s.prototype,"_captureDOM",1);s=l([d("gds-rich-text")],s);
