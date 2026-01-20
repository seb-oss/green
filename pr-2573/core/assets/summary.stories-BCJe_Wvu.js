import{x as t}from"./iframe-VzA9xZxk.js";import{a}from"./argTableProps-DrA3g6xw.js";import"./summary-BjdGWW2Q.js";import"./datepicker-YI2VecyB.js";import"./dropdown-BHdIdnkp.js";import"./option-Cu-LtDZf.js";import"./menu-heading-BA9D6qxY.js";import"./input-C-fwOUh5.js";import"./rocket-BFPTD_Qt.js";import"./checkbox-group-BrE8eVzN.js";import"./radio-group-CdDMnT9F.js";import"./summary.component-D6yGUFQm.js";import"./query-async-DoRZOF0v.js";import"./datepicker.component-DWkHI58o.js";import"./localized-decorator-Bq_NlrVe.js";import"./ref-BkwuNWEz.js";import"./calendar.component-BL1pzM7D.js";import"./dropdown.component-BzvgkjPH.js";import"./icon.component-CXqjLzyD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-7av_CiQB.js";import"./form-control-header.component-DODRUrI7.js";import"./badge.component-DQdvDzIv.js";import"./flex.component-CtitCc60.js";import"./triangle-exclamation.component-Ddpw_ePI.js";import"./card.component-Dqs7PlX8.js";import"./unwrap-slots-1CP3EXP1.js";import"./checkmark.component-_9H2j-q4.js";import"./rbcb-toggle.template-Don4HNpP.js";import"./chevron-bottom.component-w5y5RvcS.js";import"./cross-small.component-DvVj-bX9.js";import"./popover.component-Bg6sQVdr.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BM3Zz2qI.js";import"./chevron-left.component-DbQJlm-r.js";import"./chevron-right.component-DeeXiXIX.js";import"./arrow-up.component-DIytkWDW.js";import"./menu-heading.component-DECtQfzQ.js";import"./input.component-D_CQE5pb.js";import"./textarea.component-7NaMQz65.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DTezybyz.js";import"./checkbox-group.component-DqoIrKmv.js";import"./toggle-control-base.component-sVBbKXpI.js";import"./minus-small.component-DrPLDGos.js";import"./radio-group.component-BuvZk9vl.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
