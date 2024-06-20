import{t as g,_ as t,s as o,g as i,G as y,h}from"./chunk.ZQ4D5K7J-df0826a6.js";import{i as u,x as v}from"./lit-element-2a5e401f.js";import{n as s}from"./Reflect-a49e984a.js";import{o as m}from"./unsafe-html-5de64254.js";var w=u`
 
    :host {
      gap: var(--_gap-column) var(--_gap-row);
    }

    // .container {
    //   padding: var(--_padding-desktop);
    //   display: var(--_display-desktop);
    //   gap: var(--_gap-desktop);
    //   row-gap: var(--_row-gap-desktop);
    //   align-items: var(--_align-desktop);
    //   justify-content: var(--_justify-desktop, center);
    //   flex-direction: var(--_direction-desktop);
    //   grid-column-start: span var(--_span-desktop);
    // }
  }
`,_=w,r=class extends y{render(){return h`<slot></slot>`}};r.styles=[g,_];t([o({styleTemplate:(e,n)=>{const d=n[0],c=n[1]||d;return`--_gap-column: ${d}; --_gap-row: ${c};`}})],r.prototype,"gap",2);t([o({property:"--_row-gap",valueTemplate:e=>e})],r.prototype,"rowGap",2);t([o()],r.prototype,"padding",2);t([o({property:"display",valueTemplate:e=>e})],r.prototype,"display",2);t([o({property:"position",valueTemplate:e=>e})],r.prototype,"position",2);t([o({property:"inset",valueTemplate:e=>e})],r.prototype,"inset",2);t([o({property:"overflow",valueTemplate:e=>e})],r.prototype,"overflow",2);t([o({property:"align-items",valueTemplate:e=>e})],r.prototype,"align",2);t([o({property:"justify-content",valueTemplate:e=>e})],r.prototype,"justify",2);t([o({property:"flex-direction",valueTemplate:e=>e})],r.prototype,"direction",2);t([o({property:"grid-column",valueTemplate:e=>`${e}`})],r.prototype,"column",2);t([o({property:"grid-row",valueTemplate:e=>`${e}`})],r.prototype,"row",2);t([o({property:"backdrop-filter",valueTemplate:e=>`blur(${e})`})],r.prototype,"filter",2);t([o({property:"border-radius",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],r.prototype,"radius",2);t([o({property:"background",valueTemplate:e=>e})],r.prototype,"background",2);t([o({property:"border",valueTemplate:e=>e})],r.prototype,"border",2);t([o({property:"color",valueTemplate:e=>`var(--gds-sys-color-${e})`})],r.prototype,"color",2);t([o({property:"height",valueTemplate:e=>e})],r.prototype,"height",2);r=t([i("gds-container")],r);var C=u`
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
`,f=C,p=class extends y{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){const e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return v`${m(e)}`}};p.styles=[f];t([s({type:Number})],p.prototype,"width",2);t([s({type:Number})],p.prototype,"height",2);t([s({type:Boolean})],p.prototype,"solid",2);t([s({type:String})],p.prototype,"label",2);var a=class extends p{};a._regularSVG='<path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';a._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C11.6685 21 11.3506 20.8683 11.1161 20.6339L5.36612 14.8839C4.87796 14.3957 4.87796 13.6043 5.36612 13.1161C5.85427 12.628 6.64573 12.628 7.13388 13.1161L10.75 16.7322V4.25C10.75 3.55964 11.3097 3 12 3C12.6904 3 13.25 3.55964 13.25 4.25V16.7322L16.8661 13.1161C17.3543 12.628 18.1457 12.628 18.6339 13.1161C19.122 13.6043 19.122 14.3957 18.6339 14.8839L12.8839 20.6339C12.6495 20.8683 12.3315 21 12 21Z" fill="currentColor"/>';a._name="arrow down";a=t([i("gds-icon-arrow-down")],a);var l=class extends p{};l._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';l._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>';l._name="arrow right";l=t([i("gds-icon-arrow-right")],l);
