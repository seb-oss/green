import{x as t}from"./iframe-iTp6uJWY.js";import{a}from"./argTableProps-P7fL4tZk.js";import"./summary-D6dpx9DT.js";import"./datepicker-1tA60gHh.js";import"./dropdown-C4t9UcKq.js";import"./option-DNzrvBGe.js";import"./menu-heading-CpdxhQje.js";import"./input-D8QK_L4h.js";import"./rocket-BEbOP8pF.js";import"./checkbox-group-C34G-1FP.js";import"./radio-group-D1Wd_cmm.js";import"./summary.component-C7Ccof9X.js";import"./query-async-CFvxKBdj.js";import"./datepicker.component-BGwIbaK3.js";import"./localized-decorator-D-ZR5rvT.js";import"./ref-BnnJJm8y.js";import"./dropdown.component-DsAI-Fqp.js";import"./icon.component-CSYMpqUX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DqoH8_kl.js";import"./form-control-header.component-DbLzSa97.js";import"./badge.component-Bj8lzOla.js";import"./flex.component-nuwIDH92.js";import"./triangle-exclamation.component-hwL9C4Du.js";import"./card.component-DGl-TPP7.js";import"./unwrap-slots-CBihBcDN.js";import"./checkmark.component-BelWeuNX.js";import"./rbcb-toggle.template-DvL6hZE9.js";import"./chevron-bottom.component-C2LDygFW.js";import"./cross-small.component-1Q6k81jQ.js";import"./popover.component-BKRREik1.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D49znl5g.js";import"./calender-add.component-CIftkLtu.js";import"./chevron-left.component-DanmMjnv.js";import"./chevron-right.component-tuaMakc8.js";import"./arrow-up.component-DhQxi5I1.js";import"./menu-heading.component-BWRV4Sa3.js";import"./input.component-C8AhcNEL.js";import"./textarea.component-BMkqsYc0.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CDtAnuCi.js";import"./checkbox-group.component-Bo7e4o0U.js";import"./toggle-control-base.component-IkNdxeoC.js";import"./minus-small.component-B_chePlG.js";import"./radio-group.component-CY2iBqGw.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
