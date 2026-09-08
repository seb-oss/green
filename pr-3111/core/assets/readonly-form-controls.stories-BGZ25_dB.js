import{b as n}from"./iframe-C23GnPn7.js";import"./input-CGvyAQMG.js";import"./textarea-DS1Uc8Jc.js";import"./select-DlOP_ZMF.js";import"./dropdown-DVJOzTZw.js";import"./option-iHVQKBew.js";import"./menu-heading-DX1gVTEl.js";import"./datepicker-CDlaJJ2S.js";import"./checkbox-group-DvH0WXff.js";import"./radio-group-D0i-ubC-.js";import"./switch-Co6apAYs.js";import"./flex-DBKPi_Yr.js";import"./card-CS_uuCYl.js";import"./text-AlEpXYut.js";import"./divider-Buqfsq6e.js";import"./credit-card-D-eG2DQT.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-B1p-3kKe.js";import"./localized-decorator-CYeEJ5u0.js";import"./query-async-R-cf0FQe.js";import"./form-control-host.style-CidSUJ9c.js";import"./lock.component-DXyFnIoK.js";import"./icon.component-2JRnj-Cc.js";import"./form-control-header.component-C_JrsW6P.js";import"./badge.component-ZV8Z8xYL.js";import"./flex.component-DASmqb-J.js";import"./triangle-exclamation.component-oHGkANK4.js";import"./card.component-yK5tEQu_.js";import"./circle-info.component-DBWCGRoG.js";import"./cross-small.component-DDq5aWEp.js";import"./textarea.component-ztc2vbNQ.js";import"./resize-observer-CfkbZofs.js";import"./select.component-CatVDD1X.js";import"./chevron-bottom.component-CnKBQp7A.js";import"./dropdown.component-D-bhSipZ.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-6ONfMInt.js";import"./checkmark.component-BI_B-5ti.js";import"./popover.component-CQAGSJ7S.js";import"./rbcb-toggle.template-DeFqMOzB.js";import"./menu-heading.component-Dn99jLbP.js";import"./datepicker.component-DDLErrR8.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DCm_FW4T.js";import"./calender-add.component-D4-gHAJ-.js";import"./chevron-left.component-BTexRKea.js";import"./chevron-right.component-Ds3tYghJ.js";import"./checkbox-group.component-Dh_w7P84.js";import"./toggle-control-base.component-DMc9CT3n.js";import"./minus-small.component-DPRSz7Rd.js";import"./radio-group.component-BSSanFdn.js";import"./switch.component-BDlpXw14.js";import"./text.component-DG7lk5wS.js";import"./default-typography.styles-ABfOuypi.js";import"./credit-card.component-BURiwGbF.js";const re={title:"Patterns/Readonly form controls",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds."}}}},t={name:"Readonly",render:d=>{const e=d.state==="disabled",o=d.state==="readonly";return n`
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
