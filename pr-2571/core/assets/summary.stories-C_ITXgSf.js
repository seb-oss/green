import{x as t}from"./iframe-DMDyobL-.js";import{a}from"./argTableProps-BVaUXf6e.js";import"./summary-D0Ihsj6V.js";import"./datepicker-CB28UEWD.js";import"./dropdown-dB4w90Dg.js";import"./option-Cyylt39u.js";import"./menu-heading-Bg-Ieozq.js";import"./input-CIrFH7KR.js";import"./rocket-BZTAfu8h.js";import"./checkbox-group-BxHDSKEG.js";import"./radio-group-D_BjLh9g.js";import"./summary.component-Bbof_xRz.js";import"./query-async-3ktO8T6I.js";import"./datepicker.component-CHn6A7oQ.js";import"./localized-decorator-DmrrsYJI.js";import"./ref-X__og6nn.js";import"./calendar.component-CC2or4Aj.js";import"./dropdown.component-DhttihFU.js";import"./icon.component-_ErWSD7Y.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CWRrKGTO.js";import"./form-control-header.component-CZlHtPfT.js";import"./badge.component-BU63UI20.js";import"./flex.component-Wi0Fp2wR.js";import"./triangle-exclamation.component-DP2FUfXB.js";import"./card.component-jNowQivA.js";import"./unwrap-slots-B34TvfTI.js";import"./checkmark.component-BvSZ5VVw.js";import"./rbcb-toggle.template-BM31sMer.js";import"./chevron-bottom.component-C37ElrLr.js";import"./cross-small.component-DKrDzxP7.js";import"./popover.component-D-9eA2uF.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Bh4RA8uw.js";import"./chevron-left.component-BRzY_A00.js";import"./chevron-right.component-Dk_T4QFv.js";import"./arrow-up.component-Ci7s3ksO.js";import"./menu-heading.component-C2tBqzRt.js";import"./input.component-BP_S6giM.js";import"./textarea.component-CN2KjQfB.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Di9KtFy9.js";import"./checkbox-group.component-CvVgPH5s.js";import"./toggle-control-base.component-BUM6sCrq.js";import"./minus-small.component-Bs-E6R6c.js";import"./radio-group.component-BLuiQKXK.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
