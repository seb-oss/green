import{x as t}from"./iframe-DMCXEGAu.js";import{a}from"./argTableProps-DXTGrysM.js";import"./summary-BNWdIExm.js";import"./datepicker-Io4m9Pej.js";import"./dropdown-CjgJDvGv.js";import"./option-CKEYWPXY.js";import"./menu-heading-aQMicsKw.js";import"./input-BFcrpJIg.js";import"./rocket-qpV--lxM.js";import"./checkbox-group-CRNGS8Fy.js";import"./radio-group-Ck7iGa0F.js";import"./summary.component-DXqe5App.js";import"./query-async-R6IyWz66.js";import"./datepicker.component-BuFR-g7g.js";import"./localized-decorator-BZdAib6r.js";import"./ref-BHw8Lwyk.js";import"./dropdown.component-CjjavJF5.js";import"./icon.component-Biye4ssi.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C25skd3j.js";import"./form-control-header.component-CiO1KsOp.js";import"./badge.component-Dr7Ia8kr.js";import"./flex.component-BKRTXpEx.js";import"./triangle-exclamation.component-Cyzgb3Lg.js";import"./card.component-Pu_1pl35.js";import"./unwrap-slots-wNymKo7B.js";import"./checkmark.component-DQrtt9So.js";import"./rbcb-toggle.template-BJL2ueSN.js";import"./chevron-bottom.component-DljMsFHf.js";import"./cross-small.component-BXsopI24.js";import"./popover.component-BMzFlfQP.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BB581TC0.js";import"./calender-add.component-jaTFxpDl.js";import"./chevron-left.component-DUNMUO0-.js";import"./chevron-right.component-BN33GBC0.js";import"./arrow-up.component-C802Zc6-.js";import"./menu-heading.component-GWsPwSET.js";import"./input.component-DSOTDrr-.js";import"./textarea.component-nuXwhWtS.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D4hfx5N_.js";import"./checkbox-group.component-BCLlQxBW.js";import"./toggle-control-base.component-cWM3c-NE.js";import"./minus-small.component-DoSeyGAj.js";import"./radio-group.component-Cw69hEyP.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
