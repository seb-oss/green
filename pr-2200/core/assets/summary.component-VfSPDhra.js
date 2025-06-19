import{m as y,s as G}from"./runtime-BL31MtW8.js";import{i as k,E}from"./lit-element-Bx14lxc-.js";import{n as x,G as M,h as p,g as O}from"./gds-element-DKcDvDP5.js";import{r as A}from"./query-async-MEroNOeJ.js";import{m as F}from"./datepicker.component-CtB62UwF.js";import{n as _}from"./when-BR7zwNJC.js";import{t as S}from"./tokens.style-BAMmArAm.js";import{G as B}from"./button.component-Dvch3JiS.js";import{G as I}from"./card.component-Dud9SFBD.js";import{G as R}from"./div.component-CtWtQCO9.js";import{G as T}from"./flex.component-JReqUiPc.js";import{I as D}from"./arrow-up.component-B-cmHtMn.js";const P=k`
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
`;var W=Object.defineProperty,z=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},g=(e,r,t,s)=>{for(var o=s>1?void 0:s?z(r,t):r,h=e.length-1,m;h>=0;h--)(m=e[h])&&(o=(s?m(r,t,o):m(o))||o);return s&&o&&W(r,t,o),o},v=(e,r,t)=>r.has(e)||C("Cannot "+t),d=(e,r,t)=>(v(e,r,"read from private field"),r.get(e)),f=(e,r,t)=>r.has(e)?C("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),w=(e,r,t,s)=>(v(e,r,"write to private field"),r.set(e,t),t),l=(e,r,t)=>(v(e,r,"access private method"),t),a,c,i,b,u,$;let n=class extends M{constructor(){super(...arguments),f(this,i),this.hideErrors=!1,this.reactive=!1,f(this,a),f(this,c)}get errorCount(){return l(this,i,u).call(this).length}focus(e){this._elRoot.then(r=>{const t=r.querySelector('[gds-element="gds-button"]');t&&t.focus(e)})}connectedCallback(){super.connectedCallback(),w(this,a,this.closest("form")||void 0),d(this,a)&&this.reactive&&(w(this,c,new MutationObserver(()=>{this.refresh()})),d(this,c).observe(d(this,a),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=d(this,c))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=l(this,i,b).call(this),r=l(this,i,u).call(this);return _(r.length>0,()=>p`<gds-card
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
          aria-label=${y("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text
              font-size="heading-xs"
              font-weight="book"
              id="description"
            >
              ${y(G`There are ${r.length} errors to correct before you can continue:`)}
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
                      color="negative"
                      background="transparent; hover: negative/.2"
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
                        ${_(!this.hideErrors,()=>p`<gds-div font-size="body-s">
                              ${t.dataset.errormessage||t.errorMessage||t.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${t.label} field`}
                      >
                        ${F(l(this,i,$).call(this,t),E)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a=new WeakMap;c=new WeakMap;i=new WeakSet;b=function(){var e;return Array.from(((e=d(this,a))==null?void 0:e.elements)||[]).filter(r=>r.gdsElementName!=="gds-checkbox")};u=function(){return l(this,i,b).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};$=async function(e){const r=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<r?p`<gds-icon-arrow-up></gds-icon-arrow-up>`:p`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};n.styles=[S,P];g([x({type:Boolean})],n.prototype,"hideErrors",2);g([x({type:Boolean})],n.prototype,"reactive",2);g([A("#root")],n.prototype,"_elRoot",2);n=g([O("gds-form-summary",{dependsOn:[I,T,R,B,D]})],n);export{n as G};
