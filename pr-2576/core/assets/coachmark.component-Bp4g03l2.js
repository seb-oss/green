import{i as P,n as f,I as x,J as G,b as L,h as y,g as M}from"./iframe-CmrrH2XL.js";import{n as E,e as k}from"./ref-D8-0i1re.js";import{a as T,c as q,o as z,s as A,f as H,h as U,b as I,d as D}from"./floating-ui.dom-B1INwmQZ.js";const F=P`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: var(--gds-sys-space-m);
    width: 20rem;
    border-radius: var(--gds-sys-radius-s);
    background-color: var(--gds-sys-color-l2-neutral-03);
    color: var(--gds-sys-color-content-inversed);
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: var(--gds-sys-space-m);
    width: var(--gds-sys-space-m);
    background-color: var(--gds-sys-color-l2-neutral-03);
    transform: rotate(45deg);
  }

  .arrow-top,
  .arrow-top-start,
  .arrow-top-end {
    bottom: -0.5rem;
  }

  .arrow-bottom,
  .arrow-bottom-start,
  .arrow-bottom-end {
    top: -0.5rem;
  }

  .arrow-left,
  .arrow-left-start,
  .arrow-left-end {
    right: -0.5rem;
  }

  .arrow-right,
  .arrow-right-start,
  .arrow-right-end {
    left: -0.5rem;
  }
`;var J=Object.defineProperty,j=Object.getOwnPropertyDescriptor,V=e=>{throw TypeError(e)},l=(e,s,t,i)=>{for(var a=i>1?void 0:i?j(s,t):s,c=e.length-1,h;c>=0;c--)(h=e[c])&&(a=(i?h(s,t,a):h(a))||a);return i&&a&&J(s,t,a),a},w=(e,s,t)=>s.has(e)||V("Cannot "+t),d=(e,s,t)=>(w(e,s,"read from private field"),t?t.call(e):s.get(e)),m=(e,s,t)=>s.has(e)?V("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),K=(e,s,t,i)=>(w(e,s,"write to private field"),s.set(e,t),t),r=(e,s,t)=>(w(e,s,"access private method"),t),u,v,g,o,p,O,B,R,$,S,W,b;let n=class extends G{constructor(){super(...arguments),m(this,o),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,s,t)=>t,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,m(this,u,k()),m(this,v,k()),m(this,g)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{r(this,o,b).call(this),r(this,o,p).call(this)},400)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&r(this,o,p).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",r(this,o,p)),document.removeEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&r(this,o,p).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=r(this,o,O).call(this,this.target),r(this,o,b).call(this))}setPreventClose(e){this._preventClose=e}render(){return y`${L(this.target.length>0,()=>y`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${E(d(this,u))}
        >
          <slot></slot>
          <div id="arrow" ${E(d(this,v))}></div>
        </div>
      `,()=>y``)}`}};u=new WeakMap;v=new WeakMap;g=new WeakMap;o=new WeakSet;p=function(){var t;var e;!this._isVisible||!this.dispatchCustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1,cancelable:!0})||(this._isVisible=!1,(t=d(this,u).value)==null||t.remove(),(e=d(this,g))==null||e.call(this))};O=function(e){let s=!1,t;for(const i of e){if(i==="shadowRoot"){s=!0;continue}t?s&&t.shadowRoot?(t=t.shadowRoot.querySelector(i),s=!1):t=t.querySelector(i):t=document.querySelector(i)}return t};B=function(e,s){if(e==s)return;const t=e.getBoundingClientRect(),i=s.getBoundingClientRect();return t.top<i.bottom&&t.bottom>i.top&&t.left<i.right&&t.right>i.left};R=function(e){if(!e)return!1;for(const s of e){const t=document.querySelector(s);if(!(!t||getComputedStyle(t).visibility==="hidden")&&r(this,o,B).call(this,this.targetElement,t))return!0}return!1};$=function(e){const s=e.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return s.top+s.height<0||s.top>t||s.left+s.width<0||s.left>i};S=async function(e,s,t){return q(e,s,{placement:this.placement,middleware:[z(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(i){return{data:await D(i,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},A({padding:16}),H(),U(),I({padding:16,element:t})]})};W=function(){if(!this.targetElement)return!1;const e=r(this,o,$).call(this,this.targetElement),s=this.targetElement.checkVisibility(),t=this.overlappedBy.length===0?!1:r(this,o,R).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!t&&!e&&s)};b=async function(){const e=this.targetElement,s=d(this,u).value,t=d(this,v).value;if(!(!e||!s||!t))try{K(this,g,T(e,s,()=>{r(this,o,S).call(this,e,s,t).then(({x:i,y:a,middlewareData:c,placement:h})=>{if(r(this,o,W).call(this)){if(this._isVisible=!0,Object.assign(s.style,{visibility:"visible",opacity:1,left:`${i}px`,top:`${a}px`}),c.arrow){const{x:_,y:C}=c.arrow;t.removeAttribute("class"),t.classList.add("arrow-"+h),Object.assign(t.style,{left:_!=null?`${_}px`:"",top:C!=null?`${C}px`:""})}}else this._isVisible=!1,Object.assign(s.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};n.styles=F;l([f()],n.prototype,"placement",2);l([f({attribute:!1})],n.prototype,"overlappedBy",2);l([f({attribute:!1})],n.prototype,"target",2);l([f()],n.prototype,"label",2);l([f({attribute:!1})],n.prototype,"computeVisibility",2);l([x()],n.prototype,"_isVisible",2);l([x()],n.prototype,"_preventClose",2);n=l([M("gds-coachmark")],n);export{n as G};
