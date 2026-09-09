import{b as a}from"./iframe-Bzn41Cqm.js";import"./input-CG02yMZP.js";import"./textarea-CV_F9L4B.js";import"./select-CrouuZT3.js";import"./dropdown-CtURvLck.js";import"./option-DSFMUCFF.js";import"./menu-heading-CxFGGb2r.js";import"./datepicker-CCwstQvW.js";import"./checkbox-group-B_q6RaIR.js";import"./radio-group-De9R_KTv.js";import"./switch-C5j_fFt3.js";import"./flex-DFeDoMmc.js";import"./card-CgtkmbeF.js";import"./text-lYSBKqbv.js";import"./divider-C2qZarRU.js";import"./credit-card-MrVfXOHk.js";import"./bank-CUmBtSe7.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-CkB0ZcKD.js";import"./localized-decorator-YmWhUyDF.js";import"./query-async-DUwvIZ05.js";import"./form-control-host.style-CuoqecY0.js";import"./lock.component-DtcgUQkn.js";import"./icon.component-B0MCotOW.js";import"./form-control-header.component-CPyiXCzm.js";import"./badge.component-Bc8PhlFs.js";import"./flex.component-CIHidJru.js";import"./triangle-exclamation.component-CP9Ih-g2.js";import"./card.component-CzQWSGeW.js";import"./circle-info.component-BvR_aMpu.js";import"./cross-small.component-gxUSgMyk.js";import"./textarea.component-DrWruIFW.js";import"./resize-observer-CfkbZofs.js";import"./select.component-Bb-7nET1.js";import"./chevron-bottom.component-DLriWnad.js";import"./dropdown.component-CLwlrW8O.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-D0d9tisS.js";import"./checkmark.component-RnT8aVmb.js";import"./popover.component-BF-vML1I.js";import"./rbcb-toggle.template-DwSeW5jU.js";import"./menu-heading.component-QsJ1mkQA.js";import"./datepicker.component-B4yJXtms.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BtlC8_VG.js";import"./calender-add.component-B3SvXGY1.js";import"./chevron-left.component-D1HD5wh_.js";import"./chevron-right.component-ZkWNt-IV.js";import"./checkbox-group.component-qbCeokMh.js";import"./toggle-control-base.component-BlWO0MxZ.js";import"./minus-small.component-DZFEKUwc.js";import"./radio-group.component-C8neQiPt.js";import"./switch.component-CEQLjaWf.js";import"./text.component-CaLnjFlb.js";import"./default-typography.styles-PZXqhJ0n.js";import"./credit-card.component-eMY_ISvQ.js";import"./bank.component-CmxEudbu.js";const re={title:"Components/Form/Readonly",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds. Each card also\ndemonstrates the available `size` variants for that control.\n\n`gds-slider` is not covered here yet — readonly support for it is tracked in a separate PR."}}}},n={name:"Readonly",render:d=>{const e=d.state==="disabled",t=d.state==="readonly";return a`
      <gds-grid columns="1; m{2}; l{3}" gap="l">
        <gds-card variant="neutral-02-outlined">
          <gds-text font="heading-xs">Read only - switch</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Label"
                size="large"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
              <gds-switch
                label="Label"
                size="large"
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Label"
                size="small"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-switch>
              <gds-switch
                label="Label"
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
          <gds-text font="heading-xs">Read only - radio</gds-text>
          <gds-flex gap="l">
            <gds-radio-group
              label="Large radio group"
              supporting-text="Label support text."
              size="large"
              value="1"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="1"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
            </gds-radio-group>
            <gds-radio-group
              label="Small radio group"
              supporting-text="Label support text."
              size="small"
              value="1"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="1"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-radio>
            </gds-radio-group>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-text font="heading-xs">Read only - checkbox</gds-text>
          <gds-flex gap="l">
            <gds-checkbox-group
              label="Large checkbox group"
              supporting-text="Label support text."
              size="large"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="1"
                checked
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
            </gds-checkbox-group>
            <gds-checkbox-group
              label="Small checkbox group"
              supporting-text="Label support text."
              size="small"
              ?disabled=${e}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="1"
                checked
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=${e}
                ?readonly=${t}
              ></gds-checkbox>
            </gds-checkbox-group>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-text font="heading-xs">Read only - datepicker</gds-text>
          <gds-grid columns="2" gap="m">
            <gds-datepicker
              label="Datum"
              supporting-text="Label support text."
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
              supporting-text="Label support text."
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
              label="Datum"
              supporting-text="Label support text."
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
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - textarea</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-textarea
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - input text</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-input
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - dropdown</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-dropdown
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - select</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-select
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
      <gds-grid columns="1; m{2}; l{3}" gap="l">
        <gds-card variant="neutral-02-outlined">
          <gds-text font="heading-xs">Read only - switch</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Label"
                size="large"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
              <gds-switch
                label="Label"
                size="large"
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-flex flex-direction="column" gap="s" width="100%">
              <gds-switch
                label="Label"
                size="small"
                checked
                width="100%"
                justify-content="space-between"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-switch>
              <gds-switch
                label="Label"
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
          <gds-text font="heading-xs">Read only - radio</gds-text>
          <gds-flex gap="l">
            <gds-radio-group
              label="Large radio group"
              supporting-text="Label support text."
              size="large"
              value="1"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="1"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
            </gds-radio-group>
            <gds-radio-group
              label="Small radio group"
              supporting-text="Label support text."
              size="small"
              value="1"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small radio group.
              </span>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="1"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
              <gds-radio
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-radio>
            </gds-radio-group>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-text font="heading-xs">Read only - checkbox</gds-text>
          <gds-flex gap="l">
            <gds-checkbox-group
              label="Large checkbox group"
              supporting-text="Label support text."
              size="large"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the large checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="1"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
            </gds-checkbox-group>
            <gds-checkbox-group
              label="Small checkbox group"
              supporting-text="Label support text."
              size="small"
              ?disabled=\${disabled}
            >
              <span slot="extended-supporting-text">
                Extended supporting text for the small checkbox group.
              </span>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="1"
                checked
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
              <gds-checkbox
                label="Label"
                supporting-text="Label support text."
                value="2"
                ?disabled=\${disabled}
                ?readonly=\${readonly}
              ></gds-checkbox>
            </gds-checkbox-group>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined">
          <gds-text font="heading-xs">Read only - datepicker</gds-text>
          <gds-grid columns="2" gap="m">
            <gds-datepicker
              label="Datum"
              supporting-text="Label support text."
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
              supporting-text="Label support text."
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
              label="Datum"
              supporting-text="Label support text."
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
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - textarea</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-textarea
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - input text</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-input
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - dropdown</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-dropdown
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
          <gds-text font="heading-xs">Read only - select</gds-text>
          <gds-flex flex-direction="column" gap="m">
            <gds-select
              label="Label"
              supporting-text="Label support text."
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
              label="Label"
              supporting-text="Label support text."
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
}`,...n.parameters?.docs?.source}}};const pe=["Showcase"];export{n as Showcase,pe as __namedExportsOrder,re as default};
