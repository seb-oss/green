import{x as t}from"./iframe-CNQuyvRb.js";import{a}from"./argTableProps-BLnSuWwU.js";import"./summary-NXfdABd2.js";import"./datepicker-BznWc042.js";import"./dropdown-B6h4oKUU.js";import"./option-D5_-cfhb.js";import"./menu-heading-CraNLr1s.js";import"./input-DW8lmsTm.js";import"./rocket-n7A8XMui.js";import"./checkbox-group-CNuQaaSL.js";import"./radio-group-CUFhVN50.js";import"./summary.component-l2Ebsyke.js";import"./query-async-DmbivNiU.js";import"./datepicker.component-Bf-7SIxZ.js";import"./localized-decorator-BXyTGXnb.js";import"./ref-CkQEL7vj.js";import"./dropdown.component-Ca55ujIE.js";import"./icon.component-DaaHJEBV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CNRcxNCb.js";import"./form-control-header.component-BmWI0G16.js";import"./badge.component-DwqN34fi.js";import"./flex.component-BRTHS8Pd.js";import"./triangle-exclamation.component-Cf_PDayD.js";import"./card.component-CIUZbWPA.js";import"./unwrap-slots-DxzOqBXY.js";import"./checkmark.component-Iz52spwT.js";import"./rbcb-toggle.template-BN4zZirl.js";import"./chevron-bottom.component-BTn-Eelm.js";import"./cross-small.component-BwITJTLF.js";import"./popover.component-DTqnKVdx.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BtaT5vtZ.js";import"./calender-add.component-CTOJk3oC.js";import"./chevron-left.component-Bu1YVLkD.js";import"./chevron-right.component-DHX6IEKE.js";import"./arrow-up.component-Ca71NfpN.js";import"./menu-heading.component-CEl8XzrU.js";import"./input.component-DMTWMk_D.js";import"./textarea.component-B0Zqv-WM.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BKi3pZVU.js";import"./checkbox-group.component-Yzbtih_l.js";import"./toggle-control-base.component-AkW00_Xe.js";import"./minus-small.component-DJKGKlpc.js";import"./radio-group.component-CUG9Ix1H.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
