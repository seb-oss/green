import{n as i,g as d,G as m,h as v}from"./gds-element-24e794df.js";import{a as h}from"./query-b9d3c2af.js";import{t as u}from"./tokens.style-f52cb050.js";import{s as p}from"./style-expression-property-45d22dc5.js";import{i as f}from"./lit-element-2a5e401f.js";const c=f`
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
`;var g=Object.defineProperty,E=Object.getOwnPropertyDescriptor,o=(e,s,a,l)=>{for(var r=l>1?void 0:l?E(s,a):s,y=e.length-1,n;y>=0;y--)(n=e[y])&&(r=(l?n(s,a,r):n(r))||r);return l&&r&&g(s,a,r),r};let t=class extends m{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return v`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};t.styles=[u,c];o([p({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],t.prototype,"ratio",2);o([p({property:"object-position",selector:"video",valueTemplate:e=>e})],t.prototype,"position",2);o([p({property:"inset",selector:"figure",valueTemplate:e=>e})],t.prototype,"inset",2);o([p({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);o([p({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);o([p({property:"opacity",selector:"figure",valueTemplate:e=>e})],t.prototype,"opacity",2);o([p({property:"object-fit",selector:"video",valueTemplate:e=>e})],t.prototype,"fit",2);o([p({property:"pointer-events",selector:"video",valueTemplate:e=>e})],t.prototype,"events",2);o([p({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],t.prototype,"radius",2);o([i()],t.prototype,"src",2);o([i()],t.prototype,"poster",2);o([i({type:Boolean})],t.prototype,"muted",2);o([i({type:Boolean})],t.prototype,"playsinline",2);o([i({type:Boolean})],t.prototype,"autoplay",2);o([i({type:Boolean})],t.prototype,"loop",2);o([h("video")],t.prototype,"videoElement",2);t=o([d("gds-video")],t);
