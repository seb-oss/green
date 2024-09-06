import{i as F,k as I}from"./lit-element-1d72f0ce.js";import{n as g,r as q,g as N,G as J,h as y}from"./gds-element-d791ed3d.js";import{a as Q,c as X,o as Y,d as Z,s as j,f as tt,h as et,b as it}from"./floating-ui.dom-7bad3c97.js";import{K as W,i as R}from"./ref-f16d4147.js";import{n as ot}from"./when-748fcf30.js";import"./_commonjsHelpers-725317a4.js";import"./async-directive-1808f33b.js";import"./directive-helpers-8f06cd33.js";import"./directive-dd518ee3.js";const at=F`
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
`;var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,l=(i,t,e,o)=>{for(var r=o>1?void 0:o?rt(t,e):t,c=i.length-1,p;c>=0;c--)(p=i[c])&&(r=(o?p(t,e,r):p(r))||r);return o&&r&&st(t,e,r),r},E=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)},d=(i,t,e)=>(E(i,t,"read from private field"),e?e.call(i):t.get(i)),s=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},nt=(i,t,e,o)=>(E(i,t,"write to private field"),o?o.call(i,e):t.set(i,e),e),a=(i,t,e)=>(E(i,t,"access private method"),e),f,b,v,h,u,k,z,C,A,x,G,O,H,V,U,B,K,w,_;let n=class extends J{constructor(){super(...arguments),s(this,h),s(this,k),s(this,C),s(this,x),s(this,O),s(this,V),s(this,B),s(this,w),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(i,t,e)=>e,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,s(this,f,R()),s(this,b,R()),s(this,v,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{a(this,w,_).call(this),a(this,h,u).call(this)},400)}),document.addEventListener("keydown",i=>{i.key==="Escape"&&this._isVisible&&a(this,h,u).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",a(this,h,u)),document.removeEventListener("keydown",i=>{i.key==="Escape"&&this._isVisible&&a(this,h,u).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=a(this,k,z).call(this,this.target),a(this,w,_).call(this))}setPreventClose(i){this._preventClose=i}render(){return y`${ot(this.target.length>0,()=>y`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${W(d(this,f))}
        >
          <slot></slot>
          <div id="arrow" ${W(d(this,b))}></div>
        </div>
      `,()=>y``)}`}};f=new WeakMap;b=new WeakMap;v=new WeakMap;h=new WeakSet;u=function(){var t;var i;this._isVisible&&(this._isVisible=!1,(t=d(this,f).value)==null||t.remove(),(i=d(this,v))==null||i.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))};k=new WeakSet;z=function(i){let t=!1,e;for(const o of i){if(o==="shadowRoot"){t=!0;continue}e?t&&e.shadowRoot?(e=e.shadowRoot.querySelector(o),t=!1):e=e.querySelector(o):e=document.querySelector(o)}return e};C=new WeakSet;A=function(i,t){if(i==t)return;const e=i.getBoundingClientRect(),o=t.getBoundingClientRect();return e.top<o.bottom&&e.bottom>o.top&&e.left<o.right&&e.right>o.left};x=new WeakSet;G=function(i){if(!i)return!1;for(const t of i){const e=document.querySelector(t);if(!(!e||getComputedStyle(e).visibility==="hidden")&&a(this,C,A).call(this,this.targetElement,e))return!0}return!1};O=new WeakSet;H=function(i){const t=i.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>e||t.left+t.width<0||t.left>o};V=new WeakSet;U=async function(i,t,e){return X(i,t,{placement:this.placement,middleware:[Y(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(o){return{data:await Z(o,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},j({padding:16}),tt(),et(),it({padding:16,element:e})]})};B=new WeakSet;K=function(){if(!this.targetElement)return!1;const i=a(this,O,H).call(this,this.targetElement),t=this.targetElement.checkVisibility(),e=this.overlappedBy.length===0?!1:a(this,x,G).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!e&&!i&&t)};w=new WeakSet;_=async function(){const i=this.targetElement,t=d(this,f).value,e=d(this,b).value;if(!(!i||!t||!e))try{nt(this,v,Q(i,t,()=>{a(this,V,U).call(this,i,t,e).then(({x:o,y:r,middlewareData:c,placement:p})=>{if(a(this,B,K).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${o}px`,top:`${r}px`}),c.arrow){const{x:S,y:T}=c.arrow;e.removeAttribute("class"),e.classList.add("arrow-"+p),Object.assign(e.style,{left:S!=null?`${S}px`:"",top:T!=null?`${T}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};n.styles=at;l([g()],n.prototype,"placement",2);l([g({attribute:!1})],n.prototype,"overlappedBy",2);l([g({attribute:!1})],n.prototype,"target",2);l([g()],n.prototype,"label",2);l([g({attribute:!1})],n.prototype,"computeVisibility",2);l([q()],n.prototype,"_isVisible",2);l([q()],n.prototype,"_preventClose",2);n=l([N("gds-coachmark")],n);const bt={title:"Docs/Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/coachmark)

Coachmarks are contextual tips that focus on making the user
aware of a new feature, the benefits of an existing one or a moved feature within an interface.

The component is primarily a container that follows the targeted element.
The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
The coachmark will close and dispatch a CustomEvent of \`gds-ui-state\`

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only

@status beta`}}},tags:["autodocs"]},lt={parameters:{docs:{source:{format:!0,type:"dynamic"}}}},m={...lt,render:()=>I`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector.
        Clicking anywhere closes the coachmark.
      </p>
      <p
        id="targetElement"
        style="width: 200px; background: #ddd; padding: 1px"
      >
        Coachmark target element
      </p>
      <gds-coachmark .target=${["#targetElement"]} placement="bottom">
        This is the coachmark content.
      </gds-coachmark>
    </div>
  `};var P,$,M,D,L;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector.
        Clicking anywhere closes the coachmark.
      </p>
      <p
        id="targetElement"
        style="width: 200px; background: #ddd; padding: 1px"
      >
        Coachmark target element
      </p>
      <gds-coachmark .target=\${['#targetElement']} placement="bottom">
        This is the coachmark content.
      </gds-coachmark>
    </div>
  \`
}`,...(M=($=m.parameters)==null?void 0:$.docs)==null?void 0:M.source},description:{story:"Because this is the default story that also renders at the top of the page, the\ncoachmark will be shown in the first panel only, since the `#targetElement` selector\nwill match the first element in the DOM.",...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};const vt=["Basic"];export{m as Basic,vt as __namedExportsOrder,bt as default};
