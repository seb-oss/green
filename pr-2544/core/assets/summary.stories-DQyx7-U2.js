import{x as t}from"./iframe-lV-WZRkU.js";import{a}from"./argTableProps-DTDyvJ8h.js";import"./summary-CcbS34ac.js";import"./datepicker-Dq3-D8PV.js";import"./dropdown-CRL59OSz.js";import"./option-CB2MFoSj.js";import"./menu-heading-fm0kHVR1.js";import"./input-DCtXBF9k.js";import"./rocket-DN3hu-IZ.js";import"./checkbox-group-CFhOonqO.js";import"./radio-group-C6QJ6gaX.js";import"./summary.component-BmkS8prK.js";import"./query-async-4ept2Bne.js";import"./datepicker.component-FRm0zVQ8.js";import"./localized-decorator-Bfo8VZz8.js";import"./ref-DLkRUTTE.js";import"./dropdown.component-DqmIWLjN.js";import"./icon.component-BYc8JeYU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-XLTdUCij.js";import"./form-control-header.component-CDo3KRv_.js";import"./badge.component-DWK23WQk.js";import"./flex.component-SMBXM1bE.js";import"./triangle-exclamation.component-CbJke0fa.js";import"./card.component-CeI5UucY.js";import"./unwrap-slots-CqrDwRxt.js";import"./checkmark.component-Xn2Cbn7D.js";import"./rbcb-toggle.template-C-BIrqF1.js";import"./chevron-bottom.component-By8ZO4iG.js";import"./cross-small.component-q-71JxD2.js";import"./popover.component-DW6lKZbC.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-8x4T4VVE.js";import"./calender-add.component-CFTNalLN.js";import"./chevron-left.component-pBRrVnuM.js";import"./chevron-right.component-DCy6ZRXv.js";import"./arrow-up.component-CS27gxZy.js";import"./menu-heading.component-Cn4aTHrU.js";import"./input.component-B96G2nbV.js";import"./textarea.component-BQrXbmr_.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DIs4jKmj.js";import"./checkbox-group.component-Dp7dit_P.js";import"./toggle-control-base.component-BpLvQAav.js";import"./minus-small.component-C7U8HP9U.js";import"./radio-group.component-CNq_eZ9Z.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
