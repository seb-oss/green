import{x as o}from"./iframe-44dIHiuC.js";import{a as m}from"./argTableProps-CvY6TmsS.js";import{d as n}from"./formatted-date.component-D0uMkJ7Q.js";import"./formatted-date-JpW89SDx.js";import"./flex-DcPQaU2n.js";import"./divider-nvgldCRw.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-AHT8vgMW.js";import"./text-CkiBHEyb.js";import"./default-typography.styles-DvmCignJ.js";import"./flex.component-DBlH9lIG.js";import"./divider.component-BcQJxoYd.js";const D={title:"Components/Formatted text/Date and time",component:"gds-formatted-date",tags:["autodocs"],argTypes:{...m("gds-formatted-date")},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/date)\n\n`gds-formatted-date` extends `gds-text` and formats the date to the desired format.\n\n@beta"}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:new Date(2025,1,25,14,17,30)}},c=Object.keys(n).map(e=>{const t=e.replace(/([a-z])([A-Z])/g,"$1 $2");return{name:t.charAt(0).toUpperCase()+t.slice(1),value:e}}),a={...l,name:"Formats",render:e=>o`<gds-flex flex-direction="column" gap="m">
      ${c.map(t=>o`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${t.name}:</gds-text>
              <gds-flex gap="m" flex-direction="column">
                <gds-formatted-date
                  .value=${e.value}
                  .locale=${e.locale}
                  .format=${t.value}
                ></gds-formatted-date>
                <gds-formatted-date
                  .locale=${e.locale}
                  .format=${t.value}
                >
                  ${e.value}
                </gds-formatted-date>
              </gds-flex>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var r,d,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Formats',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${formats.map(format => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${format.name}:</gds-text>
              <gds-flex gap="m" flex-direction="column">
                <gds-formatted-date
                  .value=\${args.value}
                  .locale=\${args.locale}
                  .format=\${format.value}
                ></gds-formatted-date>
                <gds-formatted-date
                  .locale=\${args.locale}
                  .format=\${format.value}
                >
                  \${args.value}
                </gds-formatted-date>
              </gds-flex>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const j=["Formats"];export{a as Formats,j as __namedExportsOrder,D as default};
