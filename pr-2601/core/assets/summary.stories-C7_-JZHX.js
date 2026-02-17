import{x as t}from"./iframe-0DX4ZrJa.js";import{a}from"./argTableProps-C0_5uOxq.js";import"./summary-DfAmhFhq.js";import"./datepicker-CnxA0Ukn.js";import"./dropdown-Y7kgpIY7.js";import"./option-KP49VG-T.js";import"./menu-heading-C_7pTGN8.js";import"./input-D-4Ogpz9.js";import"./rocket-D8IjdCYA.js";import"./checkbox-group-CMY7gYt5.js";import"./radio-group-DHYNz-vH.js";import"./summary.component-v4I2Bgon.js";import"./query-async-C_wopA4e.js";import"./datepicker.component-DkO_mxJ3.js";import"./localized-decorator-Cc_5jBJl.js";import"./ref-CAwm1L55.js";import"./dropdown.component-BNVbQ-_f.js";import"./icon.component-B9Uw88l_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C7Albvnn.js";import"./form-control-header.component-CxXYST5-.js";import"./badge.component-DYeI-USw.js";import"./flex.component-CD85IxOy.js";import"./triangle-exclamation.component-turv5OuD.js";import"./card.component-D4cwreCw.js";import"./unwrap-slots-BsmoXbSA.js";import"./checkmark.component-B4WxgHyB.js";import"./rbcb-toggle.template-UQ2KkHxQ.js";import"./chevron-bottom.component-DKg66JPe.js";import"./cross-small.component-DgdH7muA.js";import"./popover.component-BHy-l3YQ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BS5kZB9p.js";import"./calender-add.component-CwLJZejP.js";import"./chevron-left.component-CvaNOIsb.js";import"./chevron-right.component-B6jCm4Xx.js";import"./arrow-up.component-qoCYFaF-.js";import"./menu-heading.component-CtlTl8gK.js";import"./input.component-DOJkPnsu.js";import"./textarea.component-BOuNcBpF.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-7TSD8Zi9.js";import"./checkbox-group.component-BJJc1fvv.js";import"./toggle-control-base.component-1k-YyAx4.js";import"./minus-small.component-CA-CS4JO.js";import"./radio-group.component-sKsn8xV7.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
