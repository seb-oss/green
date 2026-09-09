import{b as a}from"./iframe-CNPadLMU.js";import"./input-DwOp4ZT2.js";import"./textarea-CyFD_phO.js";import"./select-D44lTYoD.js";import"./dropdown-6Dy8iMmj.js";import"./option-Cc1Q1BaE.js";import"./menu-heading-BuaZM5Vn.js";import"./datepicker-DaRfoNEZ.js";import"./checkbox-group-CAX-HBE1.js";import"./radio-group-Cfac7GjA.js";import"./switch-CvfS39r8.js";import"./flex-ClS-Rak4.js";import"./card-B9PHY490.js";import"./text-I0DUdfb6.js";import"./divider-BAynrcG1.js";import"./credit-card-Bxbzs74C.js";import"./bank-BxYIu8LH.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-B_NdW-SH.js";import"./localized-decorator-CPnzJVOl.js";import"./query-async-CQ0p2qr7.js";import"./form-control-host.style-DgONmNsL.js";import"./lock.component-CTMDrZWZ.js";import"./icon.component-CXBWmE0H.js";import"./form-control-header.component-Clw78pRe.js";import"./badge.component-CTNZ5hr6.js";import"./flex.component-CoRjFOls.js";import"./triangle-exclamation.component-DgiSbAEW.js";import"./card.component-5nQU8xSK.js";import"./circle-info.component-sJP67f19.js";import"./cross-small.component-7MrfIv_O.js";import"./textarea.component-_Be8xmdI.js";import"./resize-observer-CfkbZofs.js";import"./select.component-5BoBUn9R.js";import"./chevron-bottom.component-C1QnsFw5.js";import"./dropdown.component-CynBk8FL.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-mL6yZeD8.js";import"./checkmark.component-DH1ZMrV8.js";import"./popover.component-ywb0PIrL.js";import"./rbcb-toggle.template-B-y6qIOt.js";import"./menu-heading.component-u4XJjw6u.js";import"./datepicker.component-CE6lbscB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BSBuiGdw.js";import"./calender-add.component-BLl9VEZ5.js";import"./chevron-left.component-BJfxvVOZ.js";import"./chevron-right.component-B259J3Vv.js";import"./checkbox-group.component-CVTOeal5.js";import"./toggle-control-base.component-COHmBpb-.js";import"./minus-small.component-DNQDlqLV.js";import"./radio-group.component-tFAh8rNv.js";import"./switch.component-ZqNPOEwb.js";import"./text.component-DAbnq5Gg.js";import"./default-typography.styles-BAnDJVcY.js";import"./credit-card.component-Kxw-IqD4.js";import"./bank.component-BTABJO8L.js";const re={title:"Components/Form/Readonly",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds. Each card also\ndemonstrates the available `size` variants for that control.\n\n`gds-slider` is not covered here yet — readonly support for it is tracked in a separate PR."}}}},n={name:"Readonly",render:d=>{const e=d.state==="disabled",t=d.state==="readonly";return a`
      <gds-grid columns="1; s{2} m{3}" gap="l">
        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Switch large selected"
                size="large"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
              <gds-switch
                label="Switch large unselected"
                size="large"
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
            </gds-flex>
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Switch small selected"
                size="small"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
              <gds-switch
                label="Switch small unselected"
                size="small"
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
            </gds-flex>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-grid columns="1; s{2}" gap="l">
            <gds-radio-group
              label="Radio"
              supporting-text="Large"
              size="large"
              value="1"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="1"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
            </gds-radio-group>
            <gds-radio-group
              label="Radio"
              supporting-text="Small"
              size="small"
              value="1"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="1"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
            </gds-radio-group>
          </gds-grid>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-grid columns="1; s{2}" gap="l">
            <gds-checkbox-group
              label="Checkbox"
              supporting-text="Large"
              size="large"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="1"
                checked
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
            </gds-checkbox-group>
            <gds-checkbox-group
              label="Checkbox"
              supporting-text="Small"
              size="small"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="1"
                checked
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
            </gds-checkbox-group>
          </gds-grid>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-grid columns="1; s{2}" gap="m">
            <gds-datepicker
              label="Date"
              supporting-text="Large, y-m-d"
              value="2025-06-11"
              dateformat="y-m-d"
              size="large"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large datepicker.
              </span>
            </gds-datepicker>
            <gds-datepicker
              label="Date"
              supporting-text="Large, d/m/y"
              value="2025-03-20"
              dateformat="d/m/y"
              size="large"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the alternate large datepicker.
              </span>
            </gds-datepicker>
            <gds-datepicker
              label="Date"
              supporting-text="Small, y-m-d"
              value="2025-06-11"
              dateformat="y-m-d"
              size="small"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small datepicker.
              </span>
            </gds-datepicker>
            <gds-datepicker
              label="Date"
              supporting-text="Small, d/m/y"
              value="2025-03-20"
              dateformat="d/m/y"
              size="small"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the alternate small datepicker.
              </span>
            </gds-datepicker>
          </gds-grid>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-textarea
              label="Textarea"
              supporting-text="Large textarea with lead icon"
              value="Value"
              size="large"
              maxlength="200"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large textarea.
              </span>
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-textarea>
            <gds-textarea
              label="Textarea"
              supporting-text="Small textarea without lead icon"
              value="Value"
              size="small"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small textarea.
              </span>
            </gds-textarea>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-input
              label="Input text"
              supporting-text="Large input with lead icon"
              value="Value"
              size="large"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large input.
              </span>
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-input>
            <gds-input
              label="Input text"
              supporting-text="Small input without lead icon"
              value="Value"
              size="small"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small input.
              </span>
            </gds-input>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-dropdown
              label="Dropdown"
              supporting-text="Medium dropdown"
              value="b"
              size="medium"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the medium dropdown.
              </span>
              <gds-option value="a">Option A</gds-option>
              <gds-option value="b">Option B</gds-option>
              <gds-option value="c">Option C</gds-option>
            </gds-dropdown>
            <gds-dropdown
              label="Dropdown"
              supporting-text="Small dropdown"
              value="b"
              size="small"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small dropdown.
              </span>
              <gds-option value="a">Option A</gds-option>
              <gds-option value="b">Option B</gds-option>
              <gds-option value="c">Option C</gds-option>
            </gds-dropdown>
            <gds-dropdown
              label="Account selector"
              supporting-text="Dropdown with custom trigger content"
              value="account"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the account dropdown.
              </span>
              <gds-icon-bank slot="lead"></gds-icon-bank>
              <gds-flex
                slot="trigger"
                gap="xs"
                width="100%"
                justify-content="space-between"
              >
                <gds-flex flex-direction="column" gap="2xs">
                  <gds-text font="detail-s-regular">Account</gds-text>
                  <gds-text>1234 5677 0987</gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" gap="2xs">
                  <gds-text font="detail-s-regular" text-align="end"
                    >Balance</gds-text
                  >
                  <gds-text text-align="end">4 356.00</gds-text>
                </gds-flex>
              </gds-flex>
              <gds-option value="account">
                <gds-flex gap="xs" width="100%" justify-content="space-between">
                  <gds-flex flex-direction="column" gap="2xs">
                    <gds-text font="detail-s-regular">Account</gds-text>
                    <gds-text>1234 5677 0987</gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" gap="2xs">
                    <gds-text font="detail-s-regular" text-align="end"
                      >Balance</gds-text
                    >
                    <gds-text text-align="end">4 356.00</gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-option>
            </gds-dropdown>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-select
              label="Select"
              supporting-text="Large native select"
              size="large"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large select.
              </span>
              <select>
                <option value="a">Option A</option>
                <option value="b" selected>Option B</option>
                <option value="c">Option C</option>
              </select>
            </gds-select>
            <gds-select
              label="Select"
              supporting-text="Small native select"
              size="small"
              ?disabled=${e}
              ?readonly=${t}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small select.
              </span>
              <select>
                <option value="a">Option A</option>
                <option value="b" selected>Option B</option>
                <option value="c">Option C</option>
              </select>
            </gds-select>
          </gds-flex>
        </gds-card>
      </gds-grid>
    `}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Readonly',
  render: args => {
    const disabled = args.state === 'disabled';
    const readonly = args.state === 'readonly';
    return html\`
      <gds-grid columns="1; s{2} m{3}" gap="l">
        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Switch large selected"
                size="large"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
              <gds-switch
                label="Switch large unselected"
                size="large"
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
            </gds-flex>
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Switch small selected"
                size="small"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
              <gds-switch
                label="Switch small unselected"
                size="small"
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
            </gds-flex>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-grid columns="1; s{2}" gap="l">
            <gds-radio-group
              label="Radio"
              supporting-text="Large"
              size="large"
              value="1"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="1"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
            </gds-radio-group>
            <gds-radio-group
              label="Radio"
              supporting-text="Small"
              size="small"
              value="1"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="1"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
            </gds-radio-group>
          </gds-grid>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-grid columns="1; s{2}" gap="l">
            <gds-checkbox-group
              label="Checkbox"
              supporting-text="Large"
              size="large"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="1"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
            </gds-checkbox-group>
            <gds-checkbox-group
              label="Checkbox"
              supporting-text="Small"
              size="small"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="1"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
            </gds-checkbox-group>
          </gds-grid>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-grid columns="1; s{2}" gap="m">
            <gds-datepicker
              label="Date"
              supporting-text="Large, y-m-d"
              value="2025-06-11"
              dateformat="y-m-d"
              size="large"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large datepicker.
              </span>
            </gds-datepicker>
            <gds-datepicker
              label="Date"
              supporting-text="Large, d/m/y"
              value="2025-03-20"
              dateformat="d/m/y"
              size="large"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the alternate large datepicker.
              </span>
            </gds-datepicker>
            <gds-datepicker
              label="Date"
              supporting-text="Small, y-m-d"
              value="2025-06-11"
              dateformat="y-m-d"
              size="small"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small datepicker.
              </span>
            </gds-datepicker>
            <gds-datepicker
              label="Date"
              supporting-text="Small, d/m/y"
              value="2025-03-20"
              dateformat="d/m/y"
              size="small"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the alternate small datepicker.
              </span>
            </gds-datepicker>
          </gds-grid>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-textarea
              label="Textarea"
              supporting-text="Large textarea with lead icon"
              value="Value"
              size="large"
              maxlength="200"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large textarea.
              </span>
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-textarea>
            <gds-textarea
              label="Textarea"
              supporting-text="Small textarea without lead icon"
              value="Value"
              size="small"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small textarea.
              </span>
            </gds-textarea>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-input
              label="Input text"
              supporting-text="Large input with lead icon"
              value="Value"
              size="large"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large input.
              </span>
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            </gds-input>
            <gds-input
              label="Input text"
              supporting-text="Small input without lead icon"
              value="Value"
              size="small"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small input.
              </span>
            </gds-input>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-dropdown
              label="Dropdown"
              supporting-text="Medium dropdown"
              value="b"
              size="medium"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the medium dropdown.
              </span>
              <gds-option value="a">Option A</gds-option>
              <gds-option value="b">Option B</gds-option>
              <gds-option value="c">Option C</gds-option>
            </gds-dropdown>
            <gds-dropdown
              label="Dropdown"
              supporting-text="Small dropdown"
              value="b"
              size="small"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small dropdown.
              </span>
              <gds-option value="a">Option A</gds-option>
              <gds-option value="b">Option B</gds-option>
              <gds-option value="c">Option C</gds-option>
            </gds-dropdown>
            <gds-dropdown
              label="Account selector"
              supporting-text="Dropdown with custom trigger content"
              value="account"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the account dropdown.
              </span>
              <gds-icon-bank slot="lead"></gds-icon-bank>
              <gds-flex
                slot="trigger"
                gap="xs"
                width="100%"
                justify-content="space-between"
              >
                <gds-flex flex-direction="column" gap="2xs">
                  <gds-text font="detail-s-regular">Account</gds-text>
                  <gds-text>1234 5677 0987</gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" gap="2xs">
                  <gds-text font="detail-s-regular" text-align="end"
                    >Balance</gds-text
                  >
                  <gds-text text-align="end">4 356.00</gds-text>
                </gds-flex>
              </gds-flex>
              <gds-option value="account">
                <gds-flex gap="xs" width="100%" justify-content="space-between">
                  <gds-flex flex-direction="column" gap="2xs">
                    <gds-text font="detail-s-regular">Account</gds-text>
                    <gds-text>1234 5677 0987</gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" gap="2xs">
                    <gds-text font="detail-s-regular" text-align="end"
                      >Balance</gds-text
                    >
                    <gds-text text-align="end">4 356.00</gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-option>
            </gds-dropdown>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-flex flex-direction="column" gap="m">
            <gds-select
              label="Select"
              supporting-text="Large native select"
              size="large"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large select.
              </span>
              <select>
                <option value="a">Option A</option>
                <option value="b" selected>Option B</option>
                <option value="c">Option C</option>
              </select>
            </gds-select>
            <gds-select
              label="Select"
              supporting-text="Small native select"
              size="small"
              ?disabled=\${disabled}
              ?readonly=\${readonly}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small select.
              </span>
              <select>
                <option value="a">Option A</option>
                <option value="b" selected>Option B</option>
                <option value="c">Option C</option>
              </select>
            </gds-select>
          </gds-flex>
        </gds-card>
      </gds-grid>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const ie=["Showcase"];export{n as Showcase,ie as __namedExportsOrder,re as default};
