import{i as P,n as f,w as x,z,d as G,h as y,g as L}from"./iframe-DGk7TTdX.js";import{n as E,e as k}from"./ref-B2ePtrmh.js";import{a as M,c as T,o as q,d as A,s as H,f as U,h as D,b as F}from"./floating-ui.dom-DPpwG6Py.js";const I=P`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: var(--gds-sys-space-m);
    width: 20rem;
    border-radius: var(--gds-sys-radius-s);
    background-color: var(--gds-sys-color-l2-neutral-03);
    color: var(--gds-sys-color-content-neutral-05);
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
`;var j=Object.defineProperty,J=Object.getOwnPropertyDescriptor,V=t=>{throw TypeError(t)},l=(t,e,s,i)=>{for(var a=i>1?void 0:i?J(e,s):e,c=t.length-1,h;c>=0;c--)(h=t[c])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&j(e,s,a),a},w=(t,e,s)=>e.has(t)||V("Cannot "+s),d=(t,e,s)=>(w(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?V("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),K=(t,e,s,i)=>(w(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(w(t,e,"access private method"),s),u,g,v,o,p,O,B,R,$,S,W,b;let n=class extends z{constructor(){super(...arguments),m(this,o),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(t,e,s)=>s,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,m(this,u,k()),m(this,g,k()),m(this,v)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{r(this,o,b).call(this),r(this,o,p).call(this)},400)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this._isVisible&&r(this,o,p).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",r(this,o,p)),document.removeEventListener("keydown",t=>{t.key==="Escape"&&this._isVisible&&r(this,o,p).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=r(this,o,O).call(this,this.target),r(this,o,b).call(this))}setPreventClose(t){this._preventClose=t}render(){return y`${G(this.target.length>0,()=>y`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${E(d(this,u))}
        >
          <slot></slot>
          <div id="arrow" ${E(d(this,g))}></div>
        </div>
      `,()=>y``)}`}};u=new WeakMap;g=new WeakMap;v=new WeakMap;o=new WeakSet;p=function(){var t;!this._isVisible||!this.dispatchCustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1,cancelable:!0})||(this._isVisible=!1,d(this,u).value?.remove(),(t=d(this,v))==null||t.call(this))};O=function(t){let e=!1,s;for(const i of t){if(i==="shadowRoot"){e=!0;continue}s?e&&s.shadowRoot?(s=s.shadowRoot.querySelector(i),e=!1):s=s.querySelector(i):s=document.querySelector(i)}return s};B=function(t,e){if(t==e)return;const s=t.getBoundingClientRect(),i=e.getBoundingClientRect();return s.top<i.bottom&&s.bottom>i.top&&s.left<i.right&&s.right>i.left};R=function(t){if(!t)return!1;for(const e of t){const s=document.querySelector(e);if(!(!s||getComputedStyle(s).visibility==="hidden")&&r(this,o,B).call(this,this.targetElement,s))return!0}return!1};$=function(t){const e=t.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return e.top+e.height<0||e.top>s||e.left+e.width<0||e.left>i};S=async function(t,e,s){return T(t,e,{placement:this.placement,middleware:[q(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(i){return{data:await A(i,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},H({padding:16}),U(),D(),F({padding:16,element:s})]})};W=function(){if(!this.targetElement)return!1;const t=r(this,o,$).call(this,this.targetElement),e=this.targetElement.checkVisibility(),s=this.overlappedBy.length===0?!1:r(this,o,R).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!s&&!t&&e)};b=async function(){const t=this.targetElement,e=d(this,u).value,s=d(this,g).value;if(!(!t||!e||!s))try{K(this,v,M(t,e,()=>{r(this,o,S).call(this,t,e,s).then(({x:i,y:a,middlewareData:c,placement:h})=>{if(r(this,o,W).call(this)){if(this._isVisible=!0,Object.assign(e.style,{visibility:"visible",opacity:1,left:`${i}px`,top:`${a}px`}),c.arrow){const{x:_,y:C}=c.arrow;s.removeAttribute("class"),s.classList.add("arrow-"+h),Object.assign(s.style,{left:_!=null?`${_}px`:"",top:C!=null?`${C}px`:""})}}else this._isVisible=!1,Object.assign(e.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};n.styles=I;l([f()],n.prototype,"placement",2);l([f({attribute:!1})],n.prototype,"overlappedBy",2);l([f({attribute:!1})],n.prototype,"target",2);l([f()],n.prototype,"label",2);l([f({attribute:!1})],n.prototype,"computeVisibility",2);l([x()],n.prototype,"_isVisible",2);l([x()],n.prototype,"_preventClose",2);n=l([L("gds-coachmark")],n);export{n as G};
