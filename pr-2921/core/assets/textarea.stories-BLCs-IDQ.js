import{b as t}from"./iframe-BgnVXT15.js";import{a as v}from"./argTableProps-Cd6T2fHE.js";import"./textarea-B_P66NJ0.js";import"./badge-Cp2gVj-u.js";import"./flex-BoRsA9ol.js";import"./text-BGMpifsQ.js";import"./divider-Jae_gebo.js";import"./credit-card-DCmqiPq6.js";import"./magnifying-glass-Cry72HkF.js";import"./preload-helper-PPVm8Dsz.js";import"./textarea.component-rIZATcY5.js";import"./localized-decorator-BS3h6bjR.js";import"./query-async-BXZvDLvV.js";import"./form-control-host.style-Hj3a3_wn.js";import"./form-control-header.component-riNHCbwD.js";import"./badge.component-CvkFoL1V.js";import"./flex.component-B_T29pzs.js";import"./triangle-exclamation.component-xbzFyjlt.js";import"./icon.component-D6gDFEpK.js";import"./card.component-DefakJNw.js";import"./circle-info.component-cEsDbdLW.js";import"./resize-observer-CfkbZofs.js";import"./cross-small.component-CPLfUH0W.js";import"./text.component-D2V6ELCw.js";import"./default-typography.styles-BVGU1Gld.js";import"./credit-card.component-DUMpRsI_.js";import"./magnifying-glass.component-BE0jv4Gt.js";const K={title:"Components/Textarea",component:"gds-textarea",parameters:{layout:"centered",docs:{description:{component:"A textarea enables multi-line text input from users."}}},tags:["autodocs"],argTypes:{...v("gds-textarea")}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},h={...a,name:"Default",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  `},s={...a,name:"Slot: Lead",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  `},n={...a,name:"Slot: Trail",render:()=>t`
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
  `},d={...a,name:"Length",render:()=>t`
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
  `},l={...a,name:"Rows",render:()=>t`
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
  `},i={...a,name:"Resize",render:()=>t`
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
  `},o={...a,name:"Size",render:()=>t`
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
  `},g={...a,name:"Clearable",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  `},x={...a,name:"Supporting Text",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  `},p={...a,name:"Extended Supporting Text",render:()=>t`
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
  `},c={...a,name:"Validation",render:()=>t`
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
  `},u={...a,name:"Standard Attributes",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Using standard attributes"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-textarea>
    </gds-flex>
  `},m={...a,name:"Disabled",render:()=>t`
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
  `},b={...a,name:"Custom counter badge",render:()=>t`
      <gds-textarea
        label="Label"
        maxlength="100"
        .charCounterCallback=${e=>{let r="positive";if(e.value)switch(e.value.length%5){case 0:r="positive";break;case 1:r="negative";break;case 2:r="notice";break;case 3:r="warning";break;case 4:r="information";break}return[e.value.length,r]}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  `},f={...a,name:"ARIA Forwarding",render:()=>t`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="textarea-label">Label text outside</div>
      <div id="textarea-description">Associated description outside</div>
      <gds-textarea
        plain
        gds-aria-labelledby="textarea-label"
        gds-aria-describedby="textarea-description"
        gds-aria-errormessage="textarea-error"
        invalid
      ></gds-textarea>
      <div id="textarea-error">Associated error message outside</div>
    </gds-flex>
  `};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  \`
}`,...h.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  \`
}`,...s.parameters?.docs?.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the `gds-textarea` field.\n\n```html\n <gds-textarea label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-textarea>```',...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
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
  \`
}`,...n.parameters?.docs?.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the textarea field.\n\n```html\n <gds-textarea label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-textarea>```',...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  render: () => html\`
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
  \`
}`,...d.parameters?.docs?.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the textarea field.<br> A badge will be displayed, updating as the textarea approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the textarea field.\n\n```html\n <gds-textarea maxLength="20"></gds-textarea>\n```',...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rows',
  render: () => html\`
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
  \`
}`,...l.parameters?.docs?.source},description:{story:'Minimum number of rows to display in the textarea is `4` by default. <br>\nYou can specify the number of rows to display in the textarea using the `rows` attribute.\n\n@property rows - The number of rows to display in the textarea.\n\n```html\n <gds-textarea rows="8"></gds-textarea>\n```',...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Resize',
  render: () => html\`
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
  \`
}`,...i.parameters?.docs?.source},description:{story:'The `resize` property is set to `auto` by default, allowing the user to resize the textarea.\n\nTo disable the resize functionality, set the `resize` property to `false`.\n\nWhen the `resize` property is set to `auto`, a resize handle will appear at the bottom center of the textarea when the user hovers over it. Dragging this handle will resize the textarea.\n\nThe textarea\'s size is adjustable based on the `rows` attribute and the content within the textarea.\n\n@property resize - Controls whether and how the textarea can be resized by the user.\n\n```html\n <gds-textarea resizable="false"></gds-textarea>\n```',...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
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
  \`
}`,...o.parameters?.docs?.source},description:{story:'The `size` property controls the font-size of the text in form control header and footer.\n\nThe `size` property can be set to `small` or `large`.<br>\nThe default size is `large`.\n\n```html\n <gds-textarea size="small"></gds-textarea>\n```',...o.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  \`
}`,...g.parameters?.docs?.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the textarea field.\n\n```html\n <gds-textarea label="Label text" value="Clear this text" clearable></gds-textarea>\n```',...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  \`
}`,...x.parameters?.docs?.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the textarea field.\n\n**@property supporting-text** - Additional information about the textarea field.\n\n```html\n  <gds-textarea label="Label text" supporting-text="Supporting text"></gds-textarea>\n```',...x.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
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
  \`
}`,...p.parameters?.docs?.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the textarea field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the textarea field.\n\n```html\n<gds-textarea label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-textarea>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-textarea show-extended-supporting-text></gds-textarea>\n```',...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'You need to enter a value.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
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
          .invalid=\${true}
          error-message="This is explicitly set error message."
          .validator=\${{
    validate: (el: GdsFormControlElement) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be a 12 characters long numeric value. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...c.parameters?.docs?.source},description:{story:`Textarea has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the \`GdsValidator\` interface:

\`\`\`html
<gds-textarea
 label="Label"
 value=" "
 .validator=\${{
   validate: (el: any) => {
     if (el.value === '')
       return [
         {
           ...el.validity,
           valid: false,
           customError: true,
         },
         'Error message.',
       ]
   },
 }}></gds-textarea>
\`\`\`
**@property invalid** - Indicates that the textarea field contains an error.

\`\`\`html
<gds-textarea invalid></gds-textarea>
\`\`\``,...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Standard Attributes',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Using standard attributes"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-textarea>
    </gds-flex>
  \`
}`,...u.parameters?.docs?.source},description:{story:"Most standard attributes are supported, and will be forwarded to the internal textarea element.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
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
  \`
}`,...m.parameters?.docs?.source},description:{story:"The `disabled` property can be set to disable the textarea field.\n\n**@property disabled** - Disables the textarea field.\n\n```html\n <gds-textarea disabled></gds-textarea>\n```",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom counter badge',
  render: () => html\`
      <gds-textarea
        label="Label"
        maxlength="100"
        .charCounterCallback=\${(inp: GdsTextarea) => {
    let badgeType: GdsBadge['variant'] = 'positive';
    if (inp.value) {
      switch (inp.value.length % 5) {
        case 0:
          badgeType = 'positive';
          break;
        case 1:
          badgeType = 'negative';
          break;
        case 2:
          badgeType = 'notice';
          break;
        case 3:
          badgeType = 'warning';
          break;
        case 4:
          badgeType = 'information';
          break;
      }
    }
    return [inp.value!.length, badgeType] as const;
  }}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  \`
}`,...b.parameters?.docs?.source},description:{story:"The `charCounterCallback` property can be used to customize the character counter badge.\n\nCheck the [story source](https://github.com/seb-oss/green/blob/main/libs/core/src/components/textarea/textarea.stories.ts) to see the full code for this example, as Storybook strips away property assignments in the code examples.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="textarea-label">Label text outside</div>
      <div id="textarea-description">Associated description outside</div>
      <gds-textarea
        plain
        gds-aria-labelledby="textarea-label"
        gds-aria-describedby="textarea-description"
        gds-aria-errormessage="textarea-error"
        invalid
      ></gds-textarea>
      <div id="textarea-error">Associated error message outside</div>
    </gds-flex>
  \`
}`,...f.parameters?.docs?.source},description:{story:`In some cases it may be necessary to label the textarea using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal textarea element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-textarea), and not only the inner textarea.
For textareas, prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal textarea element.`,...f.parameters?.docs?.description}}};const _=["Default","Lead","Trail","Length","Rows","Resize","Size","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","Disabled","CustomCounterBadge","AriaForwarding"];export{f as AriaForwarding,g as Clearable,b as CustomCounterBadge,h as Default,m as Disabled,p as ExtendedSupportingText,s as Lead,d as Length,i as Resize,l as Rows,o as Size,u as StandardAttributes,x as SupportingText,n as Trail,c as Validation,_ as __namedExportsOrder,K as default};
