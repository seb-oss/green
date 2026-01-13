import{x as t}from"./iframe-7i7lbGMR.js";import{a}from"./argTableProps-BA-K5YhN.js";import"./summary-cJ9EBYwm.js";import"./datepicker-vOhDZG32.js";import"./dropdown-B5a5Yzys.js";import"./option-UzA7PKL6.js";import"./menu-heading-DkVgHMiL.js";import"./input-XdYI_JBv.js";import"./rocket-Ck1tLK3m.js";import"./checkbox-group-2pgmUyak.js";import"./radio-group-Bqavunzi.js";import"./summary.component-CONed0xr.js";import"./query-async-B4a2Xm5L.js";import"./datepicker.component-BGWw2ss1.js";import"./localized-decorator-Cvbd25nG.js";import"./ref-CVxDMerP.js";import"./dropdown.component-B7kICihc.js";import"./icon.component-jWB8-sWt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CwTsUFKu.js";import"./form-control-header.component-BZqLtI-j.js";import"./badge.component-BfsJdQUl.js";import"./flex.component-Bexu0K20.js";import"./triangle-exclamation.component-6d06OCcW.js";import"./card.component-AzsogQO4.js";import"./unwrap-slots-CeSq5oC_.js";import"./checkmark.component-DoaxbUyx.js";import"./rbcb-toggle.template-DReyLblG.js";import"./chevron-bottom.component-CkvJ19af.js";import"./cross-small.component-BI4tkiBk.js";import"./popover.component-CKsc2RZG.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CiWwlPD8.js";import"./calender-add.component-B2OAfkNo.js";import"./chevron-left.component-BdkH1SXC.js";import"./chevron-right.component-Cg4znOTn.js";import"./arrow-up.component-BXhUuugD.js";import"./menu-heading.component-CkeSmESI.js";import"./input.component-CXpAeHqd.js";import"./textarea.component-CBtE3npj.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-OHgMSRFM.js";import"./checkbox-group.component-cYKwHsGw.js";import"./toggle-control-base.component-DvhX2w8P.js";import"./minus-small.component-CVqD6PmA.js";import"./radio-group.component-Bt88x4EM.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
