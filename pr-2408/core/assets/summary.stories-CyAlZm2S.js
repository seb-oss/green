import{x as a}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-JCwMc-ng.js";import"./summary-BUyLTb8w.js";import"./datepicker-CiGppsY7.js";import"./option-CFUGe7TS.js";import"./menu-heading-Bupcb2oF.js";import"./input-D0DmLNB1.js";import"./rocket-Dol7SEMu.js";import"./checkbox-group-CBC-j3jo.js";import"./radio-group-S4JIeRuT.js";import"./custom-elements-D6iDY-8L.js";import"./datepicker.component-CnUI0Z1B.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-N5V2wMzn.js";import"./if-defined-BAXgs-ZI.js";import"./static-B8S6DEnV.js";import"./gds-element-DTROifYq.js";import"./tokens.style-BAmYQ5hh.js";import"./transitional-styles-DlCTkooe.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./watch-tFciLXSI.js";import"./dropdown.component-ByauDECI.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-CHnPGX4b.js";import"./form-control-header.component-BLq_NzxM.js";import"./badge.component-rhhSpVRb.js";import"./flex.component-DFgQuJpw.js";import"./div.component-DqlLNNPU.js";import"./triangle-exclamation.component-Bsq9LNPF.js";import"./icon-DNXzWdP7.js";import"./card.component-BMnRrLcb.js";import"./unwrap-slots-dIUgOhQO.js";import"./checkmark.component-CMszfN2f.js";import"./rbcb-toggle.template-B-MDayTD.js";import"./chevron-bottom.component-B9RUDwQy.js";import"./cross-large.component-B4zJw8KZ.js";import"./popover.component-CWjW8C4-.js";import"./cross-small.component-BZQy3guX.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BJJoKX9r.js";import"./calender-add.component-BWdXMglP.js";import"./chevron-right.component-cbPv3zCv.js";import"./menu-heading.component-tnrTPgF3.js";import"./input.component-BhlUyCvF.js";import"./rocket.component-BPgoe1UC.js";import"./radio.component-5wWFVnGg.js";import"./context-menu.component-saXtt_9_.js";import"./dot-grid-one-horizontal-dVak9lUp.js";import"./breadcrumbs.component-BvO39ZZZ.js";import"./coachmark.component-qv9mg8wx.js";import"./divider.component-C6MmnNH8.js";import"./filter-chips.component-DATk9-ST.js";import"./resize-observer-B9k8v2TZ.js";import"./arrow-up.component-Cyl07BCr.js";import"./grid.component-IhKL6-G5.js";import"./grouped-list.component-C3jAbB5E.js";import"./zoom-out.component-CsXufbpE.js";import"./arrow-down.component-CofpnaP-.js";import"./arrow-left.component-l4yWtTzD.js";import"./arrow-right.component-C3bixHJa.js";import"./arrow-rotate-counter-clockwise.component-C5Ga-Xlj.js";import"./sun.component-BLjJb_8g.js";import"./star.component-DXkULxFV.js";import"./bubbles.component-BasDrd0a.js";import"./chain-link.component-CCgxGW73.js";import"./chevron-top.component-CcPQbOpR.js";import"./circle-check.component-DVHjtZ3V.js";import"./circles-three.component-BYSkC16y.js";import"./credit-card.component-DMXRsE4v.js";import"./folder.component-pIHXEfbL.js";import"./magnifying-glass.component-B5y7l47I.js";import"./people-profile.component-BYJNvc4a.js";import"./push.component-DoqR2927.js";import"./square-grid-circle.component-B7O-o6lN.js";import"./img.component-cEQ4dLI2.js";import"./link.component-DFskFAAq.js";import"./mask.component-BaSt7jDX.js";import"./menu-button.component-MAcelwmH.js";import"./segmented-control.component-Brwm-sDw.js";import"./select.component-Cm_Zb2fO.js";import"./signal.component-DMHsDFhM.js";import"./spinner.component-nFtDJGiY.js";import"./text.component-DPk3dPFa.js";import"./textarea.component-caSPTn9W.js";import"./theme.component-C-dLwHeW.js";import"./video.component-CNMx5OMa.js";const pe={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...w("gds-form-summary")}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},e={...i,render:s=>a`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="subtle-01"
        padding="l"
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-checkbox-group
          direction="row"
          label="Mission type"
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"At least one mission type is required"]}}}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=${{validate:r=>{if(r.value===void 0)return[{...r.validity,valid:!1,customError:!0},"A rocket type is required"]}}}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
        <gds-dropdown
          label="Astronaut"
          .validator=${{validate:r=>{if(r.value!=="cat")return[{...r.validity,valid:!1,customError:!0},r.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=${{validate:r=>{if(r.value===void 0)return[{...r.validity,valid:!1,customError:!0},"A date is required"]}}}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=${{validate:r=>{if(r.value==="")return[{...r.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},t={...i,render:s=>a`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:r=>{if(r.value==="")return[{...r.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `},o={...i,render:s=>a`<form style="width: 450px">
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
    </form> `};var d,n,l,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="subtle-01"
        padding="l"
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var u,c,g,v,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,b,h,x,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const ue=["Usage","ManualUpdate","NativeControls"];export{t as ManualUpdate,o as NativeControls,e as Usage,ue as __namedExportsOrder,pe as default};
