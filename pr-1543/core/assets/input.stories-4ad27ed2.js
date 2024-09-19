import{k as i}from"./lit-element-1d72f0ce.js";import"./input-d4460d07.js";import"./badge-a0cf8b63.js";import"./flex-0e931cf8.js";import"./divider-8a7306e0.js";import"./credit-card-aed5fef2.js";import"./magnifying-glass-0fce063b.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./button-62abad27.js";import"./static-c0094392.js";import"./if-defined-5f576255.js";import"./class-map-f04c1558.js";import"./transitional-styles-8ea9588a.js";import"./tokens.style-dc3ad24e.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./triangle-exclamation-da39395f.js";import"./container-b1fc3909.js";import"./style-expression-property-0e3d4d40.js";import"./card-21efe6d3.js";import"./text-fbd919b7.js";const U={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",textarea:!1}},t={...s,name:"All",render:()=>i`
    <gds-flex flex-direction="column" gap="2xl" width="800px">
      <gds-flex gap="xl">
        <gds-input
          value="test"
          label="Label"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input label="Label" disabled supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Search & Badge</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-input label="Label" supporting-text="Label support text" clearable>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="information" slot="trail">KR</gds-badge>
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          .invalid="${!0}"
          supporting-text="Label support text"
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-input>
        <gds-input
          label="Label"
          .invalid="${!0}"
          supporting-text="Label support text"
          value="Input"
        >
          <gds-badge variant="error" slot="trail">KR</gds-badge>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Textarea</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          textarea
        >
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          textarea
        >
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${!0}
          textarea
        >
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${!0}
          textarea
        >
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
          textarea
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
          textarea
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `};var d,l,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'All',
  render: () => html\`
    <gds-flex flex-direction="column" gap="2xl" width="800px">
      <gds-flex gap="xl">
        <gds-input
          value="test"
          label="Label"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input label="Label" disabled supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Search & Badge</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-input label="Label" supporting-text="Label support text" clearable>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="information" slot="trail">KR</gds-badge>
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          .invalid="\${true}"
          supporting-text="Label support text"
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-input>
        <gds-input
          label="Label"
          .invalid="\${true}"
          supporting-text="Label support text"
          value="Input"
        >
          <gds-badge variant="error" slot="trail">KR</gds-badge>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Textarea</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          textarea
        >
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          textarea
        >
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=\${true}
          textarea
        >
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=\${true}
          textarea
        >
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
          textarea
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
          textarea
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
      </gds-flex>
    </gds-flex>
  \`
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const _=["All"];export{t as All,_ as __namedExportsOrder,U as default};
