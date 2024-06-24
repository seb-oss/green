import{n as p}from"./Reflect-a49e984a.js";import{a as c}from"./query-b9d3c2af.js";import{g as h,G as f,h as g}from"./gds-element-4f5906f2.js";import{t as _}from"./tokens.style-1e462ec5.js";import{s as r}from"./style-expression-property-b0ffca16.js";import{i as E}from"./lit-element-2a5e401f.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";const b=E`
  :host {
    display: contents;
  }

  figure {
    aspect-ratio: var(--_ratio, inital);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    inset: var(--_inset, initial);
    width: 100%;
    height: auto;
    opacity: var(--_opacity, 1);
    overflow: hidden;
    border-radius: inherit;
  }

  video {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
    pointer-events: inherit;
  }
`;var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,o=(e,s,l,a)=>{for(var i=a>1?void 0:a?B(s,l):s,d=e.length-1,m;d>=0;d--)(m=e[d])&&(i=(a?m(s,l,i):m(i))||i);return a&&i&&T(s,l,i),i};let t=class extends f{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return g`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};t.styles=[_,b];o([r({property:"--_ratio",valueTemplate:e=>`${e}`})],t.prototype,"ratio",2);o([r({property:"--_position",valueTemplate:e=>e})],t.prototype,"position",2);o([r({property:"--_inset",valueTemplate:e=>e})],t.prototype,"inset",2);o([r({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);o([r({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);o([r({property:"--_opacity",valueTemplate:e=>e})],t.prototype,"opacity",2);o([r({property:"--_fit",valueTemplate:e=>e})],t.prototype,"fit",2);o([r({property:"pointer-events",valueTemplate:e=>e})],t.prototype,"events",2);o([r({property:"border-radius",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],t.prototype,"radius",2);o([p()],t.prototype,"src",2);o([p()],t.prototype,"poster",2);o([p({type:Boolean})],t.prototype,"muted",2);o([p({type:Boolean})],t.prototype,"playsinline",2);o([p({type:Boolean})],t.prototype,"autoplay",2);o([p({type:Boolean})],t.prototype,"loop",2);o([c("video")],t.prototype,"videoElement",2);t=o([h("gds-video")],t);const S={title:"Components/Layouts/Video",component:"gds-video",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-video`\n\n## Usage"}}}},x={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{ratio:"16/9",fit:"cover",inset:"0",position:"relative",opacity:"1",src:"https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",autoplay:!0,muted:!0,playsinline:!0,loop:!0,events:"none"}},n={...x};var y,v,u;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const z=["Basic"];export{n as Basic,z as __namedExportsOrder,S as default};
