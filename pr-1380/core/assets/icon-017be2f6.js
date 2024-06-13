import{i as a,x as c}from"./lit-element-71e04f06.js";import{n as r}from"./Reflect-8da9b77b.js";import{o as g}from"./unsafe-html-367b382d.js";import{G as m}from"./gds-element-d272b33a.js";const y=a`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`;var d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=(h,e,l,o)=>{for(var t=o>1?void 0:o?u(e,l):e,n=h.length-1,p;n>=0;n--)(p=h[n])&&(t=(o?p(e,l,t):p(t))||t);return o&&t&&d(e,l,t),t};class s extends m{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){const e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return c`${g(e)}`}}s.styles=[y];i([r({type:Number})],s.prototype,"width",2);i([r({type:Number})],s.prototype,"height",2);i([r({type:Boolean})],s.prototype,"solid",2);i([r({type:String})],s.prototype,"label",2);export{s as G};
