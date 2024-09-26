import{n as m,r as T,g as A,G,h as b}from"./gds-element-86064462.js";import{a as H,c as U,o as K,d as D,s as F,f as I,h as J,b as N}from"./floating-ui.dom-7bad3c97.js";import{K as B,i as R}from"./ref-f16d4147.js";import{i as Q}from"./lit-element-1d72f0ce.js";import{n as X}from"./when-748fcf30.js";const Y=Q`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: 1rem;
    width: 20rem;
    border-radius: 0.25rem;
    background-color: #222;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: 1rem;
    width: 1rem;
    background-color: #222;
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
`;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,l=(i,t,e,o)=>{for(var a=o>1?void 0:o?j(t,e):t,c=i.length-1,p;c>=0;c--)(p=i[c])&&(a=(o?p(t,e,a):p(a))||a);return o&&a&&Z(t,e,a),a},k=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)},d=(i,t,e)=>(k(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},tt=(i,t,e,o)=>(k(i,t,"write to private field"),o?o.call(i,e):t.set(i,e),e),s=(i,t,e)=>(k(i,t,"access private method"),e),u,g,v,h,f,y,P,E,$,C,M,V,L,O,q,x,z,w,_;let n=class extends G{constructor(){super(...arguments),r(this,h),r(this,y),r(this,E),r(this,C),r(this,V),r(this,O),r(this,x),r(this,w),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(i,t,e)=>e,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,r(this,u,R()),r(this,g,R()),r(this,v,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{s(this,w,_).call(this),s(this,h,f).call(this)},400)}),document.addEventListener("keydown",i=>{i.key==="Escape"&&this._isVisible&&s(this,h,f).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",s(this,h,f)),document.removeEventListener("keydown",i=>{i.key==="Escape"&&this._isVisible&&s(this,h,f).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=s(this,y,P).call(this,this.target),s(this,w,_).call(this))}setPreventClose(i){this._preventClose=i}render(){return b`${X(this.target.length>0,()=>b`
        <div role="dialog" id="body" aria-label=${this.label} ${B(d(this,u))}>
          <slot></slot>
          <div id="arrow" ${B(d(this,g))}></div>
        </div>
      `,()=>b``)}`}};u=new WeakMap;g=new WeakMap;v=new WeakMap;h=new WeakSet;f=function(){var t;var i;this._isVisible&&(this._isVisible=!1,(t=d(this,u).value)==null||t.remove(),(i=d(this,v))==null||i.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))};y=new WeakSet;P=function(i){let t=!1,e;for(const o of i){if(o==="shadowRoot"){t=!0;continue}e?t&&e.shadowRoot?(e=e.shadowRoot.querySelector(o),t=!1):e=e.querySelector(o):e=document.querySelector(o)}return e};E=new WeakSet;$=function(i,t){if(i==t)return;const e=i.getBoundingClientRect(),o=t.getBoundingClientRect();return e.top<o.bottom&&e.bottom>o.top&&e.left<o.right&&e.right>o.left};C=new WeakSet;M=function(i){if(!i)return!1;for(const t of i){const e=document.querySelector(t);if(!(!e||getComputedStyle(e).visibility==="hidden")&&s(this,E,$).call(this,this.targetElement,e))return!0}return!1};V=new WeakSet;L=function(i){const t=i.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>e||t.left+t.width<0||t.left>o};O=new WeakSet;q=async function(i,t,e){return U(i,t,{placement:this.placement,middleware:[K(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(o){return{data:await D(o,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},F({padding:16}),I(),J(),N({padding:16,element:e})]})};x=new WeakSet;z=function(){if(!this.targetElement)return!1;const i=s(this,V,L).call(this,this.targetElement),t=this.targetElement.checkVisibility(),e=this.overlappedBy.length===0?!1:s(this,C,M).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!e&&!i&&t)};w=new WeakSet;_=async function(){const i=this.targetElement,t=d(this,u).value,e=d(this,g).value;if(!(!i||!t||!e))try{tt(this,v,H(i,t,()=>{s(this,O,q).call(this,i,t,e).then(({x:o,y:a,middlewareData:c,placement:p})=>{if(s(this,x,z).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${o}px`,top:`${a}px`}),c.arrow){const{x:S,y:W}=c.arrow;e.removeAttribute("class"),e.classList.add("arrow-"+p),Object.assign(e.style,{left:S!=null?`${S}px`:"",top:W!=null?`${W}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};n.styles=Y;l([m()],n.prototype,"placement",2);l([m({attribute:!1})],n.prototype,"overlappedBy",2);l([m({attribute:!1})],n.prototype,"target",2);l([m()],n.prototype,"label",2);l([m({attribute:!1})],n.prototype,"computeVisibility",2);l([T()],n.prototype,"_isVisible",2);l([T()],n.prototype,"_preventClose",2);n=l([A("gds-coachmark")],n);
