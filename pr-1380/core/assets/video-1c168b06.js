import{n as r,g as d,G as v,h as m}from"./gds-element-24e794df.js";import{a as h}from"./query-b9d3c2af.js";import{t as f}from"./tokens.style-6bc9b0c8.js";import{s as i}from"./style-expression-property-6dbce61b.js";import{i as u}from"./lit-element-2a5e401f.js";const c=u`
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
`;var g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(e,s,l,a)=>{for(var p=a>1?void 0:a?_(s,l):s,n=e.length-1,y;n>=0;n--)(y=e[n])&&(p=(a?y(s,l,p):y(p))||p);return a&&p&&g(s,l,p),p};let t=class extends v{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return m`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};t.styles=[f,c];o([i({property:"--_ratio",valueTemplate:e=>`${e}`})],t.prototype,"ratio",2);o([i({property:"--_position",valueTemplate:e=>e})],t.prototype,"position",2);o([i({property:"--_inset",valueTemplate:e=>e})],t.prototype,"inset",2);o([i({property:"width",valueTemplate:e=>e})],t.prototype,"width",2);o([i({property:"height",valueTemplate:e=>e})],t.prototype,"height",2);o([i({property:"--_opacity",valueTemplate:e=>e})],t.prototype,"opacity",2);o([i({property:"--_fit",valueTemplate:e=>e})],t.prototype,"fit",2);o([i({property:"pointer-events",valueTemplate:e=>e})],t.prototype,"events",2);o([i({property:"border-radius",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],t.prototype,"radius",2);o([r()],t.prototype,"src",2);o([r()],t.prototype,"poster",2);o([r({type:Boolean})],t.prototype,"muted",2);o([r({type:Boolean})],t.prototype,"playsinline",2);o([r({type:Boolean})],t.prototype,"autoplay",2);o([r({type:Boolean})],t.prototype,"loop",2);o([h("video")],t.prototype,"videoElement",2);t=o([d("gds-video")],t);
