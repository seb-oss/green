import{n as s}from"./Reflect-DJ7r0WLU.js";import{a as y}from"./query-p8xgzTDt.js";import{h,G as m,g as v}from"./gds-element-DTROifYq.js";import{t as f}from"./tokens.style-BcVhf7GG.js";import{w as c,c as u,a as g,b as w,e as E,s as i}from"./declarative-layout-mixins-DLWGR3wk.js";import{i as P}from"./lit-element-Bx14lxc-.js";const b=P`
  :host {
    display: block;
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
`;var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,t=(p,r,a,l)=>{for(var o=l>1?void 0:l?x(r,a):r,n=p.length-1,d;n>=0;n--)(d=p[n])&&(o=(l?d(r,a,o):d(o))||o);return l&&o&&_(r,a,o),o};let e=class extends c(u(g(w(E(m))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return h`<video></video>`}firstUpdated(){this.applyVideoSettings()}};e.styles=[f,b];t([i()],e.prototype,"aspect-ratio",2);t([i({selector:"video"})],e.prototype,"object-position",2);t([i()],e.prototype,"opacity",2);t([i({selector:"video"})],e.prototype,"object-fit",2);t([i({selector:"video"})],e.prototype,"pointer-events",2);t([i({valueTemplate:p=>`var(--gds-sys-space-${p})`})],e.prototype,"border-radius",2);t([s()],e.prototype,"src",2);t([s()],e.prototype,"poster",2);t([s({type:Boolean})],e.prototype,"muted",2);t([s({type:Boolean})],e.prototype,"playsinline",2);t([s({type:Boolean})],e.prototype,"autoplay",2);t([s({type:Boolean})],e.prototype,"loop",2);t([y("video")],e.prototype,"videoElement",2);e=t([v("gds-video")],e);e.define();
