import"./divider-C2Vxtxzs.js";import"./flex-CeHsI46D.js";import"./card-CyBW9Aqp.js";import{x as s}from"./lit-element-C_s9q329.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BMleC81K.js";import"./style-expression-property-CYg4CGI6.js";import"./container-BI44UIf-.js";const _={title:"Components/Divider",component:"gds-divider",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-divider\`

The divider component is used to separate content in a meaningful way.

The divider can be customized with different properties like color and size.

@status beta`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...t,name:"Divider",render:n=>s` <gds-divider color="primary" size="2xl"></gds-divider>`},d={...t,name:"Color",render:n=>s` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Primary</gds-text>
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Secondary</gds-text>
          <gds-divider color="secondary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Tertiary</gds-text>
          <gds-divider color="tertiary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Quarternary</gds-text>
          <gds-divider color="quarternary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Inversed</gds-text>
          <gds-divider color="inversed" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},e={...t,name:"Size",render:n=>s` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 2xl</gds-text>
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 4xl</gds-text>
          <gds-divider color="secondary" size="4xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Size: 6xl</gds-text>
          <gds-divider color="tertiary" size="6xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},r={...t,name:"Opacity",render:n=>s` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.6</gds-text>
          <gds-divider color="primary" size="2xl" opacity="0.6"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.3</gds-text>
          <gds-divider color="secondary" size="4xl" opacity="0.4"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.2</gds-text>
          <gds-divider color="tertiary" size="6xl" opacity="0.2"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`};var o,a,g;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Divider',
  render: args => html\` <gds-divider color="primary" size="2xl"></gds-divider>\`
}`,...(g=(a=i.parameters)==null?void 0:a.docs)==null?void 0:g.source}}};var l,c,x,m,f;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Primary</gds-text>
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Secondary</gds-text>
          <gds-divider color="secondary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Tertiary</gds-text>
          <gds-divider color="tertiary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Quarternary</gds-text>
          <gds-divider color="quarternary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Inversed</gds-text>
          <gds-divider color="inversed" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(x=(c=d.parameters)==null?void 0:c.docs)==null?void 0:x.source},description:{story:`The \`gds-divider\` with different colors
The default level on the divider is 2 and based on the level it accepts all border colors of that level colors can be found here:[Color System documentation page](./?path=/docs/style-colors--docs)

Example:

\`\`\`html
<gds-divider color="primary"></gds-divider>
<gds-divider color="secondary"></gds-divider>
<gds-divider color="inversed"></gds-divider>
\`\`\`

The above example will apply the color style of 'primary'.`,...(f=(m=d.parameters)==null?void 0:m.docs)==null?void 0:f.description}}};var p,v,y,u,z;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 2xl</gds-text>
          <gds-divider color="primary" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Size: 4xl</gds-text>
          <gds-divider color="secondary" size="4xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Size: 6xl</gds-text>
          <gds-divider color="tertiary" size="6xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`The \`gds-divider\` with different sizes

Example:

\`\`\`html
<gds-divider size="xl"></gds-divider>
<gds-divider size="2xl"></gds-divider>
<gds-divider size="4xl"></gds-divider>
<gds-divider size="6xl"></gds-divider>
\`\`\`

It accepts all the [size tokens from the design system](?path=/docs/style-size--docs).

> The size property doesn't affect the size of the border itself but the space around the divider.`,...(z=(u=e.parameters)==null?void 0:u.docs)==null?void 0:z.description}}};var h,S,O,D,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Opacity',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.6</gds-text>
          <gds-divider color="primary" size="2xl" opacity="0.6"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.3</gds-text>
          <gds-divider color="secondary" size="4xl" opacity="0.4"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Opacity: 0.2</gds-text>
          <gds-divider color="tertiary" size="6xl" opacity="0.2"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(O=(S=r.parameters)==null?void 0:S.docs)==null?void 0:O.source},description:{story:`In addition to the color and size properties, the divider component also supports the opacity property.

Example:

\`\`\`html
<gds-divider opacity="0.2"></gds-divider>
<gds-divider opacity="0.4"></gds-divider>
<gds-divider opacity="0.6"></gds-divider>
<gds-divider opacity="0.8"></gds-divider>
\`\`\``,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};const j=["Divider","Color","Size","Opacity"];export{d as Color,i as Divider,r as Opacity,e as Size,j as __namedExportsOrder,_ as default};
