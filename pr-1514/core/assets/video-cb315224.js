import{n as i,g as n,G as v,h as m}from"./gds-element-54cd6e2a.js";import{a as h}from"./query-b9d3c2af.js";import{s as p}from"./style-expression-property-89161d08.js";import{i as u}from"./lit-element-71e04f06.js";const f=u`
  :host {
    display: contents;
  }

  figure {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  video {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;var c=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(e,s,a,l)=>{for(var r=l>1?void 0:l?g(s,a):s,y=e.length-1,d;y>=0;y--)(d=e[y])&&(r=(l?d(s,a,r):d(r))||r);return l&&r&&c(s,a,r),r};let t=class extends v{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return m`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};t.styles=[f];o([p({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],t.prototype,"ratio",2);o([p({property:"object-position",selector:"video",valueTemplate:e=>e})],t.prototype,"position",2);o([p({property:"inset",selector:"figure",valueTemplate:e=>e})],t.prototype,"inset",2);o([p({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);o([p({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);o([p({property:"opacity",selector:"figure",valueTemplate:e=>e})],t.prototype,"opacity",2);o([p({property:"object-fit",selector:"video",valueTemplate:e=>e})],t.prototype,"fit",2);o([p({property:"pointer-events",selector:"video",valueTemplate:e=>e})],t.prototype,"events",2);o([p({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],t.prototype,"radius",2);o([i()],t.prototype,"src",2);o([i()],t.prototype,"poster",2);o([i({type:Boolean})],t.prototype,"muted",2);o([i({type:Boolean})],t.prototype,"playsinline",2);o([i({type:Boolean})],t.prototype,"autoplay",2);o([i({type:Boolean})],t.prototype,"loop",2);o([h("video")],t.prototype,"videoElement",2);t=o([n("gds-video")],t);
