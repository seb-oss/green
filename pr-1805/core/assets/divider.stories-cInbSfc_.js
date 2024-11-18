import"./divider-DCEwWWSt.js";import"./flex-DnyPdIls.js";import"./card-DCBNK-aP.js";import{x as d}from"./lit-element-C_s9q329.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-D447YQ0G.js";import"./style-expression-property-CYg4CGI6.js";import"./container-Cse-xpk8.js";const R={title:"Components/Divider",component:"gds-divider",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-divider\`

The divider component is used to separate content in a meaningful way.

The divider can be customized with different properties like color and size.

@status beta

> Divider should not be used as a border for a container. In that case, use the border property of the container instead.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},a={...e,name:"Divider",render:r=>d` <gds-divider color="primary" size="2xl"></gds-divider>`},s={...e,name:"Color",render:r=>d` <gds-flex flex-direction="column" gap="xl">
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
    </gds-flex>`},i={...e,name:"Color Custom",render:r=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #fc0</gds-text>
          <gds-divider color="#fc0" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #2561ad</gds-text>
          <gds-divider color="#2561ad" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},t={...e,name:"Color Alpha",render:r=>d` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>
            Token with alpha: <br />
            <code>primary/0.4</code>
          </gds-text>
          <gds-divider color="primary/0.4" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>
            Custom color with alpha: <br />
            <code>#2561ad/0.2</code>
          </gds-text>
          <gds-divider color="#2561ad/0.2" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>`},o={...e,name:"Opacity",render:r=>d` <gds-flex flex-direction="column" gap="xl">
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
    </gds-flex>`},n={...e,name:"Size",render:r=>d` <gds-flex flex-direction="column" gap="xl">
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
    </gds-flex>`};var l,c,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Divider',
  render: args => html\` <gds-divider color="primary" size="2xl"></gds-divider>\`
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,m,f,p,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source},description:{story:`The \`gds-divider\` with different colors
The default level on the divider is 2 and based on the level it accepts all border colors of that level colors can be found here:[Color System documentation page](./?path=/docs/style-colors--docs)

Example:

\`\`\`html
<gds-divider color="primary"></gds-divider>
<gds-divider color="secondary"></gds-divider>
<gds-divider color="inversed"></gds-divider>
\`\`\`

The above example will apply the color style of 'primary'.`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.description}}};var u,y,h,z,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color Custom',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #fc0</gds-text>
          <gds-divider color="#fc0" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>Custom Color: #2561ad</gds-text>
          <gds-divider color="#2561ad" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:`Custom color
In addition to color tokens you can still use custom colors in cases when you need to use a color that is not part of the design system.

Example:

\`\`\`html
<gds-divider color="#fc0"></gds-divider>
\`\`\``,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};var b,S,D,T,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color Alpha',
  render: args => html\` <gds-flex flex-direction="column" gap="xl">
      <gds-card variant="tertiary">
        <gds-flex flex-direction="column">
          <gds-text>
            Token with alpha: <br />
            <code>primary/0.4</code>
          </gds-text>
          <gds-divider color="primary/0.4" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
      <gds-card>
        <gds-flex flex-direction="column">
          <gds-text>
            Custom color with alpha: <br />
            <code>#2561ad/0.2</code>
          </gds-text>
          <gds-divider color="#2561ad/0.2" size="2xl"></gds-divider>
        </gds-flex>
      </gds-card>
    </gds-flex>\`
}`,...(D=(S=t.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:`Color property acceps alpha values
It can be used with variable colors from the design system or custom colors.

Example:
\`\`\`html
<gds-divider color="#2561ad/0.2"></gds-divider>
<gds-divider color="primary/0.2"></gds-divider>
\`\`\`

The alpha value should be between 0 and 1.`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};var O,P,I,E,k;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:`In addition to the color and size properties, the divider component also supports the opacity property.

Example:

\`\`\`html
<gds-divider opacity="0.2"></gds-divider>
<gds-divider opacity="0.4"></gds-divider>
<gds-divider opacity="0.6"></gds-divider>
<gds-divider opacity="0.8"></gds-divider>
\`\`\``,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.description}}};var A,q,Q,_,j;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(Q=(q=n.parameters)==null?void 0:q.docs)==null?void 0:Q.source},description:{story:`The \`gds-divider\` with different sizes

Example:

\`\`\`html
<gds-divider size="xl"></gds-divider>
<gds-divider size="2xl"></gds-divider>
<gds-divider size="4xl"></gds-divider>
<gds-divider size="6xl"></gds-divider>
\`\`\`

It accepts all the [size tokens from the design system](?path=/docs/style-size--docs).

> The size property doesn't affect the size of the border itself but the space around the divider.`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};const U=["Divider","Color","Custom","Alpha","Opacity","Size"];export{t as Alpha,s as Color,i as Custom,a as Divider,o as Opacity,n as Size,U as __namedExportsOrder,R as default};
