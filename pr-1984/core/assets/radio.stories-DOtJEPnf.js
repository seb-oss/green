import{i as w,x as S}from"./lit-element-C_s9q329.js";import{g as k,G as z,h as _}from"./custom-element-scoping-BEGY3AqQ.js";import{t as O}from"./tokens.style-CFvqdzpw.js";import{T as P}from"./transitional-styles-iv5lM2WH.js";import"./flex-tnFv_7np.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./div-Cnle9s5w.js";import"./declarative-layout-mixins-Cg5fmtre.js";const C=w`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .radio {
        transition: none;
      }
    }
  }

  @layer base {
    :host {
      --radio-bg-mix: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-hover)
      );
      --radio-bg-mix-active: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-pressed)
      );
      --radio-size: var(--gds-space-xl);
      --radio-pill-size: var(--gds-space-m);
      --radio-radius: var(--gds-space-max);
      --radio-border-color: var(--gds-color-l3-border-secondary);
      --radio-border-color-selected: var(--gds-color-l3-border-primary);
      --radio-border-width: var(--gds-space-4xs);
      --radio-border-width-selected: var(--gds-space-2xs);
      --radio-border-style: solid;
    }

    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color;
      transition-duration: 248ms;
      width: var(--radio-size);
      height: var(--radio-size);
      border-radius: var(--radio-radius);

      &:hover {
        background-color: var(--radio-bg-mix);
      }

      &:active {
        background-color: var(--radio-bg-mix-active);
      }

      .dot {
        width: var(--radio-pill-size);
        height: var(--radio-pill-size);
        border-radius: var(--radio-radius);
        border-style: var(--radio-border-style);
        border-color: var(--radio-border-color);
        border-width: var(--radio-border-width);
        background-color: var(--gds-color-l3-content-primary);
        box-sizing: border-box;
        transition-property: border;
        transition-duration: 248ms;

        .selected & {
          border-width: var(--radio-border-width-selected);
          border-color: var(--radio-border-color-selected);
        }
      }
    }
  }
`;var D=Object.defineProperty,R=Object.getOwnPropertyDescriptor,j=(c,a,d,s)=>{for(var r=s>1?void 0:s?R(a,d):a,t=c.length-1,i;t>=0;t--)(i=c[t])&&(r=(s?i(a,d,r):i(r))||r);return s&&r&&D(a,d,r),r};let n=class extends z{connectedCallback(){super.connectedCallback(),P.instance.apply(this,"gds-radio")}render(){return _`
      <div class="radio">
        <div class="dot"></div>
      </div>
      <div class="radio selected">
        <div class="dot"></div>
      </div>
      <div class="radio">
        <div class="dot"></div>
      </div>
    `}};n.styles=[O,C];n=j([k("gds-radio")],n);const q={title:"Components/Radio",component:"gds-radio",tags:["autodocs"]},f={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},o={...f,name:"radio"},e={...f,name:"States",render:()=>S`
    <gds-flex>
      <gds-radio></gds-radio>
    </gds-flex>
  `};var l,p,m,v,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'radio'
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"TODO: Add documentation",...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var b,u,h,x,y;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'States',
  render: () => html\`
    <gds-flex>
      <gds-radio></gds-radio>
    </gds-flex>
  \`
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};const F=["RadioButton","States"];export{o as RadioButton,e as States,F as __namedExportsOrder,q as default};
