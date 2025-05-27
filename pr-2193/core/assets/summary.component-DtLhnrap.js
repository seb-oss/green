import{m as v,s as x}from"./runtime-BL31MtW8.js";import{i as $,E as C}from"./lit-element-Bx14lxc-.js";import{n as y,G,h as c,g as k}from"./custom-element-scoping-CNGU1oQ0.js";import{r as E}from"./query-async-MEroNOeJ.js";import{m as M}from"./datepicker.component-BbuSIMvz.js";import{n as u}from"./when-BR7zwNJC.js";import{t as O}from"./tokens.style-DQsNuKSy.js";import{G as A}from"./button.component-DdDd8Lgo.js";import{G as B}from"./card.component-a_DdskCg.js";import{G as I}from"./div.component-COo6-rOq.js";import{G as S}from"./flex.component-DXi-h7Ch.js";import{I as T}from"./arrow-up.component-CpuW_oY-.js";const D=$`
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
`;var F=Object.defineProperty,P=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},p=(e,r,o,t)=>{for(var s=t>1?void 0:t?P(r,o):r,n=e.length-1,m;n>=0;n--)(m=e[n])&&(s=(t?m(r,o,s):m(s))||s);return t&&s&&F(r,o,s),s},f=(e,r,o)=>r.has(e)||_("Cannot "+o),d=(e,r,o)=>(f(e,r,"read from private field"),r.get(e)),g=(e,r,o)=>r.has(e)?_("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,o),b=(e,r,o,t)=>(f(e,r,"write to private field"),r.set(e,o),o),R=(e,r,o)=>(f(e,r,"access private method"),o),a,l,h,w;let i=class extends G{constructor(){super(...arguments),g(this,h),this.hideErrors=!1,this.reactive=!1,g(this,a),g(this,l)}connectedCallback(){super.connectedCallback(),b(this,a,this.closest("form")||void 0),d(this,a)&&this.reactive&&(b(this,l,new MutationObserver(()=>{this.refresh()})),d(this,l).observe(d(this,a),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=d(this,l))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){var o;const e=Array.from(((o=d(this,a))==null?void 0:o.elements)||[]).filter(t=>t.gdsElementName!=="gds-checkbox"),r=e.filter(t=>t.ariaInvalid==="true"||t.invalid);return u(r.length>0,()=>c`<gds-card
          id="root"
          role="navigation"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative"
          color="negative"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${v("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text
              font-size="heading-xs"
              font-weight="book"
              id="description"
            >
              ${v(x`There are ${r.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((t,s)=>c`<li ?inert=${!(t.ariaInvalid==="true"||t.invalid)}>
                    <gds-card
                      role="link"
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
                      margin="0 -xs"
                      @click=${n=>{n.preventDefault(),t.focus()}}
                    >
                      <div id=${`error-label-${s}`}>
                        <gds-div font-weight="book"
                          >${t.dataset.label||t.label||t.ariaLabel}</gds-div
                        >
                        ${u(!this.hideErrors,()=>c`<gds-div font-size="body-s">
                              ${t.dataset.errormessage||t.errorMessage||t.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${t.label} field`}
                      >
                        ${M(R(this,h,w).call(this,t),C)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a=new WeakMap;l=new WeakMap;h=new WeakSet;w=async function(e){const r=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<r?c`<gds-icon-arrow-up></gds-icon-arrow-up>`:c`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};i.styles=[O,D];p([y({type:Boolean})],i.prototype,"hideErrors",2);p([y({type:Boolean})],i.prototype,"reactive",2);p([E("#root")],i.prototype,"_elRoot",2);i=p([k("gds-form-summary",{dependsOn:[B,S,I,A,T]})],i);export{i as G};
