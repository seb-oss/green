import{i as I,E as F,n as $,I as O,d as y,N as m,a5 as C,h as g,A as T,g as A,G as B,O as D}from"./iframe-BhBXWYpV.js";import{r as M}from"./query-async-CDvSyKzs.js";import{m as R}from"./datepicker.component-DXK6N329.js";import{G as P}from"./alert.component-Cn00HaLv.js";import{G as W}from"./card.component-BZcJNlkI.js";import{G as q}from"./flex.component-BoVuiBvi.js";import{I as N}from"./arrow-up.component-BvMO6Hu_.js";import{G as L}from"./text.component-tWh0DdT1.js";const U=I`
  :host {
    display: contents;
  }
  ul {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  ul ul {
    margin: 0;
  }
  li {
    margin: 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      margin 0.3s ease-in-out;
  }
  li.item[inert] {
    max-height: 0;
    opacity: 0;
  }
  li.item:not([inert]) {
    max-height: 4rem;
    opacity: 1;
  }
  li.group[inert] {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    border-top-width: 0;
    padding-top: 0;
    margin-top: 0;
  }
  li.group:not([inert]) {
    padding-top: var(--gds-sys-space-m);
  }
  a {
    color: inherit;
  }
`;var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},h=(e,t,r,o)=>{for(var s=o>1?void 0:o?H(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&z(t,r,s),s},x=(e,t,r)=>t.has(e)||k("Cannot "+r),p=(e,t,r)=>(x(e,t,"read from private field"),t.get(e)),v=(e,t,r)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),G=(e,t,r,o)=>(x(e,t,"write to private field"),t.set(e,r),r),l=(e,t,r)=>(x(e,t,"access private method"),r),d,u,a,_,E,w,b,S;let c=class extends O{constructor(){super(...arguments),v(this,a),this.hideErrors=!1,this.reactive=!1,v(this,d),v(this,u)}get errorCount(){return l(this,a,b).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),G(this,d,this.closest("form")||void 0),p(this,d)&&this.reactive&&(G(this,u,new MutationObserver(()=>{this.refresh()})),p(this,u).observe(p(this,d),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=p(this,u))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=l(this,a,w).call(this),t=l(this,a,b).call(this).length,r=l(this,a,E).call(this,e);return y(t>0,()=>g`<gds-card
          id="root"
          role="navigation"
          padding="xs"
          background="neutral-02"
          border-color="negative-01"
          border-radius="m"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${m("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <slot name="header">
              <gds-alert
                variant="negative"
                label=${m(C`There are errors to correct before you can continue`)}
              >
                ${m(C`There are errors to correct before you can continue`)}
              </gds-alert>
            </slot>
            <ul>
              ${r.map(o=>y(o.fieldset,()=>g`<li
                      class="group"
                      ?inert=${!o.controls.some(s=>s.ariaInvalid==="true"||s.invalid)}
                    >
                      <gds-text tag="span" font="heading-s" margin="0 s xs"
                        >${o.legend}</gds-text
                      >
                      <ul>
                        ${o.controls.map(s=>l(this,a,_).call(this,s))}
                      </ul>
                    </li>`,()=>o.controls.map(s=>l(this,a,_).call(this,s))))}
            </ul>
          </gds-flex>
        </gds-card>`)}};d=new WeakMap;u=new WeakMap;a=new WeakSet;_=function(e){return g`<li
      class="item"
      ?inert=${!(e.ariaInvalid==="true"||e.invalid)}
    >
      <gds-card
        display="flex"
        flex-direction="row"
        align-items="center"
        justify-content="space-between"
        gap="xs"
        level="3"
        background="transparent; hover: neutral-02"
        style="cursor: pointer"
        border-width="0"
        border-radius="xs"
        padding="xs s"
        @click=${t=>{t.preventDefault(),e.focus()}}
      >
        <div>
          <gds-div font-weight="book"
            >${e.dataset.label||e.label||e.ariaLabel}</gds-div
          >
        </div>
        <gds-button
          size="xs"
          rank="secondary"
          label=${`Move focus to ${e.label} field`}
        >
          ${R(l(this,a,S).call(this,e),T)}
        </gds-button>
      </gds-card>
    </li>`};E=function(e){var r,o;const t=[];for(const s of e){const i=s.closest("fieldset");if(!i)t.push({fieldset:null,legend:"",controls:[s]});else{let n=t.find(f=>f.fieldset===i);if(!n){const f=((o=(r=i.querySelector("legend"))==null?void 0:r.textContent)==null?void 0:o.trim())||"";n={fieldset:i,legend:f,controls:[]},t.push(n)}n.controls.push(s)}}return t};w=function(){var e;return Array.from(((e=p(this,d))==null?void 0:e.elements)||[]).filter(t=>t.gdsElementName!=="gds-checkbox"&&t.tagName!=="FIELDSET")};b=function(){return l(this,a,w).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};S=async function(e){const t=(await this._elRoot).getBoundingClientRect().top,o=e.getBoundingClientRect().top<t;return y(o,()=>g`<gds-icon-arrow-up></gds-icon-arrow-up>`,()=>g`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`)};c.styles=[F,U];h([$({type:Boolean})],c.prototype,"hideErrors",2);h([$({type:Boolean})],c.prototype,"reactive",2);h([M("#root")],c.prototype,"_elRoot",2);c=h([A("gds-form-summary",{dependsOn:[W,q,B,D,N,P,L]})],c);export{c as G};
