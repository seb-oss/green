import{h as o}from"./gds-element-KHa0AloG.js";import"./fab-CvZzQTbb.js";import"./container-BISXvVcW.js";import"./text-DGRRKeHm.js";import"./link-X-DqfiRz.js";import"./flex-D2RuIok0.js";import"./card-d-tVEDXR.js";import"./chevron-bottom-nReyNZwA.js";import"./bubbles-DOj828V4.js";import"./signal-HlbzATlS.js";import{a as V}from"./argTableProps-CggtMW79.js";import{DefaultParams as Z}from"./button.stories-kHMjRBF8.js";import"./lit-element-Bx14lxc-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./button-nPQff-yp.js";import"./button.component-BHtocGTN.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./tokens.style-DC2Hb-2P.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./container.component-5payei9M.js";import"./div.component-BLZX0vzk.js";import"./link.component-BOosuDLZ.js";import"./flex.component-BLop41Mq.js";import"./card.component-C21NCPsO.js";import"./chevron-bottom.component-Bl66O3uM.js";import"./icon-BDCl8D0g.js";import"./bubbles.component-nfbk1GVc.js";import"./signal.component-DKLJEmBU.js";import"./custom-elements-g8oVjdDQ.js";import"./grid-CZzYB-2R.js";import"./grid.component-CMvlGJH5.js";import"./divider-B-sTOuRv.js";import"./credit-card-Yv4l_i-5.js";import"./credit-card.component-F9Erk7_0.js";import"./arrow-left-CIQmgh67.js";import"./arrow-left.component-CNppuohn.js";import"./arrow-up.component-DDniT4p1.js";import"./chevron-top-CPNq0qjV.js";import"./chevron-top.component-CRDt6POg.js";import"./arrow-down-BxC_Jbi1.js";import"./arrow-down.component-Cdct0ROP.js";import"./arrow-right-MOARc96x.js";import"./arrow-right.component-CpOSap99.js";const Ua={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],argTypes:{...V("gds-fab")},parameters:{docs:{description:{component:`Floating action button persists across screens for constant access to features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},a={...Z,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px",position:"relative"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},d={...a},s={...a,name:"Signal ",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},e={...a,name:"Icon Button",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  `},t={...a,name:"Color",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="primary">
        Secondary
        <gds-signal slot="trail" level="3" color="positive"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},n={...a,name:"Position",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  `},i={...a,name:"z-index",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex
      height="400px"
      flex-direction="column"
      gap="4xl"
      padding="0"
      overflow="hidden scroll"
      border-radius="s"
    >
      <gds-fab inset="auto 40px 40px auto"> Show above other things </gds-fab>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  `};var g,l,p;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,u,m,b,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal ',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:`The FAB can be used with a signal to indicate that there is something new or updated.

Signal style matches the button rank and variant.`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var f,h,v,y,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon Button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  \`
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"The FAB can be used with all the `gds-button` properties.",...(k=(y=e.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var P,S,w,T,z;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="primary">
        Secondary
        <gds-signal slot="trail" level="3" color="positive"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Default color of the signal within the FAB is the same as the button color.\n\nIf you want to change the color of the signal, you can use the `color` property.",...(z=(T=t.parameters)==null?void 0:T.docs)==null?void 0:z.description}}};var A,B,D,F,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Position',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  \`
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:`You can position the FAB using the \`inset\` property.
It takes all the default CSS inset values.

e.g

\`\`\`html
<gds-fab inset="auto 48px 48px auto">
   I'm a FAB
</gds-fab>
\`\`\`

And also the \`position\` property can be set to use any valid CSS position values.

e.g

\`\`\`html
<gds-fab position="absolute">
   Absolute Position
</gds-fab>
\`\`\``,...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.description}}};var I,L,q,R,U;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'z-index',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex
      height="400px"
      flex-direction="column"
      gap="4xl"
      padding="0"
      overflow="hidden scroll"
      border-radius="s"
    >
      <gds-fab inset="auto 40px 40px auto"> Show above other things </gds-fab>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  \`
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source},description:{story:`The z order of the FAB is set by default to \`1050\`.

This is recommended to keep the FAB above other elements.

If you want to change the z-index, that should be done in the CSS or wrap FAB in a container with a higher z-index value.`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const Va=["Usage","RanksAndVariants","IconButton","Color","Position","ZIndex"];export{t as Color,e as IconButton,n as Position,s as RanksAndVariants,d as Usage,i as ZIndex,Va as __namedExportsOrder,Ua as default};
