import{n as d,g as c,G as h}from"./custom-element-scoping-BEGY3AqQ.js";import{t as g}from"./tokens.style-CFvqdzpw.js";import{o as u}from"./observe-light-dom-CmJPHUQ4.js";import{d as p,b as m}from"./declarative-layout-mixins-HEeE2Gbt.js";import{d as b}from"./default-typography.styles-Bl0hQgz1.js";import{i as f}from"./lit-element-C_s9q329.js";const y=f`
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
    margin-block-start: 0.4lh;
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
`;var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,n=(t,r,i,s)=>{for(var e=s>1?void 0:s?x(r,i):r,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(s?l(r,i,e):l(e))||e);return s&&e&&v(r,i,e),e};let o=class extends p(m(h)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):new NodeList}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):null}get innerHTML(){var t;return((t=this.shadowRoot)==null?void 0:t.innerHTML)||""}set innerHTML(t){this.shadowRoot&&(this.shadowRoot.innerHTML=t)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const t=Array.from(this.childNodes).map(r=>r.cloneNode(!0));this.shadowRoot.replaceChildren(...t)}};o.styles=[g,b,y];n([d()],o.prototype,"captureMode",2);n([u({childList:!0,subtree:!0,attributes:!0,characterData:!0})],o.prototype,"_captureDOM",1);o=n([c("gds-rich-text")],o);
