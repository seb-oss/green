import{t as R,_ as P,g as q,G as X,h as v}from"./chunk.KHSHF2GF-2661f28c.js";import{i as E,x as s}from"./lit-element-2a5e401f.js";import"./chunk.FBVBLWMJ-ae732c79.js";import{n as T}from"./Reflect-a49e984a.js";import"./unsafe-html-5de64254.js";import"./directive-12249aa5.js";import"./_commonjsHelpers-725317a4.js";var U=E`
  :host {
    display: block;
  }

  // * {
  //   margin: 0;
  //   padding: 0;
  // }
`,M=U,c=class extends X{constructor(){super(...arguments),this.tag="p"}render(){return v`<${this.tag}><slot></slot></${this.tag}>`}};c.styles=[R,M];P([T({type:String})],c.prototype,"tag",2);c=P([q("gds-text")],c);const J={title:"Components/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card`\n\n## Usage"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{}},d={...n,name:"Basic Card",render:a=>s` <gds-card shadow="s{xs} m{xs} l{s}" radius="m">
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
    </gds-card>`},r={...n,name:"Border Style",render:a=>s` <gds-card> Border Style </gds-card>`},e={...n,name:"Border Radius",render:a=>s` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>`},t={...n,name:"Shadow",render:a=>s`<gds-grid columns="5" gap="xl">
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
    </gds-grid>`},o={...n,name:"Background",render:a=>s` <gds-card background="grey-70"> Background </gds-card>`},i={...n,name:"Using with Grid",render:a=>s` <gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <h2>Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
            <gds-text tag="h3">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
    </gds-grid>`};var g,l,m,u,p;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(m=(l=d.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Card",...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var x,f,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-card> Border Style </gds-card>\`
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,w,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>\`
}`,...(S=(w=e.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,C,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var j,k,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\` <gds-card background="grey-70"> Background </gds-card>\`
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var L,_,G;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
            <h2>Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
            <gds-text tag="h3">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
}`,...(G=(_=i.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const K=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{d as Card,o as CardBackground,r as CardBorder,i as CardGrid,e as CardRadius,t as Cardshadow,K as __namedExportsOrder,J as default};
