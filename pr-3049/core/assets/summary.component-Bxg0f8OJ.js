import{S as P,a4 as k,ae as K,i as M,B as R,n as O,D as W,d as b,J as C,a9 as E,h as m,A as X,a as Y,G as Z,K as q}from"./iframe-Dcaup0t1.js";import{r as L}from"./query-async-D07KuluO.js";import{f as N}from"./ref-Bu5iq35x.js";import{G as U}from"./alert.component-DM8TdtSU.js";import{G as z}from"./card.component-BTiW5XNR.js";import{G as J}from"./flex.component-D0B6eADt.js";import{I as V}from"./arrow-up.component-BTjHbJjY.js";import{G as H}from"./text.component-Bmi1cuRp.js";class Q{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class j{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const S=t=>!K(t)&&typeof t.then=="function",F=1073741823;class tt extends N{constructor(){super(...arguments),this._$Cwt=F,this._$Cbt=[],this._$CK=new Q(this),this._$CX=new j}render(...e){return e.find(s=>!S(s))??k}update(e,s){const o=this._$Cbt;let r=o.length;this._$Cbt=s;const n=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const u=s[c];if(!S(u))return this._$Cwt=c,u;c<r&&u===o[c]||(this._$Cwt=F,r=0,Promise.resolve(u).then(async D=>{for(;l.get();)await l.get();const p=n.deref();if(p!==void 0){const _=p._$Cbt.indexOf(u);_>-1&&_<p._$Cwt&&(p._$Cwt=_,p.setValue(D))}}))}return k}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const et=P(tt),st=M`
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
`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},v=(t,e,s,o)=>{for(var r=o>1?void 0:o?ot(e,s):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&rt(e,s,r),r},x=(t,e,s)=>e.has(t)||T("Cannot "+s),f=(t,e,s)=>(x(t,e,"read from private field"),e.get(t)),$=(t,e,s)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),I=(t,e,s,o)=>(x(t,e,"write to private field"),e.set(t,s),s),a=(t,e,s)=>(x(t,e,"access private method"),s),d,g,i,y,A,G,w,B;let h=class extends W{constructor(){super(...arguments),$(this,i),this.hideErrors=!1,this.reactive=!1,$(this,d),$(this,g)}get errorCount(){return a(this,i,w).call(this).length}focus(t){this._elRoot.then(e=>{const s=e.querySelector('[gds-element="gds-button"]');s&&s.focus(t)})}connectedCallback(){super.connectedCallback(),I(this,d,this.closest("form")||void 0),f(this,d)&&this.reactive&&(I(this,g,new MutationObserver(()=>{this.refresh()})),f(this,g).observe(f(this,d),{attributes:!0,subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),f(this,g)?.disconnect()}refresh(){this.requestUpdate()}render(){const t=a(this,i,G).call(this),e=a(this,i,w).call(this).length,s=a(this,i,A).call(this,t);return b(e>0,()=>m`<gds-card
          id="root"
          role="navigation"
          padding="xs"
          background="neutral-02"
          border-color="negative-01"
          border-radius="m"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${C("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <slot name="header">
              <gds-alert
                variant="negative"
                label=${C(E`There are errors to correct before you can continue`)}
              >
                ${C(E`There are errors to correct before you can continue`)}
              </gds-alert>
            </slot>
            <ul>
              ${s.map(o=>b(o.fieldset,()=>m`<li
                      class="group"
                      ?inert=${!o.controls.some(r=>r.ariaInvalid==="true"||r.invalid)}
                    >
                      <gds-text tag="span" font="heading-s" margin="0 s xs"
                        >${o.legend}</gds-text
                      >
                      <ul>
                        ${o.controls.map(r=>a(this,i,y).call(this,r))}
                      </ul>
                    </li>`,()=>o.controls.map(r=>a(this,i,y).call(this,r))))}
            </ul>
          </gds-flex>
        </gds-card>`)}};d=new WeakMap;g=new WeakMap;i=new WeakSet;y=function(t){return m`<li
      class="item"
      ?inert=${!(t.ariaInvalid==="true"||t.invalid)}
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
        @click=${e=>{e.preventDefault(),t.focus()}}
      >
        <div>
          <gds-div font-weight="book"
            >${t.dataset.label||t.label||t.ariaLabel}</gds-div
          >
        </div>
        <gds-button
          size="xs"
          rank="secondary"
          label=${`Move focus to ${t.label} field`}
        >
          ${et(a(this,i,B).call(this,t),X)}
        </gds-button>
      </gds-card>
    </li>`};A=function(t){const e=[];for(const s of t){const o=s.closest("fieldset");if(!o)e.push({fieldset:null,legend:"",controls:[s]});else{let r=e.find(n=>n.fieldset===o);if(!r){const n=o.querySelector("legend")?.textContent?.trim()||"";r={fieldset:o,legend:n,controls:[]},e.push(r)}r.controls.push(s)}}return e};G=function(){return Array.from(f(this,d)?.elements||[]).filter(t=>t.gdsElementName!=="gds-checkbox"&&t.tagName!=="FIELDSET")};w=function(){return a(this,i,G).call(this).filter(t=>t.ariaInvalid==="true"||t.invalid)};B=async function(t){const e=(await this._elRoot).getBoundingClientRect().top,o=t.getBoundingClientRect().top<e;return b(o,()=>m`<gds-icon-arrow-up></gds-icon-arrow-up>`,()=>m`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`)};h.styles=[R,st];v([O({type:Boolean})],h.prototype,"hideErrors",2);v([O({type:Boolean})],h.prototype,"reactive",2);v([L("#root")],h.prototype,"_elRoot",2);h=v([Y("gds-form-summary",{dependsOn:[z,J,Z,q,V,U,H]})],h);export{h as G};
