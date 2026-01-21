import{x as t}from"./iframe-CASzBLiX.js";import{a}from"./argTableProps-Crw-rEn1.js";import"./summary-nD7OW_-Z.js";import"./datepicker-BT-ZckY_.js";import"./dropdown-DrYgPcwZ.js";import"./option-DVRmOIhT.js";import"./menu-heading-Kcu_B0bn.js";import"./input-DReQceQU.js";import"./rocket-CYcaP859.js";import"./checkbox-group-DwOGPyTM.js";import"./radio-group-Caqj3PmB.js";import"./summary.component-C04UtsL-.js";import"./query-async-JOtXqRwS.js";import"./datepicker.component-DYplGoCH.js";import"./localized-decorator-DF6OGrp7.js";import"./ref-B1BN-HNl.js";import"./dropdown.component-BueQ07Vs.js";import"./icon.component-BY-elVrn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-By49Sw8r.js";import"./form-control-header.component-CtZlpb3T.js";import"./badge.component-CeD1F_hp.js";import"./flex.component-J9b9vMFV.js";import"./triangle-exclamation.component-CemM0Ldo.js";import"./card.component-qdMohuXC.js";import"./unwrap-slots-gGUh70_S.js";import"./checkmark.component-DqJk4RJa.js";import"./rbcb-toggle.template-Z5XHI-SR.js";import"./chevron-bottom.component-DY0VYxqM.js";import"./cross-small.component-C3uZ6q8R.js";import"./popover.component-BWvH1eIw.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-nigdUNyW.js";import"./calender-add.component-C3GgoAUz.js";import"./chevron-left.component-BuXYVa1j.js";import"./chevron-right.component-BVNaxx-x.js";import"./arrow-up.component-BfaMab3v.js";import"./menu-heading.component-D268mlc3.js";import"./input.component-CTSPVCnq.js";import"./textarea.component-CsBTFt3d.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DcFvHNXJ.js";import"./checkbox-group.component-B_417hHU.js";import"./toggle-control-base.component-CsCwk5wq.js";import"./minus-small.component-BcUbohI9.js";import"./radio-group.component-SB0-mfla.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
