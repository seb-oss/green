import{x as t}from"./iframe-DNCl8bwN.js";import{a}from"./argTableProps-CoNdzu2L.js";import"./summary-Cu-VIfgz.js";import"./datepicker-DWWUv11U.js";import"./dropdown-Bz6YFiYe.js";import"./option-BpYVUWVu.js";import"./menu-heading-hjajADc_.js";import"./input-BRSWHcNi.js";import"./rocket-CNt2HCle.js";import"./checkbox-group-BO3HGT7C.js";import"./radio-group-UWN3yLGf.js";import"./summary.component-KNqJ4Zb7.js";import"./query-async-D8nbLA6H.js";import"./datepicker.component-B_gXgLV0.js";import"./localized-decorator-iH5IXUB9.js";import"./ref-DZctqith.js";import"./dropdown.component-oKdttG_x.js";import"./icon.component-DIl6hTVy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-iBH-7HzR.js";import"./form-control-header.component-Duc1NwPO.js";import"./badge.component-DHLSy5nP.js";import"./flex.component-C_-d_UZv.js";import"./triangle-exclamation.component-CHpI6af4.js";import"./card.component-5r6YovpM.js";import"./unwrap-slots-BJkNuKpi.js";import"./checkmark.component-BjqjemXT.js";import"./rbcb-toggle.template-DZGcfCK0.js";import"./chevron-bottom.component-DcjDbYsg.js";import"./cross-small.component-BD3TlzIe.js";import"./popover.component-v-zyXMBm.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CPiVQGB5.js";import"./calender-add.component-C9Hgd5_Y.js";import"./chevron-left.component-BKpoIN93.js";import"./chevron-right.component-BfztQQYg.js";import"./arrow-up.component-bP5YpSrg.js";import"./menu-heading.component-CdNRGyo1.js";import"./input.component-BD600csl.js";import"./textarea.component-CBAATQAp.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-pYK-DTxS.js";import"./checkbox-group.component-DxDvSFS6.js";import"./toggle-control-base.component-DCEU6mpM.js";import"./minus-small.component-C62desZG.js";import"./radio-group.component-dOBjoYvI.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
