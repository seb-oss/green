import{x as d,b as k}from"./lit-element-52f3de9a.js";import"./button-072279fe.js";import"./grid-ace174c8.js";import{g as X}from"./gds-element-d19a6729.js";import{G as Y}from"./icon-543da64a.js";import"./arrow-right-4f72b673.js";import"./static-e2b5d7a8.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-cb90e8d6.js";import"./class-map-531a0fa6.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-ec463408.js";import"./tokens.style-4c028ad8.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./style-expression-property-7d970320.js";import"./_commonjsHelpers-725317a4.js";var tt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,rt=(t,a,o,e)=>{for(var n=e>1?void 0:e?nt(a,o):a,s=t.length-1,i;s>=0;s--)(i=t[s])&&(n=(e?i(a,o,n):i(n))||n);return e&&n&&tt(a,o,n),n};let v=class extends Y{};v._regularSVG='<path d="M4 15L12 7L20 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';v._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967L20.5303 14.4697C20.8232 14.7626 20.8232 15.2374 20.5303 15.5303C20.2374 15.8232 19.7626 15.8232 19.4697 15.5303L12 8.06066L4.53033 15.5303C4.23744 15.8232 3.76256 15.8232 3.46967 15.5303C3.17678 15.2374 3.17678 14.7626 3.46967 14.4697L11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25Z" fill="currentColor"/>';v._name="chevron top";v=rt([X("gds-icon-chevron-top")],v);var at=Object.defineProperty,et=Object.getOwnPropertyDescriptor,ot=(t,a,o,e)=>{for(var n=e>1?void 0:e?et(a,o):a,s=t.length-1,i;s>=0;s--)(i=t[s])&&(n=(e?i(a,o,n):i(n))||n);return e&&n&&at(a,o,n),n};let b=class extends Y{};b._regularSVG='<path d="M5.75 10L12 3.75L18.25 10M12 20.25V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';b._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.3315 3 12.6494 3.1317 12.8839 3.36612L18.6339 9.11612C19.122 9.60427 19.122 10.3957 18.6339 10.8839C18.1457 11.372 17.3543 11.372 16.8661 10.8839L13.25 7.26776V19.75C13.25 20.4404 12.6903 21 12 21C11.3096 21 10.75 20.4404 10.75 19.75V7.26777L7.13388 10.8839C6.64573 11.372 5.85427 11.372 5.36612 10.8839C4.87796 10.3957 4.87796 9.60427 5.36612 9.11612L11.1161 3.36612C11.3505 3.1317 11.6685 3 12 3Z" fill="currentColor"/>';b._name="arrow up";b=ot([X("gds-icon-arrow-up")],b);const Ct={title:"Docs/Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
a choice with a simple click or tap. To decide which kind of button/buttons and putting
them in the right order is key to make sure users know how to take the right action.
A good rule of thumb is to use only one primary action in each context.`}}},tags:["autodocs"]},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}},args:{innerText:"Button"}},h={...r},u={...r,name:"Ranks and variants",parameters:{...r.parameters,controls:{include:[]}},render:t=>d`
    <gds-grid columns="3" gap="m" row-gap="m">
      <div>
        <gds-button>Neutral primary</gds-button>
      </div>
      <div>
        <gds-button rank="secondary">Neutral secondary</gds-button>
      </div>
      <div>
        <gds-button rank="tertiary">Neutral tertiary</gds-button>
      </div>
      <div>
        <gds-button variant="positive">Positive primary</gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="secondary">
          Positive secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="tertiary">
          Positive tertiary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative">Negative primary</gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="secondary">
          Negative secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="tertiary">
          Negative tertiary
        </gds-button>
      </div>
    </gds-grid>
  `},c={...r,parameters:{...r.parameters,controls:{include:["rank","variant"]}},render:t=>d`
    <gds-button .rank=${t.rank} .variant=${t.variant} size="small"
      >Small</gds-button
    >
    <gds-button .rank=${t.rank} .variant=${t.variant}>Medium</gds-button>
    <gds-button .rank=${t.rank} .variant=${t.variant} size="large"
      >Large</gds-button
    >
  `},l={...r,name:"Using icons in button",parameters:{...r.parameters,controls:{include:["rank","variant","size"]}},render:t=>d`
    <gds-button .rank=${t.rank} .variant=${t.variant} .size=${t.size}>
      <gds-icon-arrow-down slot="lead"></gds-icon-arrow-down>
      Leading icon
    </gds-button>

    <gds-button .rank=${t.rank} .variant=${t.variant} .size=${t.size}>
      Trailing icon
      <gds-icon-arrow-up slot="trail"></gds-icon-arrow-up>
    </gds-button>
  `},g={...r,name:"Icon button",parameters:{...r.parameters,controls:{include:["rank","variant"]}},render:t=>d`
    <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${t.rank} .variant=${t.variant}>
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
      <gds-icon-arrow-right />
    </gds-button>
  `},p={...r,parameters:{...r.parameters,controls:{include:[]}},render:()=>d`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>`},m={...r,parameters:{...r.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/sebgroup/green"},render:t=>d`
    <gds-button
      href=${t.href}
      target=${t.target||k}
      rel=${t.rel||k}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:k}
    >
      Link
    </gds-button>
  `};var y,f,w;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(w=(f=h.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var $,P,_,C,z;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ranks and variants',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-grid columns="3" gap="m" row-gap="m">
      <div>
        <gds-button>Neutral primary</gds-button>
      </div>
      <div>
        <gds-button rank="secondary">Neutral secondary</gds-button>
      </div>
      <div>
        <gds-button rank="tertiary">Neutral tertiary</gds-button>
      </div>
      <div>
        <gds-button variant="positive">Positive primary</gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="secondary">
          Positive secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="tertiary">
          Positive tertiary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative">Negative primary</gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="secondary">
          Negative secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="tertiary">
          Negative tertiary
        </gds-button>
      </div>
    </gds-grid>
  \`
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...(z=(C=u.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var D,L,S,T,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small"
      >Small</gds-button
    >
    <gds-button .rank=\${args.rank} .variant=\${args.variant}>Medium</gds-button>
    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large"
      >Large</gds-button
    >
  \`
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};var x,I,O,B,V;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using icons in button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant', 'size']
    }
  },
  render: args => html\`
    <gds-button .rank=\${args.rank} .variant=\${args.variant} .size=\${args.size}>
      <gds-icon-arrow-down slot="lead"></gds-icon-arrow-down>
      Leading icon
    </gds-button>

    <gds-button .rank=\${args.rank} .variant=\${args.variant} .size=\${args.size}>
      Trailing icon
      <gds-icon-arrow-up slot="trail"></gds-icon-arrow-up>
    </gds-button>
  \`
}`,...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.description}}};var M,j,A,G,R;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=\${args.rank} .variant=\${args.variant}>
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
      <gds-icon-arrow-right />
    </gds-button>
  \`
}`,...(A=(j=g.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(R=(G=g.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var U,E,W,Z,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>\`
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(q=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:q.description}}};var F,H,J,K,Q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['href', 'target', 'rel', 'download']
    }
  },
  args: {
    href: 'https://github.com/sebgroup/green'
  },
  render: args => html\`
    <gds-button
      href=\${args.href}
      target=\${args.target || nothing}
      rel=\${args.rel || nothing}
      download=\${args?.hasOwnProperty('download') ? args.download : nothing}
    >
      Link
    </gds-button>
  \`
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"A link styled as a button.",...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const zt=["Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link"];export{h as Basic,p as Disabled,g as IconButton,m as Link,u as RanksAndVariants,c as Sizes,l as WithIcon,zt as __namedExportsOrder,Ct as default};
