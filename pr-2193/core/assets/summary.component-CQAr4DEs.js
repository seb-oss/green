import{m as w,s as x}from"./runtime-BL31MtW8.js";import{n as b,G as C,h as l,g as G}from"./custom-element-scoping-CNGU1oQ0.js";import{n as f}from"./when-BR7zwNJC.js";import{t as $}from"./tokens.style-DQsNuKSy.js";import{G as k}from"./button.component-DdDd8Lgo.js";import{G as E}from"./card.component-a_DdskCg.js";import{G as M}from"./div.component-COo6-rOq.js";import{G as O}from"./flex.component-DXi-h7Ch.js";import{I as A}from"./arrow-up.component-CpuW_oY-.js";import{i as B}from"./lit-element-Bx14lxc-.js";const I=B`
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
`;var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},m=(e,r,s,t)=>{for(var o=t>1?void 0:t?T(r,s):r,i=e.length-1,p;i>=0;i--)(p=e[i])&&(o=(t?p(r,s,o):p(o))||o);return t&&o&&S(r,s,o),o},v=(e,r,s)=>r.has(e)||y("Cannot "+s),n=(e,r,s)=>(v(e,r,"read from private field"),r.get(e)),g=(e,r,s)=>r.has(e)?y("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,s),u=(e,r,s,t)=>(v(e,r,"write to private field"),r.set(e,s),s),D=(e,r,s)=>(v(e,r,"access private method"),s),a,d,h,_;let c=class extends C{constructor(){super(...arguments),g(this,h),this.hideErrors=!1,this.reactive=!1,g(this,a),g(this,d)}connectedCallback(){super.connectedCallback(),u(this,a,this.closest("form")||void 0),n(this,a)&&this.reactive&&(u(this,d,new MutationObserver(()=>{this.refresh()})),n(this,d).observe(n(this,a),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=n(this,d))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){var s;const e=Array.from(((s=n(this,a))==null?void 0:s.elements)||[]),r=e.filter(t=>t.ariaInvalid==="true"||t.invalid);return f(r.length>0,()=>l`<gds-card
          role="navigation"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative"
          color="negative"
          overflow="hidden"
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font-size="heading-xs" font-weight="book">
              ${w(x`There are ${r.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((t,o)=>l`<li ?inert=${!(t.ariaInvalid==="true"||t.invalid)}>
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
                      @click=${i=>{i.preventDefault(),t.focus()}}
                    >
                      <div id=${`error-label-${o}`}>
                        <gds-div font-weight="book"
                          >${t.dataset.label||t.label||t.ariaLabel}</gds-div
                        >
                        ${f(!this.hideErrors,()=>l`<gds-div font-size="body-s">
                              ${t.dataset.errormessage||t.errorMessage||t.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${t.label} field`}
                      >
                        ${D(this,h,_).call(this,t)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a=new WeakMap;d=new WeakMap;h=new WeakSet;_=function(e){const r=this.getBoundingClientRect().top;return e.getBoundingClientRect().top<r?l`<gds-icon-arrow-up></gds-icon-arrow-up>`:l`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};c.styles=[$,I];m([b({type:Boolean})],c.prototype,"hideErrors",2);m([b({type:Boolean})],c.prototype,"reactive",2);c=m([G("gds-form-summary",{dependsOn:[E,O,M,k,A]})],c);export{c as G};
