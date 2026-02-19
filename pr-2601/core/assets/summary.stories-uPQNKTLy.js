import{x as t}from"./iframe-B9L5cDd9.js";import{a}from"./argTableProps-lQtjm2ap.js";import"./summary-CphGyux9.js";import"./datepicker-BjJMiLZa.js";import"./dropdown-BPcnuJfI.js";import"./option-Xgk4FowU.js";import"./menu-heading-D9pXNaaf.js";import"./input-KCvMZTUw.js";import"./rocket-BW_NVNCs.js";import"./checkbox-group-DOIaNriQ.js";import"./radio-group-Bks7cKKf.js";import"./summary.component-DLbb0JeZ.js";import"./query-async-15vcSpXQ.js";import"./datepicker.component-BUQ6AmCo.js";import"./localized-decorator-suM3up7b.js";import"./ref-CXnnrg1O.js";import"./dropdown.component-C1pSjZkh.js";import"./icon.component-DTf-Gz4F.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BMW8l9IH.js";import"./form-control-header.component-BAIgguEK.js";import"./badge.component-C5qkqPGe.js";import"./flex.component-CXSgO6r7.js";import"./triangle-exclamation.component-CaDVKhqF.js";import"./card.component-CMuc6MV-.js";import"./unwrap-slots-zYyJIKfa.js";import"./checkmark.component-26xCfbEw.js";import"./rbcb-toggle.template-CF4T63Ax.js";import"./chevron-bottom.component-CVR91JHe.js";import"./cross-small.component-VsCMlNGP.js";import"./popover.component-DAZCd1M1.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DTJbDsI2.js";import"./calender-add.component-Cfo7c7qN.js";import"./chevron-left.component-B-gPIvuM.js";import"./chevron-right.component-B6cd-Z4B.js";import"./arrow-up.component-mM6pRj1k.js";import"./menu-heading.component-BIrHyIaw.js";import"./input.component-CXuBD-qW.js";import"./textarea.component-C25TThVN.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DjKvTIEK.js";import"./checkbox-group.component-BTc_lUfb.js";import"./toggle-control-base.component-CRY4eUz3.js";import"./minus-small.component-SBjmHZ0r.js";import"./radio-group.component-CEIMejWY.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
