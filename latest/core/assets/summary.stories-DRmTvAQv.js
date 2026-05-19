import{b as s}from"./iframe-BfjVQBhS.js";import{a as T}from"./argTableProps-Qs7z-sFD.js";import"./summary-iJEOmtcD.js";import"./datepicker-CG6RXbG8.js";import"./dropdown-NRdvC807.js";import"./option-__cg0Lor.js";import"./menu-heading-C-PqzWQq.js";import"./input-ChGkYAvI.js";import"./rocket-CpU27-PE.js";import"./checkbox-group-xWJdv1or.js";import"./radio-group-D4WP_YJu.js";import"./preload-helper-Dp1pzeXC.js";import"./summary.component--6ulvF44.js";import"./query-async-DoOeR5E9.js";import"./datepicker.component-B8zonOlM.js";import"./localized-decorator-BcwMFhzh.js";import"./ref-BddKMkQt.js";import"./dropdown.component-DtaaeMzu.js";import"./icon.component-3GLbOB5p.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./form-control-host.style-BU-hyWGr.js";import"./form-control-header.component-CLuwxSq3.js";import"./badge.component-CR-q8Pvq.js";import"./flex.component-C3_-0YKv.js";import"./triangle-exclamation.component-wXhuPvu0.js";import"./card.component-S9m9p97C.js";import"./unwrap-slots-BmZuA9MO.js";import"./checkmark.component-CWbIvAVU.js";import"./rbcb-toggle.template-DMyWnMmw.js";import"./chevron-bottom.component-BvRY5pS_.js";import"./cross-small.component-LD7gsb2L.js";import"./popover.component-D5XlO4V2.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cy1K8UKb.js";import"./calender-add.component-BNKXBR3V.js";import"./chevron-left.component-B7yLvhmg.js";import"./chevron-right.component-BHf1gS4C.js";import"./alert.component-DyeeDVe0.js";import"./circle-check.component-C8QtbHp7.js";import"./arrow-up.component-B71vIsq6.js";import"./text.component-Cp7HIdtR.js";import"./default-typography.styles-DgBJUsWr.js";import"./menu-heading.component-Bz3lvvpe.js";import"./input.component-DteWeIvM.js";import"./textarea.component-CuP8n94y.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BOdVm24p.js";import"./checkbox-group.component-BCcA06NG.js";import"./toggle-control-base.component-6iTSi8ph.js";import"./minus-small.component-C_-uvf4v.js";import"./radio-group.component-DOc9zTrA.js";const Ce={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...T("gds-form-summary")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...d,render:l=>s`<form style="width: 450px" novalidate>
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
    </form>`};var n,u,g,m,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var p,f,v,y,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var h,x,k,w,E;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};var A,q,$,D,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(q=i.parameters)==null?void 0:q.docs)==null?void 0:$.source},description:{story:`When form controls are wrapped in a \`<fieldset>\`, the summary groups the errors
under the fieldset's \`<legend>\` text in a nested list.

Controls outside any fieldset are listed at the top level as usual.

Note: Fieldsets does not currently have any standardised design in Green. They are
mainly considered a semantic grouping element, and styling will differ from case
to case. Below, we just leave default browser styling for clarity in the example.
Oftentimes there will not be any styling at all, just a heading element
used as legend.`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var S,R,P,C,F;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:"Use the `header` slot to provide a custom header for the summary.\n\nThis example uses a `gds-alert` with a `button-label` to show an action button in the header.",...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};const Fe=["Usage","ManualUpdate","NativeControls","WithFieldsets","CustomHeader"];export{o as CustomHeader,r as ManualUpdate,a as NativeControls,t as Usage,i as WithFieldsets,Fe as __namedExportsOrder,Ce as default};
