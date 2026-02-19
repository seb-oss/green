import{x as t}from"./iframe-cyAD0rhm.js";import{a}from"./argTableProps-DKg5GzzV.js";import"./summary-B5eerPVr.js";import"./datepicker-BGQa0kda.js";import"./dropdown-DO0EAyrW.js";import"./option-DDmHZRxh.js";import"./menu-heading-BNbO_9hx.js";import"./input-C5Gb-V07.js";import"./rocket-CWfo6H0J.js";import"./checkbox-group-B2CuJ1No.js";import"./radio-group-eJOs0uDN.js";import"./summary.component-DCbqi8WH.js";import"./query-async-C5RI8nND.js";import"./datepicker.component-DUAsdvjQ.js";import"./localized-decorator-hSII2u8H.js";import"./ref-hUD0t2Ef.js";import"./dropdown.component-BP9D2Ush.js";import"./icon.component-C0MD-nYh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C8g6e45V.js";import"./form-control-header.component-BwoaZZHO.js";import"./badge.component-DvOoJozs.js";import"./flex.component-UOsYcIWT.js";import"./triangle-exclamation.component-C0Cb2MVU.js";import"./card.component-BXbgzksP.js";import"./unwrap-slots-w2ji7qoS.js";import"./checkmark.component-BpsvmZZP.js";import"./rbcb-toggle.template-CgdLEetQ.js";import"./chevron-bottom.component-Ci_lr-Ty.js";import"./cross-small.component-t5Zhk1ew.js";import"./popover.component-BEl3kYQV.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-OQlRHo4j.js";import"./calender-add.component-DdyYR8A0.js";import"./chevron-left.component-BMxNRGAR.js";import"./chevron-right.component-DhKjeP3n.js";import"./arrow-up.component-cejucZlg.js";import"./menu-heading.component-CfYEV5xu.js";import"./input.component-CNuGlDJR.js";import"./textarea.component-CBrYG1gk.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B6f5Qlir.js";import"./checkbox-group.component-Dbr7F4DV.js";import"./toggle-control-base.component-c6laLowt.js";import"./minus-small.component-Dn6YC38o.js";import"./radio-group.component-Cq4etFqy.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
