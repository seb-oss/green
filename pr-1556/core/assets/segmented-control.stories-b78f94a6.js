import{r as ve,k as Z}from"./lit-element-1d72f0ce.js";import{n as y,g as be,G as ye,h as T,r as _e}from"./gds-element-d791ed3d.js";import{a as F}from"./query-b9d3c2af.js";import{n as K}from"./when-748fcf30.js";import{m as Q}from"./runtime-c06dc943.js";import{T as we}from"./transitional-styles-c75c0fd2.js";import{w as We}from"./watch-c4961afe.js";import{r as Me}from"./resize-observer-81981523.js";import{t as xe}from"./tokens.style-711a3a94.js";import"./chevron-right-59e84500.js";import"./_commonjsHelpers-725317a4.js";import"./icon-b442d341.js";import"./directive-dd518ee3.js";const Te=`:host{display:flex;transition:.2s;z-index:1}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border-radius:calc(infinity * 1px);border-width:0;color:var(--gds-sys-color-content-content);cursor:pointer;flex-grow:1;flex-shrink:0;font-family:inherit;font-size:inherit;overflow:hidden;padding:0 1rem;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%}button:disabled{cursor:not-allowed;opacity:.5}@media (pointer: fine){button:hover{background-color:color-mix(in srgb,var(--gds-sys-color-state-layers-state-black-dim1),transparent)}button:hover:disabled{background-color:transparent}}button:focus-visible{outline:2px solid #000;outline-offset:-2px}
`;var ze=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,D=(e,t,n,o)=>{for(var r=o>1?void 0:o?Ce(t,n):t,h=e.length-1,l;h>=0;h--)(l=e[h])&&(r=(o?l(t,n,r):l(r))||r);return o&&r&&ze(t,n,r),r};let v=class extends ye{constructor(){super(...arguments),this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),we.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return T`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};v.styles=[...xe,ve(Te)];D([y({type:Boolean,reflect:!0})],v.prototype,"selected",2);D([y()],v.prototype,"value",2);D([y({type:Boolean,reflect:!0})],v.prototype,"disabled",2);v=D([be("gds-segment")],v);const $e=`:host{background-color:var(--gds-sys-color-container-container-dim1);border:.25rem solid var(--gds-sys-color-container-container-dim1);border-radius:calc(infinity * 1px);box-sizing:border-box;contain:layout;display:inline-flex;gap:.25rem;height:3rem;max-width:100%;overflow:hidden}:host([size="small"]){height:2.5rem}#track{box-sizing:border-box;display:flex;flex-grow:0;flex-shrink:1;overflow:hidden;position:relative;width:100%}#segments{box-sizing:border-box;display:inline-flex;gap:.25rem;position:relative;transition:.2s;z-index:1}#btn-prev,#btn-next{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;aspect-ratio:1;background-color:var(--gds-sys-color-container-container-dim1);border-radius:calc(infinity * 1px);border-width:0;color:var(--gds-sys-color-content-content);cursor:pointer;display:flex;font-size:1rem;height:100%;justify-content:center;width:2.5rem}@media (pointer: fine){#btn-prev:hover,#btn-next:hover{background-color:color-mix(in srgb,var(--gds-sys-color-state-layers-state-black-dim1),var(--gds-sys-color-container-container-dim1))}}:host([size="small"]) #btn-prev,:host([size="small"]) #btn-next{width:2rem}::slotted(*){flex-grow:1;flex-shrink:0;z-index:1}#indicator{background-color:var(--gds-sys-color-container-container-bright);border-radius:calc(infinity * 1px);height:100%;left:0;position:absolute;transition:transform .2s,width .2s;z-index:0}
`;var Ie=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,g=(e,t,n,o)=>{for(var r=o>1?void 0:o?Pe(t,n):t,h=e.length-1,l;h>=0;h--)(l=e[h])&&(r=(o?l(t,n,r):l(r))||r);return o&&r&&Ie(t,n,r),r},J=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},s=(e,t,n)=>(J(e,t,"read from private field"),n?n.call(e):t.get(e)),i=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},a=(e,t,n,o)=>(J(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),Y=(e,t,n,o)=>({set _(r){a(e,t,r,n)},get _(){return s(e,t,o)}}),Be=(e,t,n)=>(J(e,t,"access private method"),n),u,d,z,S,f,p,C,$,b,N,I,P,A,m,B,G,Se,V,X,q,E,R,H;const Ee={small:36,medium:44},W=e=>e?0:4;let c=class extends ye{constructor(){super(...arguments),i(this,G),this.segMinWidth=100,this.size="medium",i(this,u,void 0),this._showPrevButton=!1,this._showNextButton=!1,i(this,d,0),i(this,z,0),i(this,S,0),i(this,f,0),i(this,p,0),i(this,C,0),i(this,$,0),i(this,b,!1),i(this,N,e=>{a(this,C,e.clientX),a(this,$,s(this,f)),a(this,b,!0)}),i(this,I,e=>{if(!s(this,b))return;e.preventDefault();const t=e.clientX-s(this,C);if(!(Math.abs(t)<5))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),a(this,f,s(this,$)+t),s(this,B).call(this)}catch{}}),i(this,P,e=>{if(s(this,b)){a(this,b,!1);try{this._elSegments.releasePointerCapture(e.pointerId),s(this,A).call(this)}catch{}}}),i(this,A,()=>{a(this,d,Math.round(-s(this,f)/s(this,z))),s(this,m).call(this)}),i(this,m,(e=!1)=>{const t=()=>{const l=this.segments.length,k=this._elTrack.offsetWidth;if(k/l>this.segMinWidth)return{count:l,segmentWidth:(k-W(this._isUsingTransitionalStyles)*(l-1))/l};const U=this.offsetWidth-Ee[this.size]*2,L=Math.floor(U/this.segMinWidth),ke=(k-W(this._isUsingTransitionalStyles)*(L-1))/L;return{count:L,segmentWidth:ke}},{count:n}=t();e&&(s(this,p)>=s(this,d)+n&&a(this,d,s(this,p)-n+1),s(this,p)<s(this,d)&&a(this,d,s(this,p)));const o=this.segments.length-n,r=s(this,d)>=o,h=s(this,d)<=0;r&&a(this,d,o),h&&a(this,d,0),s(this,q).call(this,n),this.updateComplete.then(()=>{const{segmentWidth:l,count:k}=t();this.segments.forEach(U=>{U.style.width=l+"px"}),a(this,f,-s(this,d)*l-W(this._isUsingTransitionalStyles)*s(this,d)),s(this,B).call(this),a(this,z,l),a(this,S,l),s(this,E).call(this)})}),i(this,B,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${s(this,f)}px)`})}),i(this,V,()=>{Y(this,d)._--,s(this,m).call(this)}),i(this,X,()=>{Y(this,d)._++,s(this,m).call(this)}),i(this,q,e=>{this._showPrevButton=s(this,d)>0,this._showNextButton=s(this,d)<this.segments.length-e}),i(this,E,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=this.segments.indexOf(e),n=t*s(this,S)+W(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${n}px)`,this._elIndicator.style.width=`${s(this,S)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),i(this,R,e=>{const t=this.segments.find(n=>n===e.target||n.contains(e.target));t&&(this.segments.forEach(n=>n.selected=!1),t.selected=!0,a(this,u,t.value),s(this,E).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),i(this,H,()=>{s(this,u)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===s(this,u));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,a(this,p,this.segments.indexOf(e)),s(this,m).call(this,!0))})})}get value(){return s(this,u)}set value(e){a(this,u,e),s(this,H).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),we.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",e=>{e.target instanceof v&&(a(this,p,this.segments.indexOf(e.target)),s(this,m).call(this,!0))})}render(){return T`${K(this._showPrevButton,()=>T`<button
            id="btn-prev"
            @click=${s(this,V)}
            aria-label=${Q("Scroll right")}
          >
            <gds-icon-chevron-left />
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${s(this,N)}
          @pointermove=${s(this,I)}
          @touchmove=${s(this,I)}
          @pointerup=${s(this,P)}
          @pointercancel=${s(this,P)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${s(this,R)}
            @slotchange=${Be(this,G,Se)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${K(this._showNextButton,()=>T`<button
            id="btn-next"
            @click=${s(this,X)}
            aria-label=${Q("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>s(this,m).call(this))}};u=new WeakMap;d=new WeakMap;z=new WeakMap;S=new WeakMap;f=new WeakMap;p=new WeakMap;C=new WeakMap;$=new WeakMap;b=new WeakMap;N=new WeakMap;I=new WeakMap;P=new WeakMap;A=new WeakMap;m=new WeakMap;B=new WeakMap;G=new WeakSet;Se=function(){var t;const e=(t=this.segments.find(n=>n.selected))==null?void 0:t.value;e&&a(this,u,e),s(this,m).call(this)};V=new WeakMap;X=new WeakMap;q=new WeakMap;E=new WeakMap;R=new WeakMap;H=new WeakMap;c.styles=[xe,ve($e)];g([y({type:Number,attribute:"seg-min-width"})],c.prototype,"segMinWidth",2);g([y({reflect:!0})],c.prototype,"size",2);g([y()],c.prototype,"value",1);g([F("slot")],c.prototype,"_elSlot",2);g([F("#indicator")],c.prototype,"_elIndicator",2);g([F("#track")],c.prototype,"_elTrack",2);g([F("#segments")],c.prototype,"_elSegments",2);g([_e()],c.prototype,"_showPrevButton",2);g([_e()],c.prototype,"_showNextButton",2);g([Me(),We("segMinWidth")],c.prototype,"_recalculateMinWidth",1);c=g([be("gds-segmented-control")],c);const Ze={title:"Docs/Components/Segmented Control",component:"gds-segmented-control",subcomponents:{MenuItem:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.`}}},tags:["autodocs"]},O={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},M={...O},_={...O,render:e=>Z`
    <gds-segmented-control
      value="2"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  `},w={...O,render:e=>Z`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},x={...O,render:e=>Z`
    <div style="max-width: 800px">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  `};var j,ee,te;M.parameters={...M.parameters,docs:{...(j=M.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(te=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,ie,re,ae;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control
      value="2"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  \`
}`,...(ie=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(ae=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var oe,le,de,ce,ge;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...(de=(le=w.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...(ge=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ge.description}}};var he,me,pe,ue,fe;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="max-width: 800px">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  \`
}`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"The size of the segments can be configured using the `seg-min-width` attribute. This influences\nhow many segments will be visible at the same time. If you have long segment labels and want to\navoid concatenation, you can increase the `seg-min-width` attribute. But keep in mind that the\nbest practice is to keep the segment labels short.",...(fe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:fe.description}}};const Je=["Basic","Usage","Small","SegmentSize"];export{M as Basic,x as SegmentSize,w as Small,_ as Usage,Je as __namedExportsOrder,Ze as default};
