import{x as t}from"./iframe-B7YZgcKE.js";import{a}from"./argTableProps-8aT8fwsa.js";import"./summary-BmLTd39z.js";import"./datepicker-BqYcQ2cm.js";import"./dropdown-BMhPKx3K.js";import"./option-duIBxoe9.js";import"./menu-heading-DyI5Tm9S.js";import"./input-Cih-d4jg.js";import"./rocket-Ckztt4w1.js";import"./checkbox-group-BNuqYOcK.js";import"./radio-group-DUtLRDPQ.js";import"./summary.component-C6o6j1-6.js";import"./query-async-B9r_CwhL.js";import"./datepicker.component-gQVk6afl.js";import"./localized-decorator-aCGv7-Sm.js";import"./ref-_oNRtmGK.js";import"./dropdown.component-BrKjjvfX.js";import"./icon.component-Dtfi0Lwn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CNPMkPel.js";import"./form-control-header.component-BTaSv3wA.js";import"./badge.component-CB_vS-qH.js";import"./flex.component-B_v7FAOT.js";import"./triangle-exclamation.component-BLI8ze78.js";import"./card.component-B0_KtSxN.js";import"./unwrap-slots-Dkw33vOU.js";import"./checkmark.component-GDUWbEI7.js";import"./rbcb-toggle.template-8Xi1_ClC.js";import"./chevron-bottom.component-BUha6v4z.js";import"./cross-small.component-BkkhB4rq.js";import"./popover.component-DNezKekH.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Dv331yRC.js";import"./calender-add.component-DYxl35qH.js";import"./chevron-left.component-kHw-4T6c.js";import"./chevron-right.component-CPLzPlg0.js";import"./arrow-up.component-BQL1gsoi.js";import"./menu-heading.component-vtuiZcB2.js";import"./input.component-C4oVRCsz.js";import"./textarea.component-DqSB4MS9.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DigZYwXz.js";import"./checkbox-group.component-DnqVp3wD.js";import"./toggle-control-base.component-58TFZk4b.js";import"./minus-small.component-f2sMn6-l.js";import"./radio-group.component-B2YgFr4o.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
