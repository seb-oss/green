import{t as v,_ as l,s as T,g as E,G as R,h as X}from"./chunk.YZC2ST4R-c9932251.js";import{i as $,x as d}from"./lit-element-2a5e401f.js";import"./chunk.FBVBLWMJ-cb9b6047.js";import{n as U}from"./Reflect-a49e984a.js";import"./unsafe-html-5de64254.js";import"./directive-12249aa5.js";import"./_commonjsHelpers-725317a4.js";var M=$`
  :host {
    display: block;

    & > * {
      margin: unset;
      font-weight: normal;
      font-size: inherit;
      line-height: inherit;
    }
  }
`,O=M,n=class extends R{constructor(){super(...arguments),this.tag="p"}createTag(){const s=document.createElement(this.tag);return s.appendChild(document.createElement("slot")),s}render(){return X`${this.createTag()}`}};n.styles=[v,O];l([U({type:String})],n.prototype,"tag",2);l([T({valueTemplate:s=>`${s}`,styleTemplate:(s,q)=>{const c=q[0];return`font-size: var(--gds-sys-typography-size-${c}); line-height: var(--gds-sys-typography-line-height-${c});`}})],n.prototype,"size",2);l([T()],n.prototype,"margin",2);n=l([E("gds-text")],n);const Q={title:"Components/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card`\n\n## Usage"}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{}},e={...a,name:"Basic Card",render:s=>d` <gds-card shadow="s{xs} m{xs} l{s}" radius="m">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>`},r={...a,name:"Border Style",render:s=>d` <gds-card> Border Style </gds-card>`},t={...a,name:"Border Radius",render:s=>d` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>`},o={...a,name:"Shadow",render:s=>d`<gds-grid columns="5" gap="xl">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>`},i={...a,name:"Background",render:s=>d` <gds-card background="grey-70"> Background </gds-card>`},g={...a,name:"Using with Grid",render:s=>d` <gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            Some other column
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`};var m,u,p,x,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Basic Card',
  render: args => html\` <gds-card shadow="s{xs} m{xs} l{s}" radius="m">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>\`
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"Card",...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var y,f,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-card> Border Style </gds-card>\`
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,S,B;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>\`
}`,...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var b,j,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="xl">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>\`
}`,...(z=(j=o.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var k,L,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\` <gds-card background="grey-70"> Background </gds-card>\`
}`,...(D=(L=i.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var P,_,G;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            Some other column
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const V=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{e as Card,i as CardBackground,r as CardBorder,g as CardGrid,t as CardRadius,o as Cardshadow,V as __namedExportsOrder,Q as default};
