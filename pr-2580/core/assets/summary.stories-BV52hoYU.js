import{x as t}from"./iframe-DCZi1hNl.js";import{a}from"./argTableProps-CKfEYu_f.js";import"./summary-DNO-6xbd.js";import"./datepicker-BAzAh12r.js";import"./dropdown-BhUwLed0.js";import"./option-CHtGfdlq.js";import"./menu-heading-HE5PGW7_.js";import"./input-Dmve4izb.js";import"./rocket-BnO2fzeX.js";import"./checkbox-group-BeYBiGNq.js";import"./radio-group-CVq0rs1s.js";import"./summary.component-CyUdnaB0.js";import"./query-async-CWoIh4YV.js";import"./datepicker.component-Y0kCYC9l.js";import"./localized-decorator-Cy9weBLt.js";import"./ref-CMAtN5Yn.js";import"./dropdown.component-BKGrXpq4.js";import"./icon.component-vpRXZ3fA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B-XhhaUB.js";import"./form-control-header.component-rDTlUU5Y.js";import"./badge.component-C0wD-M2c.js";import"./flex.component-CB4yYzq3.js";import"./triangle-exclamation.component-B0ZvKM7h.js";import"./card.component-CsDaW6EY.js";import"./unwrap-slots-VP_skJYy.js";import"./checkmark.component-BbpKypbL.js";import"./rbcb-toggle.template-CO7mAmp8.js";import"./chevron-bottom.component-CVSVk4zk.js";import"./cross-small.component-ClJAay1H.js";import"./popover.component-DkksO6QR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BmdA7DJj.js";import"./calender-add.component-C2JIK-Sa.js";import"./chevron-left.component-Czi_7XRK.js";import"./chevron-right.component-DAHcVbeF.js";import"./arrow-up.component-msd6NRj6.js";import"./menu-heading.component-BJaemShL.js";import"./input.component-Ce6O7zpH.js";import"./textarea.component-qaeSuYNa.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-0ic7k31g.js";import"./checkbox-group.component-BobnBE_-.js";import"./toggle-control-base.component-DzJNzB5f.js";import"./minus-small.component-CpjDpozC.js";import"./radio-group.component-CZdQ89vI.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
