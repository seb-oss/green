import{x as t}from"./iframe-C3UwppBg.js";import{a}from"./argTableProps-DVltGU8L.js";import"./summary-DePqj9uc.js";import"./datepicker-CuiUS4YG.js";import"./dropdown-ChFtrVjj.js";import"./option-Ce5Ipr2G.js";import"./menu-heading-BsK43MS_.js";import"./input-gzYeX2BJ.js";import"./rocket-nt63xAvG.js";import"./checkbox-group-Bj98PtM4.js";import"./radio-group-BJi3lEl5.js";import"./summary.component-DC4BS9Lp.js";import"./query-async-Byi0_PpA.js";import"./datepicker.component-FAXurUzO.js";import"./localized-decorator-r9IxuSjn.js";import"./ref-D6iPKaT3.js";import"./dropdown.component-BnMxFZx_.js";import"./icon.component-B-gqN3-z.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-PofDYVrL.js";import"./form-control-header.component-f0HosiAl.js";import"./badge.component-JJr195X_.js";import"./flex.component-Cm_b3atb.js";import"./triangle-exclamation.component-DUu1oM0L.js";import"./card.component-Cjw_WW6s.js";import"./unwrap-slots-vBIjKyVl.js";import"./checkmark.component-CAZuEC_P.js";import"./rbcb-toggle.template-CwAi53Nk.js";import"./chevron-bottom.component-DKl-Cj7Z.js";import"./cross-small.component-C-AwTQGo.js";import"./popover.component--pZ90zgR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CpKo2tX5.js";import"./calender-add.component-izd8SKYc.js";import"./chevron-left.component-BZIiOPRJ.js";import"./chevron-right.component-DSqmkrnj.js";import"./arrow-up.component-r6VNucvl.js";import"./menu-heading.component-DIGZZOmy.js";import"./input.component-Br4bfKU1.js";import"./textarea.component-wHrwnD2m.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-V1G08xlk.js";import"./checkbox-group.component-CvUV-yOy.js";import"./toggle-control-base.component-DdLZHx1P.js";import"./minus-small.component-CcE2_xeu.js";import"./radio-group.component-Cy5i_MPm.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},Y={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,Y as Usage,tr as __namedExportsOrder,X as default};
