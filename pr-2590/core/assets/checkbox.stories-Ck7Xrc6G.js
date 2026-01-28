import{x as t}from"./iframe-heokNkxx.js";import"./checkbox-group-DLaUB9H5.js";import"./flex-Dt4RAh_7.js";import"./card-BqqNJDXw.js";import"./text-B1d0gPyV.js";import"./divider-DEqBPoF3.js";import"./circle-check-Cyucg1XE.js";import"./cross-small-CfNQQLVB.js";import"./minus-small-MCJFFqD0.js";import{a as s}from"./argTableProps-BbAB0xrA.js";import"./checkbox-group.component-C0WlfN0G.js";import"./toggle-control-base.component-CF9PpBZn.js";import"./localized-decorator-DxZVosJk.js";import"./rbcb-toggle.template-C2JnEAiS.js";import"./checkmark.component-Bk0SkJYM.js";import"./icon.component-BO162m1G.js";import"./minus-small.component-CPWSZ2D5.js";import"./form-control-header.component-D2x86a1j.js";import"./badge.component-BFyappB2.js";import"./flex.component-Dj4N-Nht.js";import"./triangle-exclamation.component-BEIxBZgU.js";import"./card.component-Bjon-NZW.js";import"./default-typography.styles-BBUAg0tm.js";import"./divider.component-B0mqVvob.js";import"./circle-check.component-DyzqvLYR.js";import"./cross-small.component-CBd3YNHE.js";const T={title:"Components/Checkbox",component:"gds-checkbox-group",subcomponents:{GdsCheckbox:"gds-checkbox"},tags:["autodocs"],argTypes:{...s("gds-checkbox-group")},parameters:{docs:{description:{component:`A checkbox is a form element that allows users to select one or multiple options.<br/>
They can be grouped together using a checkbox group, which makes value management and validation easier.

Groups support vertical and horizontal layouts, and can be sized to fit different space requirements.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},q={...e,name:"Checkbox",args:{label:"Pick an option",supportingText:"Label support text.",innerHTML:`
    <gds-checkbox label="Checkbox Option 1" supporting-text="Supporting text" value="1"></gds-checkbox>
    <gds-checkbox label="Checkbox Option 2" supporting-text="Supporting text" value="2" checked></gds-checkbox>
    <gds-checkbox label="Checkbox Option 3" supporting-text="Supporting text" value="3"></gds-checkbox>`}},O={...e,name:"Validation",render:()=>t`
    <form method="dialog">
      <gds-flex flex-direction="column" align-items="flex-start" gap="m">
        <gds-checkbox-group
          label="Group Label"
          name="checkbox-group"
          supporting-text="Support text for the group"
          show-extended-supporting-text
          .validator=${{validate:o=>{if(o.value.length<1)return[{...o.validity,valid:!1,customError:!0},"This is required"]}}}
        >
          <span slot="extended-supporting-text">
            Extended supporting text for the group
          </span>
          <gds-checkbox
            label="Checkbox Label"
            value="1"
            supporting-text="Example support text"
          ></gds-checkbox>
          <gds-checkbox
            label="Checkbox Label"
            value="2"
            supporting-text="Example support text"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-button type="submit">Submit</gds-button>
      </gds-flex>
    </form>
  `},V={...e,name:"Do's and don'ts",render:()=>t`
    <gds-flex gap="xl">
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="positive"
        >
          <gds-icon-circle-check></gds-icon-circle-check>
          <gds-text tag="small">Do provide both Label and Value</gds-text>
        </gds-card>
        <gds-card align-items="flex-start" gap="m">
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text"
          >
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
            <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
          </gds-checkbox-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the label</gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox value="1"></gds-checkbox>
              <gds-checkbox value="2"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the value </gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  `},A={...e,name:"Disabled",render:()=>t`
    <div class="checkbox-group">
      <gds-checkbox-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-checkbox
          label="Checkbox Label"
          value="1"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
        <gds-checkbox
          label="Checkbox Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
      </gds-checkbox-group>
    </div>
  `},I={...e,name:"Size",render:()=>t`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
              checked
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text."
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  `},P={...e,name:"Direction",render:()=>t`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            direction="row"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="5"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="6"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  `},B={...e,name:"Checkbox group label",render:()=>t`
    <div class="checkbox-group">
      <gds-checkbox-group>
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
      <br />
      <br />
      <br />
      <gds-checkbox-group size="small">
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
    </div>
  `},N={...e,name:"Indeterminate",render:()=>t`
    <gds-checkbox label="Select all" value="1" indeterminate></gds-checkbox>
  `},_={...e,name:"Single checkbox",render:()=>t`
    <gds-checkbox label="Checkbox Label" value="1" checked></gds-checkbox>
  `},F=["CheckboxButton","Validation","DosAndDonts","Disabled","Size","Direction","GroupLabel","Indeterminate","SingleCheckbox"];export{q as CheckboxButton,P as Direction,A as Disabled,V as DosAndDonts,B as GroupLabel,N as Indeterminate,_ as SingleCheckbox,I as Size,O as Validation,F as __namedExportsOrder,T as default};
