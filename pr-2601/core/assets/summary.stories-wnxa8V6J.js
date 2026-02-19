import{x as t}from"./iframe-DGztXBjb.js";import{a}from"./argTableProps-qIZCpOtF.js";import"./summary-BDue2vv6.js";import"./datepicker-CwCW5Vai.js";import"./dropdown-BGeweMAT.js";import"./option-sPUmJfqN.js";import"./menu-heading-C656mQ0f.js";import"./input-DREpma9Q.js";import"./rocket-CAXNdTxG.js";import"./checkbox-group-BO6g2fwZ.js";import"./radio-group-CwMX9zWk.js";import"./summary.component-BsHHW56w.js";import"./query-async-CR9YdtMl.js";import"./datepicker.component-if3B9a5d.js";import"./localized-decorator-DCYRoi_y.js";import"./ref-BoqaY22C.js";import"./dropdown.component-CpzbMcGQ.js";import"./icon.component-J0zakHWz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DWO_Y4RS.js";import"./form-control-header.component-BuNoSNVN.js";import"./badge.component-C7ZtpMSF.js";import"./flex.component-DOCxKVTZ.js";import"./triangle-exclamation.component-Bs6XaXfE.js";import"./card.component-CY16MePX.js";import"./unwrap-slots-BczJz0Js.js";import"./checkmark.component-CErK8FYT.js";import"./rbcb-toggle.template-4mzeX-i1.js";import"./chevron-bottom.component-DIVuhDiX.js";import"./cross-small.component-DsqCvZwm.js";import"./popover.component-ScE47tAH.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BmWte4wT.js";import"./calender-add.component-Dmi1yQNu.js";import"./chevron-left.component-BWRgNkhI.js";import"./chevron-right.component-DZNB0Fl_.js";import"./arrow-up.component-BZjVC-AI.js";import"./menu-heading.component-BDm677qV.js";import"./input.component-CdhatLVW.js";import"./textarea.component-I9Ly4qUG.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BXlRxnvv.js";import"./checkbox-group.component-BNWiZP0q.js";import"./toggle-control-base.component-DHw4eIqH.js";import"./minus-small.component--NWoN46o.js";import"./radio-group.component-Jv1FAgBn.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
