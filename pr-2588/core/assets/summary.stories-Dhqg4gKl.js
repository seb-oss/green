import{x as t}from"./iframe-CEr8kq7n.js";import{a}from"./argTableProps-BdS5mSvC.js";import"./summary-wMNbLN5_.js";import"./datepicker-Cta6AEu8.js";import"./dropdown-CIDvLGH9.js";import"./option-ChOz4yg5.js";import"./menu-heading-gB4MUFwJ.js";import"./input-D-5sb8sO.js";import"./rocket-DyhOYkXA.js";import"./checkbox-group-Cy_qLFWF.js";import"./radio-group-CJ9the5_.js";import"./summary.component-D95csxXK.js";import"./query-async-O84IIooM.js";import"./datepicker.component-CwaIZdud.js";import"./localized-decorator-DBSxKBVf.js";import"./ref-Ck05u333.js";import"./dropdown.component-CL8FPodo.js";import"./icon.component-Bz9bZ4M8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BJB2Vp5t.js";import"./form-control-header.component-DwYCTWfo.js";import"./badge.component-D4t5GMwU.js";import"./flex.component-J8rJot38.js";import"./triangle-exclamation.component-DkRk6WHw.js";import"./card.component-InDchyva.js";import"./unwrap-slots-BxUZEgx8.js";import"./checkmark.component-D_t60CCP.js";import"./rbcb-toggle.template-DqVfUwRq.js";import"./chevron-bottom.component-BopZzeeK.js";import"./cross-small.component-COweo3Gn.js";import"./popover.component-BRzpFzV6.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BkqyXqIj.js";import"./calender-add.component-DqykEQB0.js";import"./chevron-left.component-DaC9x6mA.js";import"./chevron-right.component-DlYmRnOQ.js";import"./arrow-up.component-B8F8cSi1.js";import"./menu-heading.component-GiXoW28f.js";import"./input.component-B38GwjCF.js";import"./textarea.component-DGYz9BWA.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Ds6k8ass.js";import"./checkbox-group.component-ClumMr88.js";import"./toggle-control-base.component-aSLmURga.js";import"./minus-small.component-BZbKdPlx.js";import"./radio-group.component-Dw3vy6Ds.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},X={...o,render:e=>t`<form style="width: 450px" novalidate>
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
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=${!0}
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"You must agree to the terms and conditions"]}}}
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
    </form>`},Z={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},rr={...o,render:e=>t`<form style="width: 450px">
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,X as Usage,tr as __namedExportsOrder,W as default};
