import{i as J,x as _}from"./lit-element-71e04f06.js";import{r as q,n as K,g as N,G as Q}from"./gds-element-54cd6e2a.js";import{a as X,c as Y,o as Z,d as j,s as tt,f as et,h as ot,b as it}from"./floating-ui.dom-373c8bf6.js";import{n as V,e as B}from"./ref-ff2f01fc.js";import{n as st}from"./when-cf7256a5.js";import"./_commonjsHelpers-725317a4.js";import"./directive-helpers-9aabd8ef.js";import"./directive-12249aa5.js";const rt=J`
  .gds-coachmark {
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

  #gds-arrow {
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
`;var at=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,v=(o,t,e,i)=>{for(var r=i>1?void 0:i?nt(t,e):t,l=o.length-1,p;l>=0;l--)(p=o[l])&&(r=(i?p(t,e,r):p(r))||r);return i&&r&&at(t,e,r),r},b=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},n=(o,t,e)=>(b(o,t,"read from private field"),e?e.call(o):t.get(o)),s=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},A=(o,t,e,i)=>(b(o,t,"write to private field"),i?i.call(o,e):t.set(o,e),e),a=(o,t,e)=>(b(o,t,"access private method"),e),m,w,c,g,h,f,k,U,C,z,E,G,x,H,O,D,S,F,y,I;let d=class extends Q{constructor(){super(...arguments),s(this,h),s(this,k),s(this,C),s(this,E),s(this,x),s(this,O),s(this,S),s(this,y),s(this,m,B()),s(this,w,B()),s(this,c,void 0),s(this,g,void 0),this._isVisible=!1,this._preventClose=!1,this.coachmark=null}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{a(this,h,f).call(this)}),document.addEventListener("keydown",o=>{o.key==="Escape"&&this._isVisible&&a(this,h,f).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",a(this,h,f)),document.removeEventListener("keydown",o=>{o.key==="Escape"&&this._isVisible&&a(this,h,f).call(this)})}firstUpdated(){this.coachmark&&(A(this,c,a(this,k,U).call(this,this.coachmark.tooltip.target)),a(this,y,I).call(this))}setPreventClose(o){this._preventClose=o}render(){return _`${st(this.coachmark,()=>_`
        <div
          class="gds-coachmark"
          aria-modal="false"
          ${V(n(this,m))}
        >
          <slot name="body"></slot>
          <slot name="footer"></slot>
          <div id="gds-arrow" ${V(n(this,w))}></div>
        </div>
      `,()=>_``)}`}};m=new WeakMap;w=new WeakMap;c=new WeakMap;g=new WeakMap;h=new WeakSet;f=function(){var t;var o;this._isVisible&&(this._isVisible=!1,(t=n(this,m).value)==null||t.remove(),(o=n(this,g))==null||o.call(this),window.dispatchEvent(new CustomEvent("tooltipClosed")))};k=new WeakSet;U=function(o){let t=!1,e;return o.forEach(i=>{i!=="shadowRoot"?!e&&!t?e=document.querySelector(i):e&&!t?e=e.querySelector(i):e&&t&&e.shadowRoot&&(e=e.shadowRoot.querySelector(i),t=!1):t=!0}),e};C=new WeakSet;z=function(o,t){if(o==t)return;const e=o.getBoundingClientRect(),i=t.getBoundingClientRect();return e.top<i.bottom&&e.bottom>i.top&&e.left<i.right&&e.right>i.left};E=new WeakSet;G=function(o){for(const t of o??[]){const e=document.querySelector(t);if(!(!e||getComputedStyle(e).visibility==="hidden")&&a(this,C,z).call(this,n(this,c),e))return!0}return!1};x=new WeakSet;H=function(o){const t=o.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>e||t.left+t.width<0||t.left>i};O=new WeakSet;D=async function(o,t,e){var i;return Y(o,t,{placement:(i=this.coachmark)==null?void 0:i.tooltip.preferredPlacement,middleware:[Z(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(r){return{data:await j(r,{boundary:document.querySelector("main"),rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},tt({padding:16}),et(),ot(),it({padding:16,element:e})]})};S=new WeakSet;F=function(){var i;if(!n(this,c))return!1;const o=a(this,x,H).call(this,n(this,c)),t=n(this,c).checkVisibility();return!((i=this.coachmark)!=null&&i.tooltip.overlappedBy?a(this,E,G).call(this,this.coachmark.tooltip.overlappedBy):!1)&&!o&&t&&window.innerWidth>580};y=new WeakSet;I=async function(){const o=n(this,c),t=n(this,m).value,e=n(this,w).value;if(!(!o||!t||!e))try{A(this,g,X(o,t,()=>{a(this,O,D).call(this,o,t,e).then(({x:i,y:r,middlewareData:l,placement:p})=>{if(a(this,S,F).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${i}px`,top:`${r}px`}),l.arrow){const{x:W,y:R}=l.arrow;e.removeAttribute("class"),e.classList.add("arrow-"+p),Object.assign(e.style,{left:W!=null?`${W}px`:"",top:R!=null?`${R}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};d.styles=rt;d.shadowRootOptions={mode:"open",delegatesFocus:!0};v([q()],d.prototype,"_isVisible",2);v([q()],d.prototype,"_preventClose",2);v([K({attribute:!1})],d.prototype,"coachmark",2);d=v([N("gds-coachmark")],d);const vt={title:"Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:"Coach marks are contextual tips that focus' on making the user aware of a new feature, the benefits of an existing one or a moved feature within an interface."}}},tags:["autodocs"]},ct={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:""}},u={...ct};var P,T,$,M,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams
}`,...($=(T=u.parameters)==null?void 0:T.docs)==null?void 0:$.source},description:{story:"!!! Add some info about how to use the coachmark component here. !!!",...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};const gt=["Usage"];export{u as Usage,gt as __namedExportsOrder,vt as default};
