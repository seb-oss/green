import{b as a}from"./iframe-BpAQ9VZy.js";import"./input-CUbm6r6D.js";import"./textarea-Cgitd7OV.js";import"./select-Brt84AjV.js";import"./dropdown-BIKvVJSz.js";import"./option-DW504acG.js";import"./menu-heading-LpHd--IU.js";import"./datepicker-iHcMAgNv.js";import"./checkbox-group-D-yAjjC7.js";import"./radio-group-BmqaP6UN.js";import"./switch-7iYWJLhQ.js";import"./flex-CROMUfRA.js";import"./card-Ccn8YV8P.js";import"./text-DS3kuPe2.js";import"./divider-Cb3-4p_r.js";import"./credit-card-Y68jKJYX.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-UumeD5UY.js";import"./localized-decorator-Ch6Yg0PK.js";import"./query-async-CcedlnKa.js";import"./form-control-host.style-BUMqQYTQ.js";import"./lock.component-wNB7nBir.js";import"./icon.component-WiGKzgyv.js";import"./form-control-header.component-lfuNenIj.js";import"./badge.component-BIThsuWa.js";import"./flex.component-Dz9Dh_To.js";import"./triangle-exclamation.component-X8yktkSx.js";import"./card.component-Boby38wb.js";import"./circle-info.component-Bhpyt3nH.js";import"./cross-small.component-D4eCNqWO.js";import"./textarea.component-B1Harg1j.js";import"./resize-observer-CfkbZofs.js";import"./select.component-BCCNaT95.js";import"./chevron-bottom.component-B2Bd1lMC.js";import"./dropdown.component-BGWtyJcM.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-BSBtB7c_.js";import"./checkmark.component-DVLHqsa3.js";import"./popover.component-DCH3idzJ.js";import"./rbcb-toggle.template-CALnbk5A.js";import"./menu-heading.component-BDUEgBJV.js";import"./datepicker.component-DtbbZrgD.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BW5FsDFh.js";import"./calender-add.component-BMd442JO.js";import"./chevron-left.component-B8JvpJ_y.js";import"./chevron-right.component-DusGOr57.js";import"./checkbox-group.component-6t0lI0KL.js";import"./toggle-control-base.component-A6COmBI8.js";import"./minus-small.component-CZXLOHpx.js";import"./radio-group.component-nhHQJDbK.js";import"./switch.component-BAIHZd9R.js";import"./text.component-jOb8FLYu.js";import"./default-typography.styles-CmnRFBOs.js";import"./credit-card.component-Bb-y10bc.js";const te={title:"Components/Form/Readonly",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds."}}}},o={name:"Readonly",render:n=>{const e=n.state==="disabled",d=n.state==="readonly";return a`
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
