import{m as y,s as G}from"./runtime-BL31MtW8.js";import{i as k,E}from"./lit-element-Bx14lxc-.js";import{n as x,G as M,h as p,g as O}from"./gds-element-DKcDvDP5.js";import{r as A}from"./query-async-MEroNOeJ.js";import{m as F}from"./datepicker.component-Ck6wPe9C.js";import{n as _}from"./when-BR7zwNJC.js";import{t as S}from"./tokens.style-CmYXY4s9.js";import{G as B}from"./button.component-Bf_l-UmP.js";import{G as I}from"./card.component-Dlj0rtu_.js";import{G as R}from"./div.component-BEF0gJXA.js";import{G as T}from"./flex.component-Duv6dHaO.js";import{I as D}from"./arrow-up.component-Vqty8Qnv.js";const P=k`
  :host {
    display: contents;
  }
  ul {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    margin: 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      margin 0.3s ease-in-out;
  }
  li[inert] {
    max-height: 0;
    opacity: 0;
  }
  li:not([inert]) {
    max-height: 4rem;
    opacity: 1;
  }
  a {
    color: inherit;
  }
`;var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},g=(e,t,r,s)=>{for(var o=s>1?void 0:s?q(t,r):t,h=e.length-1,m;h>=0;h--)(m=e[h])&&(o=(s?m(t,r,o):m(o))||o);return s&&o&&W(t,r,o),o},v=(e,t,r)=>t.has(e)||C("Cannot "+r),d=(e,t,r)=>(v(e,t,"read from private field"),t.get(e)),f=(e,t,r)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),w=(e,t,r,s)=>(v(e,t,"write to private field"),t.set(e,r),r),l=(e,t,r)=>(v(e,t,"access private method"),r),a,c,i,b,u,$;let n=class extends M{constructor(){super(...arguments),f(this,i),this.hideErrors=!1,this.reactive=!1,f(this,a),f(this,c)}get errorCount(){return l(this,i,u).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),w(this,a,this.closest("form")||void 0),d(this,a)&&this.reactive&&(w(this,c,new MutationObserver(()=>{this.refresh()})),d(this,c).observe(d(this,a),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=d(this,c))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=l(this,i,b).call(this),t=l(this,i,u).call(this);return _(t.length>0,()=>p`<gds-card
          id="root"
          role="navigation"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${y("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${y(G`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((r,s)=>p`<li ?inert=${!(r.ariaInvalid==="true"||r.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative"
                      background="transparent; hover: negative/.2"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${o=>{o.preventDefault(),r.focus()}}
                    >
                      <div id=${`error-label-${s}`}>
                        <gds-div font-weight="book"
                          >${r.dataset.label||r.label||r.ariaLabel}</gds-div
                        >
                        ${_(!this.hideErrors,()=>p`<gds-div font="body-regular-s">
                              ${r.dataset.errormessage||r.errorMessage||r.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${r.label} field`}
                      >
                        ${F(l(this,i,$).call(this,r),E)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a=new WeakMap;c=new WeakMap;i=new WeakSet;b=function(){var e;return Array.from(((e=d(this,a))==null?void 0:e.elements)||[]).filter(t=>t.gdsElementName!=="gds-checkbox")};u=function(){return l(this,i,b).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};$=async function(e){const t=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<t?p`<gds-icon-arrow-up></gds-icon-arrow-up>`:p`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};n.styles=[S,P];g([x({type:Boolean})],n.prototype,"hideErrors",2);g([x({type:Boolean})],n.prototype,"reactive",2);g([A("#root")],n.prototype,"_elRoot",2);n=g([O("gds-form-summary",{dependsOn:[I,T,R,B,D]})],n);export{n as G};
