import{x as t}from"./iframe-CROge5u7.js";import{a}from"./argTableProps-FdZMBgUx.js";import"./summary-BTuNlFEQ.js";import"./datepicker-gzNYQwUG.js";import"./dropdown-WBuMAIv9.js";import"./option-BROCNrxB.js";import"./menu-heading-DpxX9Qs0.js";import"./input-BuFOoLzj.js";import"./rocket-DBrLDkT8.js";import"./checkbox-group-BePJBSQq.js";import"./radio-group-CFl7TsM-.js";import"./summary.component-CPd-ngdM.js";import"./query-async-BMR1f_0t.js";import"./datepicker.component-DBnxjjZh.js";import"./localized-decorator-BsQ1YOEj.js";import"./ref-BG_ND_l_.js";import"./dropdown.component-BwNXGSeD.js";import"./icon.component-Dui71Urp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Clh_dVWQ.js";import"./form-control-header.component-BOkrql4T.js";import"./badge.component-C4b9qd4S.js";import"./flex.component-D9VTUB86.js";import"./triangle-exclamation.component-CmcY8rEv.js";import"./card.component-DsFRrfe7.js";import"./unwrap-slots-C8aTu5ad.js";import"./checkmark.component-y9V5J77X.js";import"./rbcb-toggle.template-DQe4CJPv.js";import"./chevron-bottom.component-C2Vut-Z0.js";import"./cross-small.component-IhdNM4vG.js";import"./popover.component-q5wURwUL.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-tuAgsAiP.js";import"./calender-add.component-BZBuh7lM.js";import"./chevron-left.component-Ct0JXz13.js";import"./chevron-right.component-Bcrp0QIQ.js";import"./arrow-up.component-Dw3YVnXJ.js";import"./menu-heading.component-D4JjeF3q.js";import"./input.component-BjYOBRrv.js";import"./textarea.component-DGmZpT6s.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BKr4hU6r.js";import"./checkbox-group.component-p5MauH8U.js";import"./toggle-control-base.component-zyYcph6g.js";import"./minus-small.component-BDQpvxRe.js";import"./radio-group.component-TuStZe0E.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
