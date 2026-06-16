import{b as s}from"./iframe-BSZXZYIs.js";import{a as n}from"./argTableProps-CxV3XV9a.js";import"./summary-SEu2FsSR.js";import"./datepicker-CwYhgluL.js";import"./dropdown-D5VxXs9I.js";import"./option-CcF_zvkv.js";import"./menu-heading-Cbb2R4uO.js";import"./input-8MFZVjdt.js";import"./rocket-DhR9wrZt.js";import"./checkbox-group-CINJHssb.js";import"./radio-group-BfA4DVf5.js";import"./preload-helper-PPVm8Dsz.js";import"./summary.component-Q_Olba_D.js";import"./query-async-BEOm-Dr8.js";import"./datepicker.component-Dx6hGqkR.js";import"./localized-decorator-DIm6KQsR.js";import"./ref-TWo5kqdn.js";import"./dropdown.component-U29KRwA9.js";import"./icon.component-C4Rz_KwB.js";import"./floating-ui.dom-DPpwG6Py.js";import"./form-control-host.style-IxZFGzqS.js";import"./form-control-header.component-CI-7dfkE.js";import"./badge.component-DdorslVb.js";import"./flex.component-CLYsO7Fp.js";import"./triangle-exclamation.component-DNM2PhF8.js";import"./card.component-JmY4UjAl.js";import"./circle-info.component-BCA_FdPy.js";import"./unwrap-slots-DDi2Ywz9.js";import"./checkmark.component-DN8a5_RF.js";import"./rbcb-toggle.template-aW0T71qx.js";import"./chevron-bottom.component-DINrORnq.js";import"./cross-small.component-aTJ8EOaj.js";import"./popover.component-DbRWdPIi.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DoE89sdl.js";import"./calender-add.component-DmqNdLAE.js";import"./chevron-left.component-B4m24qT_.js";import"./chevron-right.component-D2M8I7RT.js";import"./alert.component--UMVoGBT.js";import"./circle-check.component-Bn4Td4GD.js";import"./arrow-up.component-CJUbXWTt.js";import"./text.component-DBe5kr_I.js";import"./default-typography.styles-C-Jt-k6g.js";import"./menu-heading.component-C9Qlng5J.js";import"./input.component-DdGdsvmf.js";import"./textarea.component-DQnq5fgE.js";import"./resize-observer-CfkbZofs.js";import"./rocket.component-B3ky15KV.js";import"./checkbox-group.component-CG6JRI4c.js";import"./toggle-control-base.component-g-nkHssV.js";import"./minus-small.component-Dae0oC4O.js";import"./radio-group.component-BYIn1TBE.js";const le={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...n("gds-form-summary")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...d,render:l=>s`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="neutral-02"
        border-color="subtle-01"
        padding="l"
        outline
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-checkbox-group
          direction="row"
          label="Mission type"
          .validator=${{validate:e=>{if(e.value.length===0)return[{...e.validity,valid:!1,customError:!0},"At least one mission type is required"]}}}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=${{validate:e=>{if(e.value===void 0)return[{...e.validity,valid:!1,customError:!0},"A rocket type is required"]}}}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
        <gds-dropdown
          label="Astronaut"
          .validator=${{validate:e=>{if(e.value!=="cat")return[{...e.validity,valid:!1,customError:!0},e.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=${{validate:e=>{if(e.value===void 0)return[{...e.validity,valid:!1,customError:!0},"A date is required"]}}}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=${!0}
          .validator=${{validate:e=>{if(e.value.length===0)return[{...e.validity,valid:!1,customError:!0},"You must agree to the terms and conditions"]}}}
        >
          <gds-checkbox
            value="terms-and-conditions"
            label="I agree to the terms and conditions"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},r={...d,render:l=>s`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `},a={...d,render:l=>s`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> `},i={...d,render:l=>s`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="neutral-02"
        border-color="subtle-01"
        padding="l"
        outline
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-input
          label="Mission name"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A mission name is required"]}}}
        ></gds-input>
        <fieldset>
          <legend>Crew details</legend>
          <gds-flex flex-direction="column" gap="m">
            <gds-input
              label="Commander"
              .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A commander is required"]}}}
            ></gds-input>
            <gds-input
              label="Pilot"
              .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A pilot is required"]}}}
            ></gds-input>
          </gds-flex>
        </fieldset>
        <fieldset>
          <legend>Vehicle details</legend>
          <gds-flex flex-direction="column" gap="m">
            <gds-dropdown
              label="Rocket type"
              .validator=${{validate:e=>{if(e.value===void 0)return[{...e.validity,valid:!1,customError:!0},"A rocket type is required"]}}}
            >
              <gds-option>Select a rocket</gds-option>
              <gds-option value="falcon">Falcon</gds-option>
              <gds-option value="starship">Starship</gds-option>
            </gds-dropdown>
            <gds-input
              label="Launch pad"
              .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A launch pad is required"]}}}
            ></gds-input>
          </gds-flex>
        </fieldset>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},o={...d,render:l=>s`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="neutral-02"
        border-color="subtle-01"
        padding="l"
        outline
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-input
          label="Mission name"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A mission name is required"]}}}
        ></gds-input>
        <gds-input
          label="Designation"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-form-summary reactive>
          <gds-alert slot="header" variant="negative" button-label="Get help">
            Please fix the errors below before submitting
          </gds-alert>
        </gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="neutral-02"
        border-color="subtle-01"
        padding="l"
        outline
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-checkbox-group
          direction="row"
          label="Mission type"
          .validator=\${{
    validate: (el: any) => {
      if (el.value.length === 0) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'At least one mission type is required'];
    }
  }}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A rocket type is required'];
    }
  }}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
        <gds-dropdown
          label="Astronaut"
          .validator=\${{
    validate: (el: any) => {
      if (el.value !== 'cat') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, el.value === undefined ? 'An astronaut is required' : 'Only cats can pilot rockets!'];
    }
  }}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A date is required'];
    }
  }}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
        ></gds-input>
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value.length === 0) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'You must agree to the terms and conditions'];
    }
  }}
        >
          <gds-checkbox
            value="terms-and-conditions"
            label="I agree to the terms and conditions"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>\`
}`,...t.parameters?.docs?.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> \`
}`,...r.parameters?.docs?.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> \`
}`,...a.parameters?.docs?.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="neutral-02"
        border-color="subtle-01"
        padding="l"
        outline
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-input
          label="Mission name"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A mission name is required'];
    }
  }}
        ></gds-input>
        <fieldset>
          <legend>Crew details</legend>
          <gds-flex flex-direction="column" gap="m">
            <gds-input
              label="Commander"
              .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A commander is required'];
    }
  }}
            ></gds-input>
            <gds-input
              label="Pilot"
              .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A pilot is required'];
    }
  }}
            ></gds-input>
          </gds-flex>
        </fieldset>
        <fieldset>
          <legend>Vehicle details</legend>
          <gds-flex flex-direction="column" gap="m">
            <gds-dropdown
              label="Rocket type"
              .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A rocket type is required'];
    }
  }}
            >
              <gds-option>Select a rocket</gds-option>
              <gds-option value="falcon">Falcon</gds-option>
              <gds-option value="starship">Starship</gds-option>
            </gds-dropdown>
            <gds-input
              label="Launch pad"
              .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A launch pad is required'];
    }
  }}
            ></gds-input>
          </gds-flex>
        </fieldset>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>\`
}`,...i.parameters?.docs?.source},description:{story:`When form controls are wrapped in a \`<fieldset>\`, the summary groups the errors
under the fieldset's \`<legend>\` text in a nested list.

Controls outside any fieldset are listed at the top level as usual.

Note: Fieldsets does not currently have any standardised design in Green. They are
mainly considered a semantic grouping element, and styling will differ from case
to case. Below, we just leave default browser styling for clarity in the example.
Oftentimes there will not be any styling at all, just a heading element
used as legend.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="neutral-02"
        border-color="subtle-01"
        padding="l"
        outline
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-input
          label="Mission name"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A mission name is required'];
    }
  }}
        ></gds-input>
        <gds-input
          label="Designation"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
        ></gds-input>
        <gds-form-summary reactive>
          <gds-alert slot="header" variant="negative" button-label="Get help">
            Please fix the errors below before submitting
          </gds-alert>
        </gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>\`
}`,...o.parameters?.docs?.source},description:{story:"Use the `header` slot to provide a custom header for the summary.\n\nThis example uses a `gds-alert` with a `button-label` to show an action button in the header.",...o.parameters?.docs?.description}}};const ne=["Usage","ManualUpdate","NativeControls","WithFieldsets","CustomHeader"];export{o as CustomHeader,r as ManualUpdate,a as NativeControls,t as Usage,i as WithFieldsets,ne as __namedExportsOrder,le as default};
