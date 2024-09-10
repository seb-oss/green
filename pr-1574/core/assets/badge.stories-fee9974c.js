import{i as _,r as L,x as l}from"./lit-element-2a5e401f.js";import{n as T}from"./static-50b4adfb.js";import{g as B,G as D}from"./gds-element-90c5f05b.js";import{t as O}from"./tokens.style-681e2422.js";import{s as P}from"./style-expression-property-5a4dd319.js";import"./grid-2b10b91a.js";import"./flex-f3c1e8c5.js";import"./divider-4aecce78.js";import"./arrow-rotate-counter-clockwise-38e03960.js";import"./triangle-exclamation-cb4a0a22.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./container-45eca99d.js";import"./icon-f5e30329.js";import"./directive-12249aa5.js";const V=_`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      background-color: var(--gds-color-l2c-background-information);
      padding-inline: var(--gds-space-xs);
      border-radius: var(--gds-space-2xs);
      block-size: var(--gds-space-l);
      gap: var(--gds-space-2xs);
      inline-size: max-content;
    }
  }
`;var $=Object.defineProperty,z=Object.getOwnPropertyDescriptor,E=(e,a,n,d)=>{for(var s=d>1?void 0:d?z(a,n):a,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(d?o(a,n,s):o(s))||s);return d&&s&&$(a,n,s),s};let g=class extends D{render(){return T`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`}};g.styles=[O,L(V)];E([P({valueTemplate:e=>`${e}`,selector:".badge",styleTemplate:(e,a)=>{const n=a[0],s={information:{bg:"information",color:"information"},notice:{bg:"notice",color:"notice"},success:{bg:"positive",color:"positive"},warning:{bg:"warning",color:"warning"},error:{bg:"negative",color:"negative"}}[n]||{bg:"default-bg",color:"default-content"},r=`background-color: var(--gds-color-l3c-background-${s.bg}-secondary);`,o=`color: var(--gds-color-l3c-content-${s.color});`;return`${r} ${o}`}})],g.prototype,"variant",2);g=E([B("gds-badge")],g);const Y={title:"Docs/Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:"A badge is a small status or notification indicator that can be used to display a message or status.\n\nVariants: `information`, `notice`, `success`, `warning`, `error`"}}},tags:["autodocs"]},c={name:"Variants",parameters:{controls:{include:[]}},render:e=>l`
    <gds-grid columns="2" gap="2xl">
      <gds-flex gap="xl" direction="column" width="20ch">
        <gds-flex direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information">
          <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
          Information
        </gds-badge>
        <gds-badge variant="notice">
          <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
          Notice
        </gds-badge>
        <gds-badge variant="success">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="warning">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="error">
          <gds-icon-triangle-exclamation slot="lead">
          </gds-icon-triangle-exclamation>
          Error
        </gds-badge>
      </gds-flex>
      <gds-flex gap="xl" direction="column" width="20ch">
        <gds-flex direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="success"> Success </gds-badge>
        <gds-badge variant="warning"> Success </gds-badge>
        <gds-badge variant="error"> Error </gds-badge>
      </gds-flex>
    </gds-grid>
  `},t={name:"Lead",parameters:{controls:{include:[]}},render:e=>l`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `},i={name:"Trail",parameters:{controls:{include:[]}},render:e=>l`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="error">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  `};var m,p,b;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Variants',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-grid columns="2" gap="2xl">
      <gds-flex gap="xl" direction="column" width="20ch">
        <gds-flex direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information">
          <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
          Information
        </gds-badge>
        <gds-badge variant="notice">
          <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
          Notice
        </gds-badge>
        <gds-badge variant="success">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="warning">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="error">
          <gds-icon-triangle-exclamation slot="lead">
          </gds-icon-triangle-exclamation>
          Error
        </gds-badge>
      </gds-flex>
      <gds-flex gap="xl" direction="column" width="20ch">
        <gds-flex direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="success"> Success </gds-badge>
        <gds-badge variant="warning"> Success </gds-badge>
        <gds-badge variant="error"> Error </gds-badge>
      </gds-flex>
    </gds-grid>
  \`
}`,...(b=(p=c.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,f,v,x,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Lead',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  \`
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"`gds-badge` has a lead slot that can be used to add leading content to the badge like `gds-icon`.",...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var w,y,k,S,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Trail',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="error">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  \`
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"`gds-badge` has a trail slot that can be used to add additional content to the badge.",...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.description}}};const Z=["Variants","Lead","Trail"];export{t as Lead,i as Trail,c as Variants,Z as __namedExportsOrder,Y as default};
