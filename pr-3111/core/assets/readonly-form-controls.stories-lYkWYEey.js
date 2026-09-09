import{b as n}from"./iframe-Bzn41Cqm.js";import"./input-CG02yMZP.js";import"./textarea-CV_F9L4B.js";import"./select-CrouuZT3.js";import"./dropdown-CtURvLck.js";import"./option-DSFMUCFF.js";import"./menu-heading-CxFGGb2r.js";import"./datepicker-CCwstQvW.js";import"./checkbox-group-B_q6RaIR.js";import"./radio-group-De9R_KTv.js";import"./switch-C5j_fFt3.js";import"./flex-DFeDoMmc.js";import"./card-CgtkmbeF.js";import"./text-lYSBKqbv.js";import"./divider-C2qZarRU.js";import"./credit-card-MrVfXOHk.js";import"./preload-helper-PPVm8Dsz.js";import"./input.component-CkB0ZcKD.js";import"./localized-decorator-YmWhUyDF.js";import"./query-async-DUwvIZ05.js";import"./form-control-host.style-CuoqecY0.js";import"./lock.component-DtcgUQkn.js";import"./icon.component-B0MCotOW.js";import"./form-control-header.component-CPyiXCzm.js";import"./badge.component-Bc8PhlFs.js";import"./flex.component-CIHidJru.js";import"./triangle-exclamation.component-CP9Ih-g2.js";import"./card.component-CzQWSGeW.js";import"./circle-info.component-BvR_aMpu.js";import"./cross-small.component-gxUSgMyk.js";import"./textarea.component-DrWruIFW.js";import"./resize-observer-CfkbZofs.js";import"./select.component-Bb-7nET1.js";import"./chevron-bottom.component-DLriWnad.js";import"./dropdown.component-CLwlrW8O.js";import"./floating-ui.dom-DzQH3ivI.js";import"./menu-listbox.style-D0d9tisS.js";import"./checkmark.component-RnT8aVmb.js";import"./popover.component-BF-vML1I.js";import"./rbcb-toggle.template-DwSeW5jU.js";import"./menu-heading.component-QsJ1mkQA.js";import"./datepicker.component-B4yJXtms.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BtlC8_VG.js";import"./calender-add.component-B3SvXGY1.js";import"./chevron-left.component-D1HD5wh_.js";import"./chevron-right.component-ZkWNt-IV.js";import"./checkbox-group.component-qbCeokMh.js";import"./toggle-control-base.component-BlWO0MxZ.js";import"./minus-small.component-DZFEKUwc.js";import"./radio-group.component-C8neQiPt.js";import"./switch.component-CEQLjaWf.js";import"./text.component-CaLnjFlb.js";import"./default-typography.styles-PZXqhJ0n.js";import"./credit-card.component-eMY_ISvQ.js";const re={title:"Patterns/Readonly form controls",tags:["autodocs"],argTypes:{state:{options:["regular","disabled","readonly"],control:{type:"radio"}}},args:{state:"readonly"},parameters:{docs:{description:{component:"Green Core form controls support a shared `readonly` state, distinct from `disabled`: the\nvalue still submits with the form and the control stays focusable, but it can't be edited.\n\nUse the `state` control in the panel to switch every control below between its regular,\ndisabled, and readonly states at once, to compare how each one responds."}}}},t={name:"Readonly",render:d=>{const e=d.state==="disabled",o=d.state==="readonly";return n`
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
