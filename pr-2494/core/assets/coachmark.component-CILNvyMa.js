import{i as P,n as f,z as x,A as z,b as A,h as y,g as G}from"./iframe-DXs2rN2S.js";import{n as C,e as k}from"./ref-BXTMSlXr.js";import{a as L,c as M,o as T,s as q,f as H,h as U,b as D,d as F}from"./floating-ui.dom-B1INwmQZ.js";const I=P`
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
`;var j=Object.defineProperty,J=Object.getOwnPropertyDescriptor,V=e=>{throw TypeError(e)},l=(e,t,i,s)=>{for(var a=s>1?void 0:s?J(t,i):t,c=e.length-1,h;c>=0;c--)(h=e[c])&&(a=(s?h(t,i,a):h(a))||a);return s&&a&&j(t,i,a),a},w=(e,t,i)=>t.has(e)||V("Cannot "+i),d=(e,t,i)=>(w(e,t,"read from private field"),i?i.call(e):t.get(e)),m=(e,t,i)=>t.has(e)?V("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),K=(e,t,i,s)=>(w(e,t,"write to private field"),t.set(e,i),i),r=(e,t,i)=>(w(e,t,"access private method"),i),u,v,g,o,p,O,B,R,$,S,W,b;let n=class extends z{constructor(){super(...arguments),m(this,o),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,i)=>i,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,m(this,u,k()),m(this,v,k()),m(this,g)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{r(this,o,b).call(this),r(this,o,p).call(this)},400)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&r(this,o,p).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",r(this,o,p)),document.removeEventListener("keydown",e=>{e.key==="Escape"&&this._isVisible&&r(this,o,p).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=r(this,o,O).call(this,this.target),r(this,o,b).call(this))}setPreventClose(e){this._preventClose=e}render(){return y`${A(this.target.length>0,()=>y`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${C(d(this,u))}
        >
          <slot></slot>
          <div id="arrow" ${C(d(this,v))}></div>
        </div>
      `,()=>y``)}`}};u=new WeakMap;v=new WeakMap;g=new WeakMap;o=new WeakSet;p=function(){var t;var e;this._isVisible&&(this._isVisible=!1,(t=d(this,u).value)==null||t.remove(),(e=d(this,g))==null||e.call(this),this.dispatchCustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1}))};O=function(e){let t=!1,i;for(const s of e){if(s==="shadowRoot"){t=!0;continue}i?t&&i.shadowRoot?(i=i.shadowRoot.querySelector(s),t=!1):i=i.querySelector(s):i=document.querySelector(s)}return i};B=function(e,t){if(e==t)return;const i=e.getBoundingClientRect(),s=t.getBoundingClientRect();return i.top<s.bottom&&i.bottom>s.top&&i.left<s.right&&i.right>s.left};R=function(e){if(!e)return!1;for(const t of e){const i=document.querySelector(t);if(!(!i||getComputedStyle(i).visibility==="hidden")&&r(this,o,B).call(this,this.targetElement,i))return!0}return!1};$=function(e){const t=e.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>i||t.left+t.width<0||t.left>s};S=async function(e,t,i){return M(e,t,{placement:this.placement,middleware:[T(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(s){return{data:await F(s,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},q({padding:16}),H(),U(),D({padding:16,element:i})]})};W=function(){if(!this.targetElement)return!1;const e=r(this,o,$).call(this,this.targetElement),t=this.targetElement.checkVisibility(),i=this.overlappedBy.length===0?!1:r(this,o,R).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!i&&!e&&t)};b=async function(){const e=this.targetElement,t=d(this,u).value,i=d(this,v).value;if(!(!e||!t||!i))try{K(this,g,L(e,t,()=>{r(this,o,S).call(this,e,t,i).then(({x:s,y:a,middlewareData:c,placement:h})=>{if(r(this,o,W).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${s}px`,top:`${a}px`}),c.arrow){const{x:_,y:E}=c.arrow;i.removeAttribute("class"),i.classList.add("arrow-"+h),Object.assign(i.style,{left:_!=null?`${_}px`:"",top:E!=null?`${E}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};n.styles=I;l([f()],n.prototype,"placement",2);l([f({attribute:!1})],n.prototype,"overlappedBy",2);l([f({attribute:!1})],n.prototype,"target",2);l([f()],n.prototype,"label",2);l([f({attribute:!1})],n.prototype,"computeVisibility",2);l([x()],n.prototype,"_isVisible",2);l([x()],n.prototype,"_preventClose",2);n=l([G("gds-coachmark")],n);export{n as G};
