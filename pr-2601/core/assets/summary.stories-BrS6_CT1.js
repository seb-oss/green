import{x as t}from"./iframe-2dTGah3T.js";import{a}from"./argTableProps-6Us_o-XZ.js";import"./summary-CK19f4IG.js";import"./datepicker-D77skFFa.js";import"./dropdown-CxHpZNqB.js";import"./option-DAsIgVhD.js";import"./menu-heading-Dh7lXcNW.js";import"./input-BJqRAEKl.js";import"./rocket-BCRVSgpc.js";import"./checkbox-group-Cb7vImiv.js";import"./radio-group-Brf4X1KG.js";import"./summary.component---_m4kEI.js";import"./query-async-PJ6MggcI.js";import"./datepicker.component-BSIc3hz5.js";import"./localized-decorator-CArX8uvN.js";import"./ref--D1kjpnU.js";import"./dropdown.component-C75dz20B.js";import"./icon.component-DJ3ofLYD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CFZvFnKh.js";import"./form-control-header.component-C3bEld8G.js";import"./badge.component-DhdaoFre.js";import"./flex.component-CB55hL76.js";import"./triangle-exclamation.component-CdKJNCmO.js";import"./card.component-AWBCNw0n.js";import"./unwrap-slots-eps0VxwB.js";import"./checkmark.component-CpJIw_GA.js";import"./rbcb-toggle.template-LXxuDeQa.js";import"./chevron-bottom.component-D7GnV3Zm.js";import"./cross-small.component-Baan-69U.js";import"./popover.component-BeXOtCcN.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BZiB9leU.js";import"./calender-add.component-Bo6s4pK1.js";import"./chevron-left.component-B7Ug_kOG.js";import"./chevron-right.component-DqNk-PWw.js";import"./arrow-up.component-DRnhvAYQ.js";import"./menu-heading.component-D_8VZ_d6.js";import"./input.component-CuZ1mqtc.js";import"./textarea.component-BrpDLt2t.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Ckp4jNdg.js";import"./checkbox-group.component-BtvjoJDt.js";import"./toggle-control-base.component-B0FZLCNG.js";import"./minus-small.component-fNj44pV8.js";import"./radio-group.component-CCgy0Oak.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
