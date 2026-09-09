import{b as n}from"./iframe-D9F9vJcX.js";import"./input-SIrw3D5G.js";import"./textarea-Cx6_rjTD.js";import"./select-CBDywpmu.js";import"./dropdown-BB1d-oFX.js";import"./option-CkrW4eu7.js";import"./menu-heading-3fPknT7D.js";import"./datepicker-DtLfIey9.js";import"./checkbox-group-wTXQeGRe.js";import"./radio-group-CN-daN3Y.js";import"./switch-BWbVzUGF.js";import"./flex-C0SES4rt.js";import"./card-B3Puy_vG.js";import"./text-WzEQU6ym.js";import"./divider-CTGT3VjQ.js";import"./credit-card-D8PDQ22m.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-Di1ENWMZ.js";import"./localized-decorator-C89aei6H.js";import"./query-async-C4zERVKi.js";import"./form-control-host.style-m3eVqALH.js";import"./lock.component-sAI_HyBg.js";import"./icon.component-C5a9Z25y.js";import"./form-control-header.component-C6_6zTGV.js";import"./badge.component-DG9ZSBvO.js";import"./flex.component-CwPQBbIL.js";import"./triangle-exclamation.component-D5gSzoPF.js";import"./card.component-D9mIxsAZ.js";import"./circle-info.component-LFmrL0yM.js";import"./cross-small.component-C2RaHAxR.js";import"./textarea.component-BlG8YtJG.js";import"./resize-observer-CfkbZofs.js";import"./select.component-6-CQF-Is.js";import"./chevron-bottom.component-Cl-a_SdA.js";import"./dropdown.component-D1q1YP-J.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-CB3GWYsd.js";import"./checkmark.component-Bel0vMFw.js";import"./popover.component-CRgA26xf.js";import"./rbcb-toggle.template-DpnUt8wi.js";import"./menu-heading.component-BAlvDvU5.js";import"./datepicker.component-CKgxg1_F.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-KNAake9B.js";import"./calender-add.component-Bn56A5sY.js";import"./chevron-left.component-C-gEWfFB.js";import"./chevron-right.component-SGWc5-ss.js";import"./checkbox-group.component-x_qDsCZw.js";import"./toggle-control-base.component-8FVfg0mZ.js";import"./minus-small.component-CAXD4u_D.js";import"./radio-group.component-bYr7lkxC.js";import"./switch.component-BlWuhdTG.js";import"./text.component-DtBvUMwf.js";import"./default-typography.styles-BKGLsxiw.js";import"./credit-card.component-D3T7UZxd.js";const re={title:"Patterns/Readonly form controls",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds."}}}},t={name:"Readonly",render:d=>{const e=d.state==="disabled",o=d.state==="readonly";return n`
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
