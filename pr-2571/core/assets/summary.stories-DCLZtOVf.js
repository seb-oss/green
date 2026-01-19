import{x as t}from"./iframe-CGSLjpeR.js";import{a}from"./argTableProps-CGq1uyqY.js";import"./summary-o2Hki78S.js";import"./datepicker-D5XCC-hP.js";import"./dropdown-cffOVmoW.js";import"./option-BD3dmyS3.js";import"./menu-heading-CLFGDJNw.js";import"./input-CAlWpvfn.js";import"./rocket-BfGyXsO_.js";import"./checkbox-group-CZKYfsqh.js";import"./radio-group-Dh7qVwYu.js";import"./summary.component-BaaWXH0D.js";import"./query-async-ClBGR0Yh.js";import"./datepicker.component-Cy8mWwRN.js";import"./localized-decorator-BeZC_Pw3.js";import"./ref-CUBi9cHg.js";import"./calendar.component-B-1VpNMt.js";import"./dropdown.component-DHfUTIjC.js";import"./icon.component-Dwpe8fY6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DSDBBV61.js";import"./form-control-header.component-UdmzLak4.js";import"./badge.component-CtAPJgXt.js";import"./flex.component-9qGYLtSv.js";import"./triangle-exclamation.component-CbVacNzD.js";import"./card.component-CCf2EyhB.js";import"./unwrap-slots-6EIUOMtq.js";import"./checkmark.component-DF4PmrgK.js";import"./rbcb-toggle.template-DP-AL77Z.js";import"./chevron-bottom.component-mMbtsPoJ.js";import"./cross-small.component-BSEwZ0sF.js";import"./popover.component-mN0uwBNZ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CaEmq4jV.js";import"./chevron-left.component-4RMoiUoY.js";import"./chevron-right.component-BuQ1KXGY.js";import"./arrow-up.component-BBqzryGC.js";import"./menu-heading.component-VYZRn5CL.js";import"./input.component-B2AHFYxW.js";import"./textarea.component-CDkaTYWG.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DJcyqhL2.js";import"./checkbox-group.component-CqbIS_Kq.js";import"./toggle-control-base.component-Cm1SiQDF.js";import"./minus-small.component-C13Njo71.js";import"./radio-group.component-BTNZQuWi.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
