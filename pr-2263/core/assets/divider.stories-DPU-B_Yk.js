import"./divider-B6dJhqny.js";import"./flex-DwjGT5wG.js";import"./card-CG3L3yHc.js";import{x as d}from"./lit-element-Bx14lxc-.js";import{a as B}from"./argTableProps-BMxYqZd3.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-C9n1Y52h.js";import"./declarative-layout-mixins-Bw_LIblW.js";import"./flex.component-CAtj-g7K.js";import"./div.component-BCJhG5xx.js";import"./card.component-Bb9UhwqR.js";import"./custom-elements-IIMYxOac.js";const Y={title:"Components/Divider",component:"gds-divider",tags:["autodocs"],argTypes:{...B("gds-divider")},parameters:{docs:{description:{component:`Divider creates visual and semantic separation between content.

Add \`role="presentation"\` to the divider if you only want a visual separation.

The divider can be customized with different properties like color and size.

@status beta

> Divider should not be used as a border for a container. In that case, use the border property of the container instead.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},g={...e,name:"Divider",render:s=>d` <gds-divider color="" size="2xl"></gds-divider>`},r={...e,name:"Color",render:s=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>interactive</gds-text>
          <gds-divider color="interactive" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>subtle-01</gds-text>
          <gds-divider color="subtle-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>subtle-02</gds-text>
          <gds-divider color="subtle-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>strong</gds-text>
          <gds-divider color="strong" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>inverse</gds-text>
          <gds-divider color="inverse" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>information-01</gds-text>
          <gds-divider color="information-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>information-02</gds-text>
          <gds-divider color="information-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>positive-01</gds-text>
          <gds-divider color="positive-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>

      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>positive-02</gds-text>
          <gds-divider color="positive-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>negative-01</gds-text>
          <gds-divider color="negative-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>negative-02</gds-text>
          <gds-divider color="negative-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>warning-01</gds-text>
          <gds-divider color="warning-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>warning-02</gds-text>
          <gds-divider color="warning-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>notice-01</gds-text>
          <gds-divider color="notice-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>notice-02</gds-text>
          <gds-divider color="notice-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},i={...e,name:"Color Custom",render:s=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #fc0</gds-text>
          <gds-divider colorfc0" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #2561ad</gds-text>
          <gds-divider color2561ad" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},t={...e,name:"Color Alpha",render:s=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>
            Token with alpha: <br />
            <code>primary/0.4</code>
          </gds-text>
          <gds-divider color="/0.4" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>
            Custom color with alpha: <br />
            <code>#2561ad/0.2</code>
          </gds-text>
          <gds-divider color2561ad/0.2" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},n={...e,name:"Opacity",render:s=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.6</gds-text>
          <gds-divider color="" size="2xl" opacity="0.6"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.3</gds-text>
          <gds-divider color="" size="4xl" opacity="0.4"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.2</gds-text>
          <gds-divider color="" size="6xl" opacity="0.2"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},o={...e,name:"Size",render:s=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 2xl</gds-text>
          <gds-divider color="" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 4xl</gds-text>
          <gds-divider color="" size="4xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Size: 6xl</gds-text>
          <gds-divider color="" size="6xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`};var l,a,c;g.parameters={...g.parameters,docs:{...(l=g.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Divider',
  render: args => html\` <gds-divider color="" size="2xl"></gds-divider>\`
}`,...(c=(a=g.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var x,f,v,m,p;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>interactive</gds-text>
          <gds-divider color="interactive" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>subtle-01</gds-text>
          <gds-divider color="subtle-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>subtle-02</gds-text>
          <gds-divider color="subtle-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>strong</gds-text>
          <gds-divider color="strong" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>inverse</gds-text>
          <gds-divider color="inverse" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>information-01</gds-text>
          <gds-divider color="information-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>information-02</gds-text>
          <gds-divider color="information-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>positive-01</gds-text>
          <gds-divider color="positive-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>

      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>positive-02</gds-text>
          <gds-divider color="positive-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>negative-01</gds-text>
          <gds-divider color="negative-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>negative-02</gds-text>
          <gds-divider color="negative-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>warning-01</gds-text>
          <gds-divider color="warning-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>warning-02</gds-text>
          <gds-divider color="warning-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>notice-01</gds-text>
          <gds-divider color="notice-01" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>notice-02</gds-text>
          <gds-divider color="notice-02" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`The \`gds-divider\` with different colors
The default level on the divider is 2 and based on the level it accepts all border colors of that level colors can be found here:[Color System documentation page](./?path=/docs/style-colors--docs)

Example:

\`\`\`html
<gds-divider color=""></gds-divider>
<gds-divider color=""></gds-divider>
<gds-divider color=""></gds-divider>
\`\`\`

The above example will apply the color style of 'primary'.`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var u,y,z,h,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color Custom',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #fc0</gds-text>
          <gds-divider colorfc0" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #2561ad</gds-text>
          <gds-divider color2561ad" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source},description:{story:`Custom color
In addition to color tokens you can still use custom colors in cases when you need to use a color that is not part of the design system.

Example:

\`\`\`html
<gds-divider colorfc0"></gds-divider>
\`\`\``,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var C,w,S,D,O;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color Alpha',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>
            Token with alpha: <br />
            <code>primary/0.4</code>
          </gds-text>
          <gds-divider color="/0.4" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>
            Custom color with alpha: <br />
            <code>#2561ad/0.2</code>
          </gds-text>
          <gds-divider color2561ad/0.2" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:`Color property acceps alpha values
It can be used with variable colors from the design system or custom colors.

Example:
\`\`\`html
<gds-divider color2561ad/0.2"></gds-divider>
<gds-divider color="/0.2"></gds-divider>
\`\`\`

The alpha value should be between 0 and 1.`,...(O=(D=t.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var T,P,E,k,A;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Opacity',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.6</gds-text>
          <gds-divider color="" size="2xl" opacity="0.6"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.3</gds-text>
          <gds-divider color="" size="4xl" opacity="0.4"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.2</gds-text>
          <gds-divider color="" size="6xl" opacity="0.2"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(E=(P=n.parameters)==null?void 0:P.docs)==null?void 0:E.source},description:{story:`In addition to the color and size properties, the divider component also supports the opacity property.

Example:

\`\`\`html
<gds-divider opacity="0.2"></gds-divider>
<gds-divider opacity="0.4"></gds-divider>
<gds-divider opacity="0.6"></gds-divider>
<gds-divider opacity="0.8"></gds-divider>
\`\`\``,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var I,_,F,j,q;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 2xl</gds-text>
          <gds-divider color="" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 4xl</gds-text>
          <gds-divider color="" size="4xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Size: 6xl</gds-text>
          <gds-divider color="" size="6xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:`The \`gds-divider\` with different sizes

Example:

\`\`\`html
<gds-divider size="xl"></gds-divider>
<gds-divider size="2xl"></gds-divider>
<gds-divider size="4xl"></gds-divider>
<gds-divider size="6xl"></gds-divider>
\`\`\`

It accepts all the [size tokens from the design system](?path=/docs/style-size--docs).

> The size property doesn't affect the size of the border itself but the space around the divider.`,...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};const Z=["Divider","Color","Custom","Alpha","Opacity","Size"];export{t as Alpha,r as Color,i as Custom,g as Divider,n as Opacity,o as Size,Z as __namedExportsOrder,Y as default};
