import{n as d,g as c,G as h}from"./custom-element-scoping-BEGY3AqQ.js";import{t as g}from"./tokens.style-CFvqdzpw.js";import{o as p}from"./observe-light-dom-CmJPHUQ4.js";import{d as m,b as u}from"./declarative-layout-mixins-Cg5fmtre.js";import{d as b}from"./text-jrH1ZDqA.js";import{i as f}from"./lit-element-C_s9q329.js";const x=f`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
    display: block;
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

  p {
    margin: 0;
    margin-bottom: var(--gds-space-xs);
    max-width: 80ch;
  }

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
  ul {
    padding-inline-start: 2ch;
  }

  ol {
    margin-left: 3ch;
    margin-bottom: 1lh;
  }

  li {
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
    margin-top: var(--gds-space-xl);
  }

  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: currentColor;
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
    border-top: solid var(--gds-space-4xs)
      color-mix(in srgb, currentColor, transparent 90%);
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
  }

  summary {
    font-weight: var(--gds-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font-size: var(--gds-text-size-body-l);
    line-height: var(--gds-text-line-height-body-l);
    color: currentColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-space-2xs);
    outline-color: currentColor;
    padding-inline: var(--gds-space-m);

    &:focus-visible {
      border-radius: var(--gds-space-2xs);
    }
  }

  details:hover summary {
    background: color-mix(in srgb, currentColor, transparent 95%);
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
    border-bottom: var(--gds-space-4xs) solid
      color-mix(in srgb, currentColor, transparent 95%);
    padding-bottom: 0.4lh;
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  details[open] > *:not(summary) {
    margin-left: var(--gds-space-m);
  }

  details[open] summary {
    margin-bottom: 0.4lh;
  }

  details[open] + details {
    border: none;
  }

  details:last-of-type {
    border-bottom: var(--gds-space-4xs) solid
      color-mix(in srgb, currentColor, transparent 90%);
    margin-bottom: var(--gds-space-xl);
  }

  a {
    color: currentColor;
    text-decoration-color: currentColor;
  }
`;var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(r,e,a,s)=>{for(var t=s>1?void 0:s?y(e,a):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(t=(s?n(e,a,t):n(t))||t);return s&&t&&v(e,a,t),t};let o=class extends m(u(h)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(r){return this.shadowRoot?this.shadowRoot.querySelectorAll(r):new NodeList}querySelector(r){return this.shadowRoot?this.shadowRoot.querySelector(r):null}get innerHTML(){var r;return((r=this.shadowRoot)==null?void 0:r.innerHTML)||""}set innerHTML(r){this.shadowRoot&&(this.shadowRoot.innerHTML=r)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const r=Array.from(this.childNodes).map(e=>e.cloneNode(!0));this.shadowRoot.replaceChildren(...r)}};o.styles=[g,b,x];l([d()],o.prototype,"captureMode",2);l([p({childList:!0,subtree:!0,attributes:!0,characterData:!0})],o.prototype,"_captureDOM",1);o=l([c("gds-rich-text")],o);
