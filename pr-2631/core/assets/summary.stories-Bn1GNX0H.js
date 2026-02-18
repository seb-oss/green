import{x as t}from"./iframe-YMtIRB43.js";import{a}from"./argTableProps-T5Ml5YC2.js";import"./summary-DkwD7Ru0.js";import"./datepicker-TlKJy57a.js";import"./dropdown-DozV3UTU.js";import"./option-Ol1wjEyI.js";import"./menu-heading-CGMS1ZIY.js";import"./input-B0Dl9sT2.js";import"./rocket-wVj8OmMi.js";import"./checkbox-group-CEEunJGP.js";import"./radio-group-B6bUVAzU.js";import"./summary.component-BAAfAy0O.js";import"./query-async-CIBT59b8.js";import"./datepicker.component-CmbOXqin.js";import"./localized-decorator-CEky2t5C.js";import"./ref-Di_sqfbh.js";import"./dropdown.component-B8z9mXEq.js";import"./icon.component-Di_d-Edb.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Z1vA9xea.js";import"./form-control-header.component-BGIvpHzx.js";import"./badge.component-Bddxrfsg.js";import"./flex.component-CQ1kCPd9.js";import"./triangle-exclamation.component-BO2FV5LE.js";import"./card.component-DQt45TEv.js";import"./unwrap-slots-DScApUTD.js";import"./checkmark.component-DaytpmiJ.js";import"./rbcb-toggle.template-Bdx6aAEp.js";import"./chevron-bottom.component-Ca-4KtaX.js";import"./cross-small.component-BRsLDS15.js";import"./popover.component-CxGmkxVT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-ClCYlntM.js";import"./calender-add.component-BrRrT4MA.js";import"./chevron-left.component-Bc57cxCJ.js";import"./chevron-right.component-BsxQgj9w.js";import"./arrow-up.component-DY4fWW1x.js";import"./menu-heading.component-CodrlolH.js";import"./input.component-EhvXCgxQ.js";import"./textarea.component-CfnqkHxi.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DSQmlgCm.js";import"./checkbox-group.component-DB8uHMoA.js";import"./toggle-control-base.component-DQd3vRKS.js";import"./minus-small.component-DqWNGrn7.js";import"./radio-group.component-Cetg-jlx.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
