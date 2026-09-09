import{b as n}from"./iframe-CNPadLMU.js";import"./input-DwOp4ZT2.js";import"./textarea-CyFD_phO.js";import"./select-D44lTYoD.js";import"./dropdown-6Dy8iMmj.js";import"./option-Cc1Q1BaE.js";import"./menu-heading-BuaZM5Vn.js";import"./datepicker-DaRfoNEZ.js";import"./checkbox-group-CAX-HBE1.js";import"./radio-group-Cfac7GjA.js";import"./switch-CvfS39r8.js";import"./flex-ClS-Rak4.js";import"./card-B9PHY490.js";import"./text-I0DUdfb6.js";import"./divider-BAynrcG1.js";import"./credit-card-Bxbzs74C.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-B_NdW-SH.js";import"./localized-decorator-CPnzJVOl.js";import"./query-async-CQ0p2qr7.js";import"./form-control-host.style-DgONmNsL.js";import"./lock.component-CTMDrZWZ.js";import"./icon.component-CXBWmE0H.js";import"./form-control-header.component-Clw78pRe.js";import"./badge.component-CTNZ5hr6.js";import"./flex.component-CoRjFOls.js";import"./triangle-exclamation.component-DgiSbAEW.js";import"./card.component-5nQU8xSK.js";import"./circle-info.component-sJP67f19.js";import"./cross-small.component-7MrfIv_O.js";import"./textarea.component-_Be8xmdI.js";import"./resize-observer-CfkbZofs.js";import"./select.component-5BoBUn9R.js";import"./chevron-bottom.component-C1QnsFw5.js";import"./dropdown.component-CynBk8FL.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-mL6yZeD8.js";import"./checkmark.component-DH1ZMrV8.js";import"./popover.component-ywb0PIrL.js";import"./rbcb-toggle.template-B-y6qIOt.js";import"./menu-heading.component-u4XJjw6u.js";import"./datepicker.component-CE6lbscB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BSBuiGdw.js";import"./calender-add.component-BLl9VEZ5.js";import"./chevron-left.component-BJfxvVOZ.js";import"./chevron-right.component-B259J3Vv.js";import"./checkbox-group.component-CVTOeal5.js";import"./toggle-control-base.component-COHmBpb-.js";import"./minus-small.component-DNQDlqLV.js";import"./radio-group.component-tFAh8rNv.js";import"./switch.component-ZqNPOEwb.js";import"./text.component-DAbnq5Gg.js";import"./default-typography.styles-BAnDJVcY.js";import"./credit-card.component-Kxw-IqD4.js";const re={title:"Patterns/Readonly form controls",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds."}}}},t={name:"Readonly",render:d=>{const e=d.state==="disabled",o=d.state==="readonly";return n`
      <gds-card variant="neutral-02-outlined">
        <gds-grid columns="1; m{2}" gap="l">
          <gds-input
            label="Input"
            value="Jane Doe"
            ?disabled=${e}
            ?readonly=${o}
          >
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          </gds-input>

          <gds-textarea
            label="Textarea"
            value="Some notes about this record."
            ?disabled=${e}
            ?readonly=${o}
          ></gds-textarea>

          <gds-select
            label="Select"
            supporting-text="Native select"
            ?disabled=${e}
            ?readonly=${o}
          >
            <select>
              <option value="a">Option A</option>
              <option value="b" selected>Option B</option>
              <option value="c">Option C</option>
            </select>
          </gds-select>

          <gds-dropdown
            label="Dropdown"
            value="b"
            ?disabled=${e}
            ?readonly=${o}
          >
            <gds-option value="a">Option A</gds-option>
            <gds-option value="b">Option B</gds-option>
            <gds-option value="c">Option C</gds-option>
          </gds-dropdown>

          <gds-datepicker
            label="Datepicker"
            value="2024-01-15"
            ?disabled=${e}
            ?readonly=${o}
          ></gds-datepicker>

          <gds-flex flex-direction="column" gap="s">
            <gds-text font="detail-book-s">Toggle controls</gds-text>
            <gds-checkbox
              label="Checkbox"
              checked
              ?disabled=${e}
              ?readonly=${o}
            ></gds-checkbox>
            <gds-radio
              label="Radio"
              checked
              ?disabled=${e}
              ?readonly=${o}
            ></gds-radio>
            <gds-switch
              label="Switch"
              checked
              ?disabled=${e}
              ?readonly=${o}
            ></gds-switch>
          </gds-flex>
        </gds-grid>
      </gds-card>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Readonly',
  render: args => {
    const disabled = args.state === 'disabled';
    const readonly = args.state === 'readonly';
    return html\`
      <gds-card variant="neutral-02-outlined">
        <gds-grid columns="1; m{2}" gap="l">
          <gds-input
            label="Input"
            value="Jane Doe"
            ?disabled=\${disabled}
            ?readonly=\${readonly}
          >
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          </gds-input>

          <gds-textarea
            label="Textarea"
            value="Some notes about this record."
            ?disabled=\${disabled}
            ?readonly=\${readonly}
          ></gds-textarea>

          <gds-select
            label="Select"
            supporting-text="Native select"
            ?disabled=\${disabled}
            ?readonly=\${readonly}
          >
            <select>
              <option value="a">Option A</option>
              <option value="b" selected>Option B</option>
              <option value="c">Option C</option>
            </select>
          </gds-select>

          <gds-dropdown
            label="Dropdown"
            value="b"
            ?disabled=\${disabled}
            ?readonly=\${readonly}
          >
            <gds-option value="a">Option A</gds-option>
            <gds-option value="b">Option B</gds-option>
            <gds-option value="c">Option C</gds-option>
          </gds-dropdown>

          <gds-datepicker
            label="Datepicker"
            value="2024-01-15"
            ?disabled=\${disabled}
            ?readonly=\${readonly}
          ></gds-datepicker>

          <gds-flex flex-direction="column" gap="s">
            <gds-text font="detail-book-s">Toggle controls</gds-text>
            <gds-checkbox
              label="Checkbox"
              checked
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            ></gds-checkbox>
            <gds-radio
              label="Radio"
              checked
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            ></gds-radio>
            <gds-switch
              label="Switch"
              checked
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            ></gds-switch>
          </gds-flex>
        </gds-grid>
      </gds-card>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const ie=["Showcase"];export{t as Showcase,ie as __namedExportsOrder,re as default};
