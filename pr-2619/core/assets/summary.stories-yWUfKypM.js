import{x as t}from"./iframe-CFqsouBd.js";import{a}from"./argTableProps-R0keO9q2.js";import"./summary-ChOqgX9U.js";import"./datepicker-DNMIDqFM.js";import"./dropdown-2vFh5o68.js";import"./option-7vUza2d_.js";import"./menu-heading-BAfnfPaX.js";import"./input-C-b8_dAs.js";import"./rocket-CtMRR0lj.js";import"./checkbox-group-D_gqekOY.js";import"./radio-group-CnYPe7OK.js";import"./summary.component-DoVi-fCN.js";import"./query-async-C_zNZPUA.js";import"./datepicker.component-q9m4b_N7.js";import"./localized-decorator-CrkrOgMj.js";import"./ref-hPvsANdd.js";import"./dropdown.component-t1UdhdVt.js";import"./icon.component-C4uR9Pan.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DVoGQNQ-.js";import"./form-control-header.component-DwMFiINn.js";import"./badge.component-Bg2xgNEL.js";import"./flex.component-DW9Blz64.js";import"./triangle-exclamation.component-BWoyINbA.js";import"./card.component-C-3XsPe0.js";import"./unwrap-slots-CVJYM5ig.js";import"./checkmark.component-BrcLlYHp.js";import"./rbcb-toggle.template-DM0CGBDN.js";import"./chevron-bottom.component-COVRAEMq.js";import"./cross-small.component-DaeMSyXp.js";import"./popover.component-BP-p6y6g.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-RjwWfKOv.js";import"./calender-add.component-Bt_Vb06-.js";import"./chevron-left.component-BLXMtPkd.js";import"./chevron-right.component-XHQdH7_v.js";import"./arrow-up.component-Dz4W2aoR.js";import"./menu-heading.component-DDixvslx.js";import"./input.component-cKnb4Cdf.js";import"./textarea.component-DyFXM5Sy.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DB5qbq5c.js";import"./checkbox-group.component-IW_UWCMM.js";import"./toggle-control-base.component-D2X59w5z.js";import"./minus-small.component-CGOh9L97.js";import"./radio-group.component-g1TCvKYp.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
