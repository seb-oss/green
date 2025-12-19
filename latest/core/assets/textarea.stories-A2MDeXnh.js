import{x as t}from"./iframe-CaSnqVAO.js";import{a as s}from"./argTableProps-C6iN36Xh.js";import"./textarea-DYvNJ5Kh.js";import"./badge-BDrRbFq4.js";import"./flex-Dg1XC8wP.js";import"./text-ChPVSlNm.js";import"./divider-CjwxrTpY.js";import"./credit-card-DZWISdz3.js";import"./magnifying-glass-CCNd_KYc.js";import"./textarea.component-CSuOmQjN.js";import"./localized-decorator-Bh06p6zl.js";import"./query-async-BkEvcfiS.js";import"./form-control-host.style-CHpZv3gZ.js";import"./form-control-header.component-zFLYIo2l.js";import"./badge.component-DKCNgvUp.js";import"./flex.component-xmOxoKSe.js";import"./triangle-exclamation.component-Cpih2oi2.js";import"./icon.component-BdiabhnO.js";import"./card.component-B05iLK3e.js";import"./resize-observer-B9k8v2TZ.js";import"./cross-small.component-CfK7DhBz.js";import"./default-typography.styles-JlCI9qIa.js";import"./divider.component-CuZ1iODG.js";import"./credit-card.component-BZNoTbdr.js";import"./magnifying-glass.component-Q3Ct1NFr.js";const k={title:"Components/Textarea",component:"gds-textarea",parameters:{layout:"centered",docs:{description:{component:"A textarea enables multi-line text input from users."}}},tags:["autodocs"],argTypes:{...s("gds-textarea")}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},q={...a,name:"Default",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  `},A={...a,name:"Slot: Lead",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  `},N={...a,name:"Slot: Trail",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        clearable
      >
        <gds-badge variant="information" slot="trail">SEK</gds-badge>
      </gds-textarea>
    </gds-flex>
  `},$={...a,name:"Length",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-textarea>
    </gds-flex>
  `},B={...a,name:"Rows",render:()=>t`
    <gds-flex gap="xl" width="680px">
      <gds-flex flex-direction="column" gap="s" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Rows:8</gds-text>
          <gds-text tag="small" color="secondary">
            Clearable and auto resize
          </gds-text>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Example value with 8 rows"
          clearable
          rows="8"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" gap="s" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Rows:8</gds-text>
          <gds-text tag="small" color="secondary">
            Clearable and no resize
          </gds-text>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Example value with 8 rows"
          clearable
          resizable="false"
          rows="8"
        >
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},V={...a,name:"Resize",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: Auto</gds-text>
          <gds-text tag="small" color="secondary">
            Based on the content
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="auto"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: Manual</gds-text>
          <gds-text tag="small" color="secondary">
            Draging the pull tab to resize
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="manual"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: False</gds-text>
          <gds-text tag="small" color="secondary">
            Will not resize at all
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="false"
        >
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},F={...a,name:"Size",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Size: Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="false"
          size="small"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Size: Large(default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea label="Label" supporting-text="Label support text">
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},I={...a,name:"Clearable",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  `},P={...a,name:"Supporting Text",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  `},_={...a,name:"Extended Supporting Text",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
      <gds-textarea
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
    </gds-flex>
  `},K={...a,name:"Validation",render:()=>t`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"You need to enter a value."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          maxLength="12"
          clearable
          .invalid=${!0}
          error-message="This is explicitly set error message."
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be a 12 characters long numeric value. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},M={...a,name:"Standard Attributes",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  `},O={...a,name:"Disabled",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
      <gds-textarea
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  `},U={...a,name:"Custom counter badge",render:()=>t`
      <gds-textarea
        label="Label"
        maxlength="100"
        .charCounterCallback=${e=>{let l="positive";if(e.value)switch(e.value.length%5){case 0:l="positive";break;case 1:l="negative";break;case 2:l="notice";break;case 3:l="warning";break;case 4:l="information";break}return[e.value.length,l]}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  `},W=["Default","Lead","Trail","Length","Rows","Resize","Size","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","Disabled","CustomCounterBadge"];export{I as Clearable,U as CustomCounterBadge,q as Default,O as Disabled,_ as ExtendedSupportingText,A as Lead,$ as Length,V as Resize,B as Rows,F as Size,M as StandardAttributes,P as SupportingText,N as Trail,K as Validation,W as __namedExportsOrder,k as default};
