import{x as t}from"./iframe-Log8YVZJ.js";import{a}from"./argTableProps-Bsy3o0b_.js";import"./summary-T7KrQd5O.js";import"./datepicker-BV1GHhSn.js";import"./dropdown-Bws7TD6U.js";import"./option-C076pwtI.js";import"./menu-heading-CwaDg_GH.js";import"./input-JIQuoPh_.js";import"./rocket-CsjjvQo9.js";import"./checkbox-group-Z7eEpfxi.js";import"./radio-group-CsLbxPfU.js";import"./summary.component-BExw_zN4.js";import"./query-async-D-DAVWWU.js";import"./datepicker.component-CY-I4jEc.js";import"./localized-decorator-DxuCzUTn.js";import"./ref-CQkpTT3s.js";import"./dropdown.component-DKZMzFAl.js";import"./icon.component-Dp0XZAbo.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CJ0_r7Zk.js";import"./form-control-header.component-B4j3CqQY.js";import"./badge.component-DfUQGqEY.js";import"./flex.component-eClUdjnn.js";import"./triangle-exclamation.component-Cp6HcACj.js";import"./card.component-BHD0fAQV.js";import"./unwrap-slots-D4YA3Zl1.js";import"./checkmark.component-CFKxLmjY.js";import"./rbcb-toggle.template-mxmWomyC.js";import"./chevron-bottom.component-Wmp8tqWh.js";import"./cross-small.component-BsKUCbal.js";import"./popover.component-byG2L-VM.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DJK2cMqu.js";import"./calender-add.component-jcsaMoDg.js";import"./chevron-left.component-CAkCAdKh.js";import"./chevron-right.component-gl7yvC06.js";import"./arrow-up.component-DxJz4jag.js";import"./menu-heading.component-QCZ5_rL3.js";import"./input.component-CDmgPeQm.js";import"./textarea.component-BNdgATSU.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-wKBl66FR.js";import"./checkbox-group.component-BzDBJpz3.js";import"./toggle-control-base.component-Coz3CxZ4.js";import"./minus-small.component-Cta6A1ne.js";import"./radio-group.component-CKMEyXAd.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
