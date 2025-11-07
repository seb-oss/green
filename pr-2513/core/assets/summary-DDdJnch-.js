import{m as b,s as G}from"./runtime-CNluP0A8.js";import{i as k,E}from"./lit-element-Bx14lxc-.js";import{n as x}from"./Reflect-DJ7r0WLU.js";import{r as S}from"./query-async-MEroNOeJ.js";import{m as M}from"./datepicker-BSsHPQTU.js";import{n as _}from"./when-BR7zwNJC.js";import{G as O,h as p,g as A}from"./gds-element-DTROifYq.js";import{t as F}from"./tokens.style-BvFU043k.js";import{G as B}from"./button.component-ZcF21sHl.js";import{G as I}from"./card.component-DPPdmpJq.js";import{G as R}from"./div.component-D0ve01t2.js";import{G as T}from"./flex.component-vjzXCrN0.js";import{I as D}from"./arrow-up.component-rmBczc_9.js";const P=k`
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
`;var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},g=(e,r,t,s)=>{for(var o=s>1?void 0:s?q(r,t):r,m=e.length-1,h;m>=0;m--)(h=e[m])&&(o=(s?h(r,t,o):h(o))||o);return s&&o&&W(r,t,o),o},v=(e,r,t)=>r.has(e)||C("Cannot "+t),d=(e,r,t)=>(v(e,r,"read from private field"),r.get(e)),f=(e,r,t)=>r.has(e)?C("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),w=(e,r,t,s)=>(v(e,r,"write to private field"),r.set(e,t),t),l=(e,r,t)=>(v(e,r,"access private method"),t),n,c,i,y,u,$;let a=class extends O{constructor(){super(...arguments),f(this,i),this.hideErrors=!1,this.reactive=!1,f(this,n),f(this,c)}get errorCount(){return l(this,i,u).call(this).length}focus(e){this._elRoot.then(r=>{const t=r.querySelector('[gds-element="gds-button"]');t&&t.focus(e)})}connectedCallback(){super.connectedCallback(),w(this,n,this.closest("form")||void 0),d(this,n)&&this.reactive&&(w(this,c,new MutationObserver(()=>{this.refresh()})),d(this,c).observe(d(this,n),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=d(this,c))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=l(this,i,y).call(this),r=l(this,i,u).call(this);return _(r.length>0,()=>p`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${b("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${b(G`There are ${r.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((t,s)=>p`<li ?inert=${!(t.ariaInvalid==="true"||t.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative-01"
                      background="transparent; hover: negative-01/.1"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${o=>{o.preventDefault(),t.focus()}}
                    >
                      <div id=${`error-label-${s}`}>
                        <gds-div font-weight="book"
                          >${t.dataset.label||t.label||t.ariaLabel}</gds-div
                        >
                        ${_(!this.hideErrors,()=>p`<gds-div font="body-regular-s">
                              ${t.dataset.errormessage||t.errorMessage||t.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${t.label} field`}
                      >
                        ${M(l(this,i,$).call(this,t),E)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};n=new WeakMap;c=new WeakMap;i=new WeakSet;y=function(){var e;return Array.from(((e=d(this,n))==null?void 0:e.elements)||[]).filter(r=>r.gdsElementName!=="gds-checkbox")};u=function(){return l(this,i,y).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};$=async function(e){const r=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<r?p`<gds-icon-arrow-up></gds-icon-arrow-up>`:p`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};a.styles=[F,P];g([x({type:Boolean})],a.prototype,"hideErrors",2);g([x({type:Boolean})],a.prototype,"reactive",2);g([S("#root")],a.prototype,"_elRoot",2);a=g([A("gds-form-summary",{dependsOn:[I,T,R,B,D]})],a);a.define();
