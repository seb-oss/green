import{x as t}from"./iframe-DFZq2VWP.js";import{a}from"./argTableProps-DuOp1GPf.js";import"./summary-C_T7rk_J.js";import"./datepicker-D92P5ct6.js";import"./dropdown-2Uc1Jpb2.js";import"./option-GZVu6EuT.js";import"./menu-heading-D3mc3lxT.js";import"./input-B804tGtH.js";import"./rocket-B0N3uguO.js";import"./checkbox-group-DNugrtuD.js";import"./radio-group-SIsPatIL.js";import"./summary.component-DFiGYnYC.js";import"./query-async-CM3JUfJK.js";import"./datepicker.component-BKODe3qT.js";import"./localized-decorator-Dan9MByZ.js";import"./ref-CwOpbij1.js";import"./calendar.component-1crFe1vU.js";import"./dropdown.component-Dki5S8D9.js";import"./icon.component-BHY8V_GK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DN27_GY5.js";import"./form-control-header.component-AXbKLZOp.js";import"./badge.component-C8YW7v_1.js";import"./flex.component-DFWMQkZC.js";import"./triangle-exclamation.component-C0JQNJFX.js";import"./card.component-BBtAMepo.js";import"./unwrap-slots-uGz6TXMq.js";import"./checkmark.component-YWGA1cj8.js";import"./rbcb-toggle.template-Jp48QIFh.js";import"./chevron-bottom.component-_x5qAqmS.js";import"./cross-small.component-CViC3XPB.js";import"./popover.component-Df4oTtqD.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-B9w3VR5A.js";import"./chevron-left.component-D0XUqHiu.js";import"./chevron-right.component-BrpOF0Hf.js";import"./arrow-up.component-C0yERnvZ.js";import"./menu-heading.component-D-9ZvanR.js";import"./input.component-mYj75r47.js";import"./textarea.component-CV7IVRDV.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C4AFBY2d.js";import"./checkbox-group.component-ecSXlvjG.js";import"./toggle-control-base.component-DWFhYiZU.js";import"./minus-small.component-erG2f33_.js";import"./radio-group.component-CBaeFtoy.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
