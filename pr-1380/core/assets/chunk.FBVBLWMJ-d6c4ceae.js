import{t as m,_ as e,s as r,g as y,G as c,h as v}from"./chunk.ZQ4D5K7J-e7341522.js";import{i as h,x as w}from"./lit-element-2a5e401f.js";import{n}from"./Reflect-a49e984a.js";import{o as C}from"./unsafe-html-5de64254.js";var _=h`
  :host {
    gap: var(--_gap-column) var(--_gap-row);
    box-sizing: border-box;
  }
`,b=_,o=class extends c{render(){return v`<slot></slot>`}};o.styles=[m,b];e([r({styleTemplate:(t,p)=>{const l=p[0],d=p[1]||l;return`--_gap-column: ${l}; --_gap-row: ${d};`}})],o.prototype,"gap",2);e([r({property:"--_row-gap",valueTemplate:t=>t})],o.prototype,"rowGap",2);e([r()],o.prototype,"padding",2);e([r({property:"display",valueTemplate:t=>t})],o.prototype,"display",2);e([r({property:"position",valueTemplate:t=>t})],o.prototype,"position",2);e([r({property:"inset",valueTemplate:t=>t})],o.prototype,"inset",2);e([r({property:"overflow",valueTemplate:t=>t})],o.prototype,"overflow",2);e([r({property:"align-items",valueTemplate:t=>t})],o.prototype,"align",2);e([r({property:"justify-content",valueTemplate:t=>t})],o.prototype,"justify",2);e([r({property:"flex-direction",valueTemplate:t=>t})],o.prototype,"direction",2);e([r({property:"grid-column",valueTemplate:t=>`${t}`})],o.prototype,"column",2);e([r({property:"grid-row",valueTemplate:t=>`${t}`})],o.prototype,"row",2);e([r({property:"backdrop-filter",valueTemplate:t=>`blur(${t})`})],o.prototype,"filter",2);e([r({property:"border-radius",valueTemplate:t=>`var(--gds-sys-radii-${t})`})],o.prototype,"radius",2);e([r({property:"background",valueTemplate:t=>t})],o.prototype,"background",2);e([r({valueTemplate:t=>`1px solid ${t}`,styleTemplate:(t,p)=>{const l=p[0],d=p.length>1?p[1]:l,u=p.length>2?p[2]:l,g=p.length>3?p[3]:l;return`border-top: ${l}; border-right: ${d}; border-bottom: ${u}; border-left: ${g};`}})],o.prototype,"border",2);e([r({property:"color",valueTemplate:t=>`var(--gds-sys-color-${t})`})],o.prototype,"color",2);e([r({property:"height",valueTemplate:t=>t})],o.prototype,"height",2);e([r({property:"mask-image",valueTemplate:t=>`linear-gradient(to ${t}, currentColor 40%, transparent)`})],o.prototype,"mask",2);o=e([y("gds-container")],o);var f=h`
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
`,$=f,a=class extends c{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){const t=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return w`${C(t)}`}};a.styles=[$];e([n({type:Number})],a.prototype,"width",2);e([n({type:Number})],a.prototype,"height",2);e([n({type:Boolean})],a.prototype,"solid",2);e([n({type:String})],a.prototype,"label",2);var s=class extends a{};s._regularSVG='<path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';s._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C11.6685 21 11.3506 20.8683 11.1161 20.6339L5.36612 14.8839C4.87796 14.3957 4.87796 13.6043 5.36612 13.1161C5.85427 12.628 6.64573 12.628 7.13388 13.1161L10.75 16.7322V4.25C10.75 3.55964 11.3097 3 12 3C12.6904 3 13.25 3.55964 13.25 4.25V16.7322L16.8661 13.1161C17.3543 12.628 18.1457 12.628 18.6339 13.1161C19.122 13.6043 19.122 14.3957 18.6339 14.8839L12.8839 20.6339C12.6495 20.8683 12.3315 21 12 21Z" fill="currentColor"/>';s._name="arrow down";s=e([y("gds-icon-arrow-down")],s);var i=class extends a{};i._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';i._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>';i._name="arrow right";i=e([y("gds-icon-arrow-right")],i);export{a as G};
