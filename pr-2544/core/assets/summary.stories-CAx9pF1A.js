import{x as t}from"./iframe-DHyn3rYy.js";import{a}from"./argTableProps-BmcGX8vU.js";import"./summary-DX_tnHMF.js";import"./datepicker-eMJc8tKl.js";import"./dropdown-DTX7VUXt.js";import"./option-DMLMXQaD.js";import"./menu-heading-Ce9EWHMH.js";import"./input-B8Y6leBm.js";import"./rocket-CuoYzQpD.js";import"./checkbox-group-DV3wwpI1.js";import"./radio-group-B3U45mhF.js";import"./summary.component-cxWFYBfE.js";import"./query-async-HKztkoAV.js";import"./datepicker.component-qoXr0NrE.js";import"./localized-decorator-1ASOYd7l.js";import"./ref-eGZUNRvJ.js";import"./dropdown.component-CN98Q1Du.js";import"./icon.component-DIcPDEU1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-m3y_VVIQ.js";import"./form-control-header.component-Cb_KpBAP.js";import"./badge.component-1kIauyfI.js";import"./flex.component-DdHhs7J9.js";import"./triangle-exclamation.component-BljgfZXo.js";import"./card.component-ee3MQ_1G.js";import"./unwrap-slots-BtQp-v5X.js";import"./checkmark.component-Csbavgoz.js";import"./rbcb-toggle.template-CRi-XLwp.js";import"./chevron-bottom.component-BrXaOJRu.js";import"./cross-small.component-CwSpiLiu.js";import"./popover.component-D_9uIu6P.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-tMzhXK_X.js";import"./calender-add.component-BVvTbX1C.js";import"./chevron-left.component-BrKwIH9O.js";import"./chevron-right.component-DAOoUqzo.js";import"./arrow-up.component-BNuV4JTm.js";import"./menu-heading.component-CQGcCKRW.js";import"./input.component-Briv6RJd.js";import"./textarea.component-BiSfeB_H.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-JPAW0zaj.js";import"./checkbox-group.component-mvLjfH2f.js";import"./toggle-control-base.component-CmHRL6TQ.js";import"./minus-small.component-C-Gd3hwp.js";import"./radio-group.component-COaPQ6h8.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
