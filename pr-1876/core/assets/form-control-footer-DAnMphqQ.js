import{n as c,g as m,G as f,h as l}from"./custom-element-scoping-b4lD3laR.js";import{n as p}from"./when-BR7zwNJC.js";import{i as x}from"./lit-element-C_s9q329.js";import"./badge-B7pEuVzS.js";import"./triangle-exclamation-qVaGzhdK.js";const _=x`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,h=t=>{throw TypeError(t)},g=(t,e,s,i)=>{for(var a=i>1?void 0:i?y(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&u(e,s,a),a},C=(t,e,s)=>e.has(t)||h("Cannot "+s),w=(t,e,s)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),b=(t,e,s)=>(C(t,e,"access private method"),s),d,v;let r=class extends f{constructor(){super(...arguments),w(this,d)}render(){return l`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${p(this.validationMessage,()=>l`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter">
        ${p(Number.isInteger(this.charCounter),()=>b(this,d,v).call(this,this.charCounter))}
      </div>
    </div>`}};d=new WeakSet;v=function(t){let e;return t<0?e="negative":t<20?e="warning":e="positive",l`<gds-badge variant="${e}">${t}</gds-badge>`};r.styles=[_];g([c({type:Number})],r.prototype,"charCounter",2);g([c()],r.prototype,"validationMessage",2);r=g([m("gds-form-control-footer")],r);
