import{i as y,a0 as h,a4 as v,S as m,Q as c,a5 as f,J as u,h as g,t as E,s,n as i,d as P,g as w}from"./iframe-BkGvYmww.js";const b=y`
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
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,t=(p,r,l,a)=>{for(var o=a>1?void 0:a?_(r,l):r,d=p.length-1,n;d>=0;d--)(n=p[d])&&(o=(a?n(r,l,o):n(o))||o);return a&&o&&x(r,l,o),o};let e=class extends h(v(m(c(f(u))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return g`<video></video>`}firstUpdated(){this.applyVideoSettings()}};e.styles=[E,b];t([s()],e.prototype,"aspect-ratio",2);t([s({selector:"video"})],e.prototype,"object-position",2);t([s()],e.prototype,"opacity",2);t([s({selector:"video"})],e.prototype,"object-fit",2);t([s({selector:"video"})],e.prototype,"pointer-events",2);t([s({valueTemplate:p=>`var(--gds-sys-space-${p})`})],e.prototype,"border-radius",2);t([i()],e.prototype,"src",2);t([i()],e.prototype,"poster",2);t([i({type:Boolean})],e.prototype,"muted",2);t([i({type:Boolean})],e.prototype,"playsinline",2);t([i({type:Boolean})],e.prototype,"autoplay",2);t([i({type:Boolean})],e.prototype,"loop",2);t([P("video")],e.prototype,"videoElement",2);e=t([w("gds-video")],e);export{e as G};
