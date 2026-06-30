import{i as S,v as F,n as G,z as I,d as v,E as f,W as w,h as u,A as T,g as A,G as O,F as B}from"./iframe-wg8wLRxR.js";import{r as D}from"./query-async-BPQmAgE9.js";import{m as M}from"./datepicker.component-rBUxAWoJ.js";import{G as R}from"./alert.component-Bc8knRUx.js";import{G as W}from"./card.component-Q4Fo7a0Q.js";import{G as P}from"./flex.component-Be-IWHT3.js";import{I as q}from"./arrow-up.component-CWn-ZU2K.js";import{G as z}from"./text.component-DnMohhkS.js";const L=S`
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
`;var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},g=(e,t,r,o)=>{for(var s=o>1?void 0:o?U(t,r):t,n=e.length-1,h;n>=0;n--)(h=e[n])&&(s=(o?h(t,r,s):h(s))||s);return o&&s&&N(t,r,s),s},b=(e,t,r)=>t.has(e)||$("Cannot "+r),c=(e,t,r)=>(b(e,t,"read from private field"),t.get(e)),m=(e,t,r)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),C=(e,t,r,o)=>(b(e,t,"write to private field"),t.set(e,r),r),a=(e,t,r)=>(b(e,t,"access private method"),r),l,p,i,y,k,x,_,E;let d=class extends I{constructor(){super(...arguments),m(this,i),this.hideErrors=!1,this.reactive=!1,m(this,l),m(this,p)}get errorCount(){return a(this,i,_).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),C(this,l,this.closest("form")||void 0),c(this,l)&&this.reactive&&(C(this,p,new MutationObserver(()=>{this.refresh()})),c(this,p).observe(c(this,l),{attributes:!0,subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),c(this,p)?.disconnect()}refresh(){this.requestUpdate()}render(){const e=a(this,i,x).call(this),t=a(this,i,_).call(this).length,r=a(this,i,k).call(this,e);return v(t>0,()=>u`<gds-card
          id="root"
          role="navigation"
          padding="xs"
          background="neutral-02"
          border-color="negative-01"
          border-radius="m"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${f("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <slot name="header">
              <gds-alert
                variant="negative"
                label=${f(w`There are errors to correct before you can continue`)}
              >
                ${f(w`There are errors to correct before you can continue`)}
              </gds-alert>
            </slot>
            <ul>
              ${r.map(o=>v(o.fieldset,()=>u`<li
                      class="group"
                      ?inert=${!o.controls.some(s=>s.ariaInvalid==="true"||s.invalid)}
                    >
                      <gds-text tag="span" font="heading-s" margin="0 s xs"
                        >${o.legend}</gds-text
                      >
                      <ul>
                        ${o.controls.map(s=>a(this,i,y).call(this,s))}
                      </ul>
                    </li>`,()=>o.controls.map(s=>a(this,i,y).call(this,s))))}
            </ul>
          </gds-flex>
        </gds-card>`)}};l=new WeakMap;p=new WeakMap;i=new WeakSet;y=function(e){return u`<li
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
          ${M(a(this,i,E).call(this,e),T)}
        </gds-button>
      </gds-card>
    </li>`};k=function(e){const t=[];for(const r of e){const o=r.closest("fieldset");if(!o)t.push({fieldset:null,legend:"",controls:[r]});else{let s=t.find(n=>n.fieldset===o);if(!s){const n=o.querySelector("legend")?.textContent?.trim()||"";s={fieldset:o,legend:n,controls:[]},t.push(s)}s.controls.push(r)}}return t};x=function(){return Array.from(c(this,l)?.elements||[]).filter(e=>e.gdsElementName!=="gds-checkbox"&&e.tagName!=="FIELDSET")};_=function(){return a(this,i,x).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};E=async function(e){const t=(await this._elRoot).getBoundingClientRect().top,o=e.getBoundingClientRect().top<t;return v(o,()=>u`<gds-icon-arrow-up></gds-icon-arrow-up>`,()=>u`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`)};d.styles=[F,L];g([G({type:Boolean})],d.prototype,"hideErrors",2);g([G({type:Boolean})],d.prototype,"reactive",2);g([D("#root")],d.prototype,"_elRoot",2);d=g([A("gds-form-summary",{dependsOn:[W,P,O,B,q,R,z]})],d);export{d as G};
