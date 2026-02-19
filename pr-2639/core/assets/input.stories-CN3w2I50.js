import{x as a}from"./iframe-rcFkWJ69.js";import"./input-BkOrYCbj.js";import"./badge-BBabxmas.js";import"./flex-DRRu73nS.js";import"./divider-CU1Szs95.js";import"./credit-card-B-aTb1S5.js";import"./magnifying-glass-ByUC5lH1.js";import"./people-profile-7_3S-hHD.js";import{a as r}from"./argTableProps-DzACYdmW.js";import"./input.component-_Vu31TYa.js";import"./localized-decorator-DzDeBWJc.js";import"./query-async-BlXsbFgq.js";import"./form-control-host.style-BNjeZOzZ.js";import"./form-control-header.component-Ys4cGYmw.js";import"./badge.component-DaegVqtA.js";import"./flex.component-DH9URAyl.js";import"./triangle-exclamation.component-BXHxvSky.js";import"./icon.component-Ro73QoBG.js";import"./card.component-vR8v_fSK.js";import"./cross-small.component-BmLiBrlv.js";import"./textarea.component-CxzpZZMR.js";import"./resize-observer-B9k8v2TZ.js";import"./divider.component-Bjj_Itf3.js";import"./credit-card.component-BzY_UXKY.js";import"./magnifying-glass.component-CLhBo3Kh.js";import"./people-profile.component-dgWbQy_e.js";const q={title:"Components/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:"An input lets users enter and edit text or numerical values in forms."}}},tags:["autodocs"],argTypes:{...r("gds-input"),value:{control:"text"},variant:{options:["default"],control:{type:"select"}},size:{options:["large","small"],control:{type:"select"}},invalid:{control:"boolean"}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label",variant:"default",size:"large",supportingText:"Label support text.",innerHTML:'<gds-icon-people-profile slot="lead"></gds-icon-people-profile>'}},I={...t,name:"Default"},$={...t,name:"Size",render:()=>a`
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
