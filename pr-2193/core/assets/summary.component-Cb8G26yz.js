import{m as y,s as x}from"./runtime-BL31MtW8.js";import{i as C}from"./lit-element-Bx14lxc-.js";import{n as _,G,h as l,g as $}from"./custom-element-scoping-CNGU1oQ0.js";import{n as h}from"./when-BR7zwNJC.js";import{G as k}from"./button.component-lIj9b48U.js";import{G as E}from"./card.component-McCzQM22.js";import{G as O}from"./div.component-laA26zwj.js";import{G as A}from"./flex.component-CkL0ce-t.js";import{I as M}from"./arrow-up.component-ZTN9udnX.js";var B=Object.defineProperty,S=Object.getOwnPropertyDescriptor,b=r=>{throw TypeError(r)},m=(r,e,t,s)=>{for(var o=s>1?void 0:s?S(e,t):e,i=r.length-1,p;i>=0;i--)(p=r[i])&&(o=(s?p(e,t,o):p(o))||o);return s&&o&&B(e,t,o),o},f=(r,e,t)=>e.has(r)||b("Cannot "+t),n=(r,e,t)=>(f(r,e,"read from private field"),e.get(r)),g=(r,e,t)=>e.has(r)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),u=(r,e,t,s)=>(f(r,e,"write to private field"),e.set(r,t),t),T=(r,e,t)=>(f(r,e,"access private method"),t),a,d,v,w;let c=class extends G{constructor(){super(...arguments),g(this,v),this.hideErrors=!1,this.reactive=!1,g(this,a),g(this,d)}connectedCallback(){super.connectedCallback(),u(this,a,this.closest("form")||void 0),n(this,a)&&this.reactive&&(u(this,d,new MutationObserver(()=>{this.requestUpdate()})),n(this,d).observe(n(this,a),{attributes:!0,subtree:!0}))}disconnectedCallback(){var r;super.disconnectedCallback(),(r=n(this,d))==null||r.disconnect()}refresh(){this.requestUpdate()}render(){var t;const e=Array.from(((t=n(this,a))==null?void 0:t.elements)||[]).filter(s=>s.invalid);return h(e.length>0,()=>l`<gds-card
          level="2"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative"
          color="negative"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font-size="heading-xs" font-weight="book">
              ${y(x`There are ${e.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((s,o)=>l`<li>
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
                      @click=${i=>{i.preventDefault(),s.focus()}}
                    >
                      <div id=${`error-label-${o}`}>
                        <gds-div font-weight="book">${s.label}</gds-div>
                        ${h(!this.hideErrors,()=>l`<gds-div font-size="body-s">
                              ${s.validationMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${s.label} field`}
                      >
                        ${T(this,v,w).call(this,s)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a=new WeakMap;d=new WeakMap;v=new WeakSet;w=function(r){const e=this.getBoundingClientRect().top;return r.getBoundingClientRect().top<e?l`<gds-icon-arrow-up></gds-icon-arrow-up>`:l`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};c.styles=C`
    :host {
      display: contents;
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: inherit;
    }
  `;m([_({type:Boolean})],c.prototype,"hideErrors",2);m([_({type:Boolean})],c.prototype,"reactive",2);c=m([$("gds-form-summary",{dependsOn:[E,A,O,k,M]})],c);export{c as G};
