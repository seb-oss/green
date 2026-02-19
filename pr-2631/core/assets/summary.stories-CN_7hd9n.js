import{x as t}from"./iframe-CCr7BfDW.js";import{a}from"./argTableProps-Cce2ZnM5.js";import"./summary-DiBfJDt1.js";import"./datepicker-OjdWfWaP.js";import"./dropdown-5BjyViiC.js";import"./option-yp5Uexzu.js";import"./menu-heading-DeiDYquC.js";import"./input-Bt7I9Hdf.js";import"./rocket-DYUkTxZR.js";import"./checkbox-group-DK-mrP2S.js";import"./radio-group-BA2NNX53.js";import"./summary.component-DU_ZJpS1.js";import"./query-async-C9Hm29pF.js";import"./datepicker.component-Qq_sl8qq.js";import"./localized-decorator-Cdz-T05e.js";import"./ref-DLu8ds5c.js";import"./dropdown.component-1CImT0lE.js";import"./icon.component-Ds_8Hvh-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BjZtw9qD.js";import"./form-control-header.component-CNeADrrw.js";import"./badge.component-BTZuO071.js";import"./flex.component-DBdVvVF4.js";import"./triangle-exclamation.component-BAG9VFIE.js";import"./card.component-QkFY-_-4.js";import"./unwrap-slots-CyWlommC.js";import"./checkmark.component-f96Ym55_.js";import"./rbcb-toggle.template-BxL05P3g.js";import"./chevron-bottom.component-CZd6XTvP.js";import"./cross-small.component-DIdjbBdr.js";import"./popover.component--HwsGcuD.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DD5gMOzX.js";import"./calender-add.component-BO66jdZb.js";import"./chevron-left.component-CRFL3alf.js";import"./chevron-right.component-DlvjAyVZ.js";import"./arrow-up.component-C7CfwIxe.js";import"./menu-heading.component-8UDvr1ls.js";import"./input.component-DLSOWMFr.js";import"./textarea.component-BikMIRzF.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B39mtHSJ.js";import"./checkbox-group.component-CRIDE0Ad.js";import"./toggle-control-base.component-kZ-DlElV.js";import"./minus-small.component-DA3uiPW6.js";import"./radio-group.component-DtPRwEHV.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
