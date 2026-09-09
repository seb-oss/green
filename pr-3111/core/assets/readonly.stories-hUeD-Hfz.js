import{b as a}from"./iframe-D9F9vJcX.js";import"./input-SIrw3D5G.js";import"./textarea-Cx6_rjTD.js";import"./select-CBDywpmu.js";import"./dropdown-BB1d-oFX.js";import"./option-CkrW4eu7.js";import"./menu-heading-3fPknT7D.js";import"./datepicker-DtLfIey9.js";import"./checkbox-group-wTXQeGRe.js";import"./radio-group-CN-daN3Y.js";import"./switch-BWbVzUGF.js";import"./flex-C0SES4rt.js";import"./card-B3Puy_vG.js";import"./text-WzEQU6ym.js";import"./divider-CTGT3VjQ.js";import"./credit-card-D8PDQ22m.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-Di1ENWMZ.js";import"./localized-decorator-C89aei6H.js";import"./query-async-C4zERVKi.js";import"./form-control-host.style-m3eVqALH.js";import"./lock.component-sAI_HyBg.js";import"./icon.component-C5a9Z25y.js";import"./form-control-header.component-C6_6zTGV.js";import"./badge.component-DG9ZSBvO.js";import"./flex.component-CwPQBbIL.js";import"./triangle-exclamation.component-D5gSzoPF.js";import"./card.component-D9mIxsAZ.js";import"./circle-info.component-LFmrL0yM.js";import"./cross-small.component-C2RaHAxR.js";import"./textarea.component-BlG8YtJG.js";import"./resize-observer-CfkbZofs.js";import"./select.component-6-CQF-Is.js";import"./chevron-bottom.component-Cl-a_SdA.js";import"./dropdown.component-D1q1YP-J.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-CB3GWYsd.js";import"./checkmark.component-Bel0vMFw.js";import"./popover.component-CRgA26xf.js";import"./rbcb-toggle.template-DpnUt8wi.js";import"./menu-heading.component-BAlvDvU5.js";import"./datepicker.component-CKgxg1_F.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-KNAake9B.js";import"./calender-add.component-Bn56A5sY.js";import"./chevron-left.component-C-gEWfFB.js";import"./chevron-right.component-SGWc5-ss.js";import"./checkbox-group.component-x_qDsCZw.js";import"./toggle-control-base.component-8FVfg0mZ.js";import"./minus-small.component-CAXD4u_D.js";import"./radio-group.component-bYr7lkxC.js";import"./switch.component-BlWuhdTG.js";import"./text.component-DtBvUMwf.js";import"./default-typography.styles-BKGLsxiw.js";import"./credit-card.component-D3T7UZxd.js";const te={title:"Components/Form/Readonly",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds."}}}},o={name:"Readonly",render:n=>{const e=n.state==="disabled",d=n.state==="readonly";return a`
      <gds-card variant="neutral-02-outlined">
        <gds-grid columns="1; m{2}" gap="l">
          <gds-flex flex-direction="column" gap="l">
            <gds-input
              label="Input (with lead icon)"
              value="Jane Doe"
              ?disabled=${e}
              ?readonly=${d}
            >
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-input>

            <gds-input
              label="Input (no lead icon)"
              value="Jane Doe"
              ?disabled=${e}
              ?readonly=${d}
            ></gds-input>

            <gds-textarea
              label="Textarea (with lead icon)"
              value="Some notes about this record."
              ?disabled=${e}
              ?readonly=${d}
            >
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-textarea>

            <gds-textarea
              label="Textarea (no lead icon)"
              value="Some notes about this record."
              ?disabled=${e}
              ?readonly=${d}
            ></gds-textarea>

            <gds-select
              label="Select"
              supporting-text="Native select"
              ?disabled=${e}
              ?readonly=${d}
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
              ?readonly=${d}
            >
              <gds-option value="a">Option A</gds-option>
              <gds-option value="b">Option B</gds-option>
              <gds-option value="c">Option C</gds-option>
            </gds-dropdown>

            <gds-datepicker
              label="Datepicker"
              value="2024-01-15"
              ?disabled=${e}
              ?readonly=${d}
            ></gds-datepicker>
          </gds-flex>

          <gds-flex flex-direction="column" gap="l">
            <gds-flex flex-direction="column" gap="s">
              <gds-text font="detail-book-s"
                >Standalone toggle controls</gds-text
              >
              <gds-checkbox
                label="Checkbox (checked)"
                checked
                ?disabled=${e}
                ?readonly=${d}
              ></gds-checkbox>
              <gds-checkbox
                label="Checkbox (unchecked)"
                ?disabled=${e}
                ?readonly=${d}
              ></gds-checkbox>
              <gds-radio
                label="Radio (checked)"
                checked
                ?disabled=${e}
                ?readonly=${d}
              ></gds-radio>
              <gds-radio
                label="Radio (unchecked)"
                ?disabled=${e}
                ?readonly=${d}
              ></gds-radio>
              <gds-switch
                label="Switch (on)"
                checked
                ?disabled=${e}
                ?readonly=${d}
              ></gds-switch>
              <gds-switch
                label="Switch (off)"
                ?disabled=${e}
                ?readonly=${d}
              ></gds-switch>
            </gds-flex>

            <gds-checkbox-group
              label="Checkbox group"
              supporting-text="Readonly is set per checkbox, not on the group"
              ?disabled=${e}
            >
              <gds-checkbox
                label="Option A"
                value="a"
                ?disabled=${e}
                ?readonly=${d}
              ></gds-checkbox>
              <gds-checkbox
                label="Option B"
                value="b"
                checked
                ?disabled=${e}
                ?readonly=${d}
              ></gds-checkbox>
            </gds-checkbox-group>

            <gds-radio-group
              label="Radio group"
              supporting-text="Readonly is set per radio, not on the group"
              value="a"
              ?disabled=${e}
            >
              <gds-radio
                label="Option A"
                value="a"
                ?disabled=${e}
                ?readonly=${d}
              ></gds-radio>
              <gds-radio
                label="Option B"
                value="b"
                ?disabled=${e}
                ?readonly=${d}
              ></gds-radio>
            </gds-radio-group>
          </gds-flex>
        </gds-grid>
      </gds-card>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Readonly',
  render: args => {
    const disabled = args.state === 'disabled';
    const readonly = args.state === 'readonly';
    return html\`
      <gds-card variant="neutral-02-outlined">
        <gds-grid columns="1; m{2}" gap="l">
          <gds-flex flex-direction="column" gap="l">
            <gds-input
              label="Input (with lead icon)"
              value="Jane Doe"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-input>

            <gds-input
              label="Input (no lead icon)"
              value="Jane Doe"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            ></gds-input>

            <gds-textarea
              label="Textarea (with lead icon)"
              value="Some notes about this record."
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-textarea>

            <gds-textarea
              label="Textarea (no lead icon)"
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
          </gds-flex>

          <gds-flex flex-direction="column" gap="l">
            <gds-flex flex-direction="column" gap="s">
              <gds-text font="detail-book-s"
                >Standalone toggle controls</gds-text
              >
              <gds-checkbox
                label="Checkbox (checked)"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-checkbox
                label="Checkbox (unchecked)"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-radio
                label="Radio (checked)"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-radio
                label="Radio (unchecked)"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-switch
                label="Switch (on)"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
              <gds-switch
                label="Switch (off)"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
            </gds-flex>

            <gds-checkbox-group
              label="Checkbox group"
              supporting-text="Readonly is set per checkbox, not on the group"
              ?disabled=\${disabled}
            >
              <gds-checkbox
                label="Option A"
                value="a"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-checkbox
                label="Option B"
                value="b"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
            </gds-checkbox-group>

            <gds-radio-group
              label="Radio group"
              supporting-text="Readonly is set per radio, not on the group"
              value="a"
              ?disabled=\${disabled}
            >
              <gds-radio
                label="Option A"
                value="a"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-radio
                label="Option B"
                value="b"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
            </gds-radio-group>
          </gds-flex>
        </gds-grid>
      </gds-card>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const ie=["Showcase"];export{o as Showcase,ie as __namedExportsOrder,te as default};
