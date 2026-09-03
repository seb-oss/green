import{b as n}from"./iframe-NY0pB7lA.js";import"./input-CrLpYjZy.js";import"./badge-ClG2gVHh.js";import"./flex-M44wN04h.js";import"./divider-CYwpDn2X.js";import"./credit-card-6Twh-n33.js";import"./people-profile-DeOnD-4w.js";import"./magnifying-glass-CuB5N8TX.js";import{a as h}from"./argTableProps-7Xuutl__.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-Dwc57yXS.js";import"./localized-decorator-CvI9_CFH.js";import"./query-async-ZRgl1z3O.js";import"./field-base.component-Bk3Tgf5y.js";import"./form-control-header.component-FZTmUq_k.js";import"./badge.component-BWyk3cls.js";import"./flex.component-7KDeio0v.js";import"./triangle-exclamation.component-CXiv_IY4.js";import"./icon.component-DynT1T0a.js";import"./card.component-CNGVeZFa.js";import"./circle-info.component-a0Q93gD2.js";import"./form-control-host.style-D-t35chm.js";import"./cross-small.component-CwyjU3sd.js";import"./textarea.component-BpogcRcB.js";import"./resize-observer-CfkbZofs.js";import"./credit-card.component-B7nNzecM.js";import"./cloud-upload.component-Ce4-qS_G.js";import"./people-profile.component-uSCbUgfj.js";import"./magnifying-glass.component-DsbHru-W.js";const J={title:"Components/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:"An input lets users enter and edit text or numerical values in forms."}}},tags:["autodocs"],argTypes:{...h("gds-input"),value:{control:"text"},variant:{options:["default"],control:{type:"select"}},size:{options:["large","small"],control:{type:"select"}},invalid:{control:"boolean"}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label",variant:"default",size:"large",supportingText:"Label support text.",innerHTML:'<gds-icon-people-profile slot="lead"></gds-icon-people-profile>'}},f={...t,name:"Default"},i={...t,name:"Size",render:()=>n`
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
  `},r={...t,name:"Slot: Lead",render:()=>n`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  `},s={...t,name:"Slot: Trail",render:()=>n`
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
  `},l={...t,name:"Length",render:()=>n`
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
  `},o={...t,name:"Clearable",render:()=>n`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  `},d={...t,name:"Supporting Text",render:()=>n`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  `},p={...t,name:"Extended Supporting Text",render:()=>n`
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
  `},u={...t,name:"Validation",render:()=>n`
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
  `},c={...t,name:"Standard Attributes",render:()=>n`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        min="0"
        max="100"
        step="5"
        type="time"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  `},g={...t,name:"File Upload",render:()=>n`
    <gds-flex flex-direction="column" gap="4xl" width="960px" padding="4xl">
      <gds-grid columns="2" gap="4xl">
        <gds-input
          label="Single file upload"
          supporting-text="Accepts PDF files"
          type="file"
          accept=".pdf,image/*"
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
        <gds-input
          label="Invalid single file upload"
          supporting-text="File is required"
          type="file"
          accept=".pdf,image/*"
          .invalid=${!0}
          error-message="Please select a file"
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
      </gds-grid>
      <gds-flex columns="2" gap="4xl">
        <gds-input
          label="Multiple file upload"
          supporting-text="Accepts image files"
          type="file"
          accept=".pdf,image/*"
          multiple
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
        <gds-input
          label="Invalid multiple file upload"
          supporting-text="At least one file required"
          type="file"
          accept="image/*"
          multiple
          .invalid=${!0}
          error-message="Please select at least one file"
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `},m={...t,name:"ARIA Forwarding",render:()=>n`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="input-label">Label text outside</div>
      <div id="input-description">Associated description outside</div>
      <gds-input
        plain
        gds-aria-labelledby="input-label"
        gds-aria-describedby="input-description"
        gds-aria-errormessage="input-error"
        invalid
      ></gds-input>
      <div id="input-error">Associated error message outside</div>
    </gds-flex>
  `},x={...t,name:"Disabled",render:()=>n`
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
  `},b={...t,name:"Custom counter badge",render:()=>n`
      <gds-input
        label="Label"
        maxlength="100"
        .charCounterCallback=${e=>{let a="positive";if(e.value)switch(e.value.length%5){case 0:a="positive";break;case 1:a="negative";break;case 2:a="notice";break;case 3:a="warning";break;case 4:a="information";break}return[e.value.length,a]}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default'
}`,...f.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <gds-flex width="800px" gap="4xl" align-items="flex-start">
      <gds-input label="Lead Icon" size="small">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Lead Icon"
        supporting-text="Example support text"
        size="small"
        clearable
        .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Required field.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
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
      </gds-input>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the input field.<br>\n**@property size** - The size of the input field.\n\n```html\n <gds-input size=\"small\"></gds-input>\n```",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  \`
}`,...r.parameters?.docs?.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the input field.\n\n```html\n <gds-input label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-input>```',...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
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
  \`
}`,...s.parameters?.docs?.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the input field.\n\n```html\n <gds-input label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-input>```',...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  render: () => html\`
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
  \`
}`,...l.parameters?.docs?.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the input field.<br> A badge will be displayed, updating as the input approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the input field.\n\n```html\n <gds-input maxLength="20"></gds-input>\n```',...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the input field.\n\n```html\n <gds-input label="Label text" value="Clear this text" clearable></gds-input>\n```',...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  \`
}`,...d.parameters?.docs?.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the input field.\n\n**@property supporting-text** - Additional information about the input field.\n\n```html\n  <gds-input label="Label text" supporting-text="Supporting text"></gds-input>\n```',...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
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
  \`
}`,...p.parameters?.docs?.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the input field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the input field.\n\n```html\n<gds-input label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-input>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-input show-extended-supporting-text></gds-input>\n```',...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=\${{
    validate: (el: GdsFormControlElement): [ValidityState, string] | undefined => {
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
          .invalid=\${true}
          error-message="This displays if the input is invalid."
          .validator=\${{
    validate: (el: GdsFormControlElement): [ValidityState, string] | undefined => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'This displays if the input doesn\`t have any value.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long. '];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  \`
}`,...u.parameters?.docs?.source},description:{story:`Input has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the \`GdsValidator\` interface:

\`\`\`html
<gds-input
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
 }}></gds-input>
\`\`\`
**@property invalid** - Indicates that the input field contains an error.

\`\`\`html
<gds-input invalid></gds-input>
\`\`\``,...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Standard Attributes',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        min="0"
        max="100"
        step="5"
        type="time"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  \`
}`,...c.parameters?.docs?.source},description:{story:`Most standard attributes are supported, and will be forwarded to the internal input element.

#### Accessibility note on \`type="number"\`

Avoid using \`type="number"\` for most numeric inputs. Semantically, [\`type="number"\` means 'spinbutton'](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number#accessibility),
and is meant for inputs where the user is expected to enter a number using the up/down buttons (setting
a quantity of a product in a basket for example). Think of "number" as meaning "number of things"  .

For most numeric inputs, \`type="text"\` with \`inputmode="numeric"\` coupled with appropriate input validation is
a better choice.

\`type="number"\` also have built-in value coercion, which can lead to unexpected behavior, and differes slightly
between browsers. This makes it particularly precarious to use for currency amounts, as the submitted value can
differ from the displayed value.`,...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'File Upload',
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl" width="960px" padding="4xl">
      <gds-grid columns="2" gap="4xl">
        <gds-input
          label="Single file upload"
          supporting-text="Accepts PDF files"
          type="file"
          accept=".pdf,image/*"
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
        <gds-input
          label="Invalid single file upload"
          supporting-text="File is required"
          type="file"
          accept=".pdf,image/*"
          .invalid=\${true}
          error-message="Please select a file"
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
      </gds-grid>
      <gds-flex columns="2" gap="4xl">
        <gds-input
          label="Multiple file upload"
          supporting-text="Accepts image files"
          type="file"
          accept=".pdf,image/*"
          multiple
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
        <gds-input
          label="Invalid multiple file upload"
          supporting-text="At least one file required"
          type="file"
          accept="image/*"
          multiple
          .invalid=\${true}
          error-message="Please select at least one file"
        >
          <gds-icon-cloud-upload slot="lead"></gds-icon-cloud-upload>
        </gds-input>
      </gds-flex>
    </gds-flex>
  \`
}`,...g.parameters?.docs?.source},description:{story:"File upload inputs support native file constraints through `accept` and `multiple`.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="input-label">Label text outside</div>
      <div id="input-description">Associated description outside</div>
      <gds-input
        plain
        gds-aria-labelledby="input-label"
        gds-aria-describedby="input-description"
        gds-aria-errormessage="input-error"
        invalid
      ></gds-input>
      <div id="input-error">Associated error message outside</div>
    </gds-flex>
  \`
}`,...m.parameters?.docs?.source},description:{story:`In some cases it may be necessary to label the input field using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal input element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-input), and not only the inner input.
For inputs, prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal input element.`,...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
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
  \`
}`,...x.parameters?.docs?.source},description:{story:"The `disabled` property can be set to disable the input field.\n\n**@property disabled** - Disables the input field.\n\n```html\n <gds-input disabled></gds-input>\n```",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom counter badge',
  render: () => html\`
      <gds-input
        label="Label"
        maxlength="100"
        .charCounterCallback=\${(inp: GdsInput) => {
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
      </gds-input>
    </gds-flex>
  \`
}`,...b.parameters?.docs?.source},description:{story:"The `charCounterCallback` property can be used to customize the character counter badge.\n\nCheck the [story source](https://github.com/seb-oss/green/blob/main/libs/core/src/components/input/input.stories.ts) to see the full code for this example, as Storybook strips away property assignments in the code examples.",...b.parameters?.docs?.description}}};const K=["Default","Size","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","FileUpload","AriaForwarding","Disabled","CustomCounterBadge"];export{m as AriaForwarding,o as Clearable,b as CustomCounterBadge,f as Default,x as Disabled,p as ExtendedSupportingText,g as FileUpload,r as Lead,l as Length,i as Size,c as StandardAttributes,d as SupportingText,s as Trail,u as Validation,K as __namedExportsOrder,J as default};
