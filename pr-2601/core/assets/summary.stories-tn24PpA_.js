import{x as t}from"./iframe-CZ05hS3M.js";import{a}from"./argTableProps-BlnhksLA.js";import"./summary-BjmMOuaZ.js";import"./datepicker-CqyreHbz.js";import"./dropdown-BXUxm_9z.js";import"./option-lPmXvQx3.js";import"./menu-heading-C2-dCf1P.js";import"./input-DCw717Pt.js";import"./rocket-CqKkuPkL.js";import"./checkbox-group-DeB_VQ7f.js";import"./radio-group-0XRZFMLg.js";import"./summary.component-BsMgVRuM.js";import"./query-async-C7MTxdp1.js";import"./datepicker.component-B9dp3fPm.js";import"./localized-decorator-DZttVeom.js";import"./ref-DKapJldL.js";import"./dropdown.component-FXTgMIz1.js";import"./icon.component-DB_HYxEe.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B_C1RsJd.js";import"./form-control-header.component-BEY2bW8Z.js";import"./badge.component-7PbZjNIE.js";import"./flex.component-COAKd3b7.js";import"./triangle-exclamation.component-BN1OXbHv.js";import"./card.component-CjvQ4has.js";import"./unwrap-slots-DwCaIq7_.js";import"./checkmark.component-DHdogfIo.js";import"./rbcb-toggle.template-BjWsI-Q5.js";import"./chevron-bottom.component-QYQ1FhWb.js";import"./cross-small.component-Cq-CWVFT.js";import"./popover.component-B-0og8UC.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-vnUpf1V9.js";import"./calender-add.component-BfrTXRnM.js";import"./chevron-left.component-DmlAWOYT.js";import"./chevron-right.component-BTZ5XWTH.js";import"./arrow-up.component-CSRt3NuZ.js";import"./menu-heading.component-D363WG-H.js";import"./input.component-B4Am0O0c.js";import"./textarea.component-DJ6-qvVw.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C3fd2bwy.js";import"./checkbox-group.component-D-VfOfHq.js";import"./toggle-control-base.component-C_jzlGQw.js";import"./minus-small.component-CGzLfZIs.js";import"./radio-group.component-C9Uq9iXB.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
