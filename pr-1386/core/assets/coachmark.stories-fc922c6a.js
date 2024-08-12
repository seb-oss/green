import{i as I,x as y}from"./lit-element-71e04f06.js";import{r as z,n as E,g as J,G as K,h as b}from"./gds-element-54cd6e2a.js";import{a as Q,c as X,o as Y,d as Z,s as j,f as ee,h as te,b as oe}from"./floating-ui.dom-373c8bf6.js";import{n as $,e as P}from"./ref-ff2f01fc.js";import{n as ie}from"./when-cf7256a5.js";import"./_commonjsHelpers-725317a4.js";import"./directive-helpers-9aabd8ef.js";import"./directive-12249aa5.js";const ae=I`
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
`;var re=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,p=(t,e,o,i)=>{for(var s=i>1?void 0:i?ne(e,o):e,d=t.length-1,m;d>=0;d--)(m=t[d])&&(s=(i?m(e,o,s):m(s))||s);return i&&s&&re(e,o,s),s},x=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},n=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),a=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},A=(t,e,o,i)=>(x(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),r=(t,e,o)=>(x(t,e,"access private method"),o),f,w,c,k,h,u,_,D,S,G,O,H,W,U,B,F,R,N,v,C;let l=class extends K{constructor(){super(...arguments),a(this,h),a(this,_),a(this,S),a(this,O),a(this,W),a(this,B),a(this,R),a(this,v),a(this,f,P()),a(this,w,P()),a(this,c,void 0),a(this,k,void 0),this._isVisible=!1,this._preventClose=!1,this.placement="bottom",this.overlappedBy=[],this.target=[]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{r(this,v,C).call(this),r(this,h,u).call(this)},400)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this._isVisible&&r(this,h,u).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",r(this,h,u)),document.removeEventListener("keydown",t=>{t.key==="Escape"&&this._isVisible&&r(this,h,u).call(this)})}firstUpdated(){this.target.length>0&&(A(this,c,r(this,_,D).call(this,this.target)),r(this,v,C).call(this))}setPreventClose(t){this._preventClose=t}render(){return b`${ie(this.target.length>0,()=>b`
        <div
          class="gds-coachmark"
          aria-modal="false"
          ${$(n(this,f))}
        >
          <slot></slot>
          <div id="gds-arrow" ${$(n(this,w))}></div>
        </div>
      `,()=>b``)}`}};f=new WeakMap;w=new WeakMap;c=new WeakMap;k=new WeakMap;h=new WeakSet;u=function(){var e;var t;this._isVisible&&(this._isVisible=!1,(e=n(this,f).value)==null||e.remove(),(t=n(this,k))==null||t.call(this),window.dispatchEvent(new CustomEvent("tooltipClosed")))};_=new WeakSet;D=function(t){let e=!1,o;for(const i of t){if(i==="shadowRoot"){e=!0;continue}o?e&&o.shadowRoot?(o=o.shadowRoot.querySelector(i),e=!1):o=o.querySelector(i):o=document.querySelector(i)}return o};S=new WeakSet;G=function(t,e){if(t==e)return;const o=t.getBoundingClientRect(),i=e.getBoundingClientRect();return o.top<i.bottom&&o.bottom>i.top&&o.left<i.right&&o.right>i.left};O=new WeakSet;H=function(t){if(!t)return!1;for(const e of t){const o=document.querySelector(e);if(!(!o||getComputedStyle(o).visibility==="hidden")&&r(this,S,G).call(this,n(this,c),o))return!0}return!1};W=new WeakSet;U=function(t){const e=t.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return e.top+e.height<0||e.top>o||e.left+e.width<0||e.left>i};B=new WeakSet;F=async function(t,e,o){return X(t,e,{placement:this.placement,middleware:[Y(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",async fn(i){return{data:await Z(i,{boundary:document.querySelector("main"),rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}}},j({padding:16}),ee(),te(),oe({padding:16,element:o})]})};R=new WeakSet;N=function(){if(!n(this,c))return!1;const t=r(this,W,U).call(this,n(this,c)),e=n(this,c).checkVisibility();return!(this.overlappedBy.length===0?!1:r(this,O,H).call(this,this.overlappedBy))&&!t&&e&&window.innerWidth>580};v=new WeakSet;C=async function(){const t=n(this,c),e=n(this,f).value,o=n(this,w).value;if(!(!t||!e||!o))try{A(this,k,Q(t,e,()=>{r(this,B,F).call(this,t,e,o).then(({x:i,y:s,middlewareData:d,placement:m})=>{if(r(this,R,N).call(this)){if(this._isVisible=!0,Object.assign(e.style,{visibility:"visible",opacity:1,left:`${i}px`,top:`${s}px`}),d.arrow){const{x:V,y:T}=d.arrow;o.removeAttribute("class"),o.classList.add("arrow-"+m),Object.assign(o.style,{left:V!=null?`${V}px`:"",top:T!=null?`${T}px`:""})}}else this._isVisible=!1,Object.assign(e.style,{visibility:"hidden",opacity:0})})}))}catch{console.warn("failed to render tooltips")}};l.styles=ae;l.shadowRootOptions={mode:"open",delegatesFocus:!0};p([z()],l.prototype,"_isVisible",2);p([z()],l.prototype,"_preventClose",2);p([E()],l.prototype,"placement",2);p([E({attribute:!1})],l.prototype,"overlappedBy",2);p([E({attribute:!1})],l.prototype,"target",2);l=p([J("gds-coachmark")],l);const ge={title:"Docs/Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/coachmark)

Coachmarks are contextual tips that focus on making the user
aware of a new feature, the benefits of an existing one or a moved feature within an interface.

the component is primarily a container that follows the targeted element.
the tooltip will be invisible and disabled if another element covered the targeted element or its simply out of view
the tooltip will close and dispatch a CustomEvent of "tooltipClosed"

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only`}}},tags:["autodocs"]},se={parameters:{docs:{source:{format:!0,type:"dynamic"}}}},g={...se,render:()=>y`
    <main>
      ${document.querySelector("gds-coachmark")?y`The coachmark is already visible in another panel`:y` <p id="targetElement">Clicking will close the coachmark</p>
            <gds-coachmark placement="top" .target=${["#targetElement"]}>
              <div class="gds-coachmark" aria-modal="false">
                <div>This is the coachmark content.</div>
              </div>
              <div id="gds-arrow"></div>
            </gds-coachmark>`}
    </main>
  `};var q,M,L;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <main>
      \${document.querySelector('gds-coachmark') ? html\`The coachmark is already visible in another panel\` : html\` <p id="targetElement">Clicking will close the coachmark</p>
            <gds-coachmark placement="top" .target=\${['#targetElement']}>
              <div class="gds-coachmark" aria-modal="false">
                <div>This is the coachmark content.</div>
              </div>
              <div id="gds-arrow"></div>
            </gds-coachmark>\`}
    </main>
  \`
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const ve=["Basic"];export{g as Basic,ve as __namedExportsOrder,ge as default};
