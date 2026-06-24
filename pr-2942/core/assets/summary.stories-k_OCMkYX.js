import{b as s}from"./iframe-DzFVIyCe.js";import{a as n}from"./argTableProps-Tx9LS6k9.js";import"./summary-BQz_GMHj.js";import"./datepicker-BNV_-D-i.js";import"./dropdown-Bihc13on.js";import"./option-BD_h28JB.js";import"./menu-heading-C5ifyJnR.js";import"./input-xstoQ1-g.js";import"./rocket-DmxJJofb.js";import"./checkbox-group-CpuSdi99.js";import"./radio-group-hq_1TLGA.js";import"./preload-helper-PPVm8Dsz.js";import"./summary.component-Cx4iItbh.js";import"./query-async-_lNxZH9S.js";import"./datepicker.component-CdaicTYC.js";import"./localized-decorator-KNn13vbd.js";import"./ref-Eg1nMiO6.js";import"./dropdown.component-C6WZeuF3.js";import"./icon.component-BrkZaeUe.js";import"./floating-ui.dom-DPpwG6Py.js";import"./form-control-host.style-B1ALMHMK.js";import"./form-control-header.component-DjGtBWbh.js";import"./badge.component-zauISdAA.js";import"./flex.component-DkXZb1a9.js";import"./triangle-exclamation.component-vkmH2Iig.js";import"./card.component-VLkt9J9g.js";import"./circle-info.component-DOExQyF8.js";import"./unwrap-slots-B3pVezhV.js";import"./checkmark.component-Cl_mNeQ9.js";import"./rbcb-toggle.template-CST-DtPj.js";import"./chevron-bottom.component-BP2yYK-N.js";import"./cross-small.component-CzYY4TNY.js";import"./popover.component-DNQA1hhL.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C--k-zTR.js";import"./calender-add.component-Fjhb_wBv.js";import"./chevron-left.component-C_CXUQkC.js";import"./chevron-right.component-DPSTE9d6.js";import"./alert.component-BMxUp6cz.js";import"./circle-check.component-CGm9DI5H.js";import"./arrow-up.component-ILTe6B6T.js";import"./text.component-Q94igepL.js";import"./default-typography.styles-GHtnlLHb.js";import"./menu-heading.component-DSkhDkkb.js";import"./input.component-Cd0yoVAY.js";import"./textarea.component-B1-0L4u9.js";import"./resize-observer-CfkbZofs.js";import"./rocket.component-CetfLP6U.js";import"./checkbox-group.component-lwDldXQY.js";import"./toggle-control-base.component-Db9YlCMN.js";import"./minus-small.component-CaB5vSab.js";import"./radio-group.component-C4jvGvtF.js";const le={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
