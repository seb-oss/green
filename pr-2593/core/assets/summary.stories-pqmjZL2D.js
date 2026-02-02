import{x as t}from"./iframe-DafHIkju.js";import{a}from"./argTableProps-DLgyprAh.js";import"./summary-CMDCAxha.js";import"./datepicker-CGmfztKZ.js";import"./dropdown-GL2-N6UD.js";import"./option-YI8TwQ9u.js";import"./menu-heading-BkD1ZGXO.js";import"./input-D5EU8pJf.js";import"./rocket-GXCPvCTO.js";import"./checkbox-group-x2dxG2xO.js";import"./radio-group-CCHndKyT.js";import"./summary.component-CXvtTFux.js";import"./query-async-CEfQKywZ.js";import"./datepicker.component-H5OA0AuZ.js";import"./localized-decorator-WBJcVGCI.js";import"./ref-CxxBJ9qe.js";import"./dropdown.component-j98TzN2F.js";import"./icon.component-Cp3XGKFu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DS4elOOi.js";import"./form-control-header.component-DgnTObS2.js";import"./badge.component-D0_GqK4T.js";import"./flex.component-CPWa8UO7.js";import"./triangle-exclamation.component-DWkTFBoL.js";import"./card.component-ykH1nxb_.js";import"./unwrap-slots-ComX9w_e.js";import"./checkmark.component-BpPWkKnl.js";import"./rbcb-toggle.template-GGY5A8wx.js";import"./chevron-bottom.component-CffzKhUk.js";import"./cross-small.component-TLW-yzG9.js";import"./popover.component-DtmPL3uU.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-V3V-NcTh.js";import"./calender-add.component-BNyMdW_w.js";import"./chevron-left.component-DTIPM6fz.js";import"./chevron-right.component-DsvXOJyi.js";import"./arrow-up.component-DTimAYM-.js";import"./menu-heading.component-ivq68yNQ.js";import"./input.component-g6bwy180.js";import"./textarea.component-D1iXYJze.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C_4LvjYB.js";import"./checkbox-group.component-BeoWK4Fh.js";import"./toggle-control-base.component-CJ2SRai5.js";import"./minus-small.component-BHNZkpQ0.js";import"./radio-group.component-DHm-Qo9m.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
