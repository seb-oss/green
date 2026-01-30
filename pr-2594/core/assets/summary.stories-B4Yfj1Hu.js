import{x as t}from"./iframe-BZbfo3FS.js";import{a}from"./argTableProps-D5GLtkVL.js";import"./summary-D5OW6A2u.js";import"./datepicker--LLaQmLw.js";import"./dropdown-Bznt9EdD.js";import"./option-6DAkGdaU.js";import"./menu-heading-CfVR2E0p.js";import"./input-BoVpuVLi.js";import"./rocket-CW4adTai.js";import"./checkbox-group-D0pyjVRC.js";import"./radio-group-DLTiFfdm.js";import"./summary.component-CjklJ9Ae.js";import"./query-async-CjVvd2bl.js";import"./datepicker.component-JBTETXkQ.js";import"./localized-decorator-C82mW_OS.js";import"./ref-DGJ0j9Z6.js";import"./dropdown.component-eXLRpAs5.js";import"./icon.component-BTs3VFtx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C1FyV0kE.js";import"./form-control-header.component-D_Fh4RV8.js";import"./badge.component-B4W7YYMw.js";import"./flex.component-BxowivKU.js";import"./triangle-exclamation.component-DBalC--s.js";import"./card.component-B2M5jsjX.js";import"./unwrap-slots-CD0nOf78.js";import"./checkmark.component-DptzwQOG.js";import"./rbcb-toggle.template-DueZAPge.js";import"./chevron-bottom.component-DF8cOIoI.js";import"./cross-small.component-CZH6AROI.js";import"./popover.component-CYz6lTfi.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B1tLGSu-.js";import"./calender-add.component-BmOc9_sM.js";import"./chevron-left.component-DoMjf0V8.js";import"./chevron-right.component-C6Wspp0r.js";import"./arrow-up.component-DPyioAVY.js";import"./menu-heading.component-BTv3jUpX.js";import"./input.component-CBDkIOVA.js";import"./textarea.component-CmPsd2Rq.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CSyp8m3G.js";import"./checkbox-group.component-D6xlL31K.js";import"./toggle-control-base.component-Crcj-q7M.js";import"./minus-small.component-CXvdcNqE.js";import"./radio-group.component-4hVbEtDT.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
