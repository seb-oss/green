import{x as t}from"./iframe-OLtVCvf3.js";import{a}from"./argTableProps-KJnHDoGa.js";import"./summary-Dq8dCOAJ.js";import"./datepicker-DOTsBKq1.js";import"./dropdown-CobvYmQd.js";import"./option-WeMsz2vi.js";import"./menu-heading-D7I5zcG6.js";import"./input-BY4gP-yR.js";import"./rocket-BVwON6Up.js";import"./checkbox-group-DLmqM_86.js";import"./radio-group-DzSLg7OU.js";import"./summary.component-Bj6VJG1H.js";import"./query-async-BuCzUFQu.js";import"./datepicker.component-wQ_bdNbp.js";import"./localized-decorator-Bn_Y8u2H.js";import"./ref-BqGGA4cC.js";import"./dropdown.component-CpgloZbZ.js";import"./icon.component-CBMPXjbb.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CXf4R-8o.js";import"./form-control-header.component-Zba6CTnD.js";import"./badge.component-DxXC5zdx.js";import"./flex.component-C4C0DT38.js";import"./triangle-exclamation.component-D0tAEOQu.js";import"./card.component-LAF1gNJU.js";import"./unwrap-slots-lU80jU42.js";import"./checkmark.component-DiNb3fwa.js";import"./rbcb-toggle.template-DYZ5yXxN.js";import"./chevron-bottom.component-C-T9UBsM.js";import"./cross-small.component-CZGd4hUi.js";import"./popover.component-zPog_XeU.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B6Zu8dTP.js";import"./calender-add.component-DvBHTcOI.js";import"./chevron-left.component-8705Qft_.js";import"./chevron-right.component-YXtbIq2q.js";import"./arrow-up.component-BmWs-p8d.js";import"./menu-heading.component-DtluXRu-.js";import"./input.component-CkmEF0AL.js";import"./textarea.component-CQkOXQrJ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CDbKX_Zj.js";import"./checkbox-group.component-Bqs--_1_.js";import"./toggle-control-base.component-Due1fRal.js";import"./minus-small.component-DZuryOlO.js";import"./radio-group.component-OFdMU7Ur.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
