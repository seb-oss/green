import{x as a}from"./iframe-Ckb5JYy8.js";import"./input-DwP0X9yO.js";import"./badge-BE3E5Ofg.js";import"./flex-C2S1XgmO.js";import"./divider-Dg8eIlra.js";import"./credit-card-CaHG6xo6.js";import"./magnifying-glass-hQq0nbmz.js";import"./people-profile-mXADdcb0.js";import{a as r}from"./argTableProps-MFub6R6M.js";import"./input.component-Crpiipdz.js";import"./localized-decorator-BKTLIKfh.js";import"./query-async-BurFEgP8.js";import"./form-control-host.style-endqD0Oj.js";import"./form-control-header.component-D8ZpFBPV.js";import"./badge.component-CUqc9JKw.js";import"./flex.component-bq63keLP.js";import"./triangle-exclamation.component-BdyI1rwo.js";import"./icon.component-4t6GFlNj.js";import"./card.component-y7GisDGl.js";import"./cross-small.component-sli8Z06C.js";import"./textarea.component-OFRKAqg-.js";import"./resize-observer-B9k8v2TZ.js";import"./divider.component-Bj_V2Es_.js";import"./credit-card.component-DrG1JQrm.js";import"./magnifying-glass.component-BiZxx1gz.js";import"./people-profile.component-CLZ6C9JO.js";const q={title:"Components/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:"An input lets users enter and edit text or numerical values in forms."}}},tags:["autodocs"],argTypes:{...r("gds-input"),value:{control:"text"},variant:{options:["default"],control:{type:"select"}},size:{options:["large","small"],control:{type:"select"}},invalid:{control:"boolean"}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label",variant:"default",size:"large",supportingText:"Label support text.",innerHTML:'<gds-icon-people-profile slot="lead"></gds-icon-people-profile>'}},I={...t,name:"Default"},$={...t,name:"Size",render:()=>a`
    <gds-flex width="800px" gap="4xl" align-items="flex-start">
      <gds-input label="Lead Icon" size="small">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Lead Icon"
        supporting-text="Example support text"
        size="small"
        clearable
        .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Required field."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},A={...t,name:"Slot: Lead",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  `},V={...t,name:"Slot: Trail",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="10,000.00"
        clearable
      >
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-input>
    </gds-flex>
  `},B={...t,name:"Length",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-input>
    </gds-flex>
  `},P={...t,name:"Clearable",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  `},U={...t,name:"Supporting Text",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  `},_={...t,name:"Extended Supporting Text",render:()=>a`
    <gds-flex gap="xl" width="800px">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},F={...t,name:"Validation",render:()=>a`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
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
          value="Incorrect value"
          clearable
          .invalid=${!0}
          error-message="This displays if the input is invalid."
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"This displays if the input doesn`t have any value."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long. "]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `},H={...t,name:"Standard Attributes",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        min="0"
        max="100"
        step="5"
        type="number"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  `},M={...t,name:"Disabled",render:()=>a`
    <gds-flex gap="xl">
      <gds-input label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `},O={...t,name:"Custom counter badge",render:()=>a`
      <gds-input
        label="Label"
        maxlength="100"
        .charCounterCallback=${e=>{let i="positive";if(e.value)switch(e.value.length%5){case 0:i="positive";break;case 1:i="negative";break;case 2:i="notice";break;case 3:i="warning";break;case 4:i="information";break}return[e.value.length,i]}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `},R=["Default","Size","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","Disabled","CustomCounterBadge"];export{P as Clearable,O as CustomCounterBadge,I as Default,M as Disabled,_ as ExtendedSupportingText,A as Lead,B as Length,$ as Size,H as StandardAttributes,U as SupportingText,V as Trail,F as Validation,R as __namedExportsOrder,q as default};
