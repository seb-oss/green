import{x as t}from"./iframe-C8zps3Hr.js";import{a}from"./argTableProps-BLdVJPJE.js";import"./summary-BZ0L6A_n.js";import"./datepicker-CP6T_27y.js";import"./dropdown-DQvnwhnB.js";import"./option-DOCKj3r7.js";import"./menu-heading-BAQoecIP.js";import"./input-DuADNa1P.js";import"./rocket-BhbbdvBw.js";import"./checkbox-group-Cw5kQLXE.js";import"./radio-group-CLZ6yiES.js";import"./summary.component-DPxH6HeJ.js";import"./query-async-qomeD8LK.js";import"./datepicker.component-D0RyFwAn.js";import"./localized-decorator-D8esT-iY.js";import"./ref-GilDiy6B.js";import"./dropdown.component-By7yAZAb.js";import"./icon.component-Chb4T9tJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BavwrjIv.js";import"./form-control-header.component-Bbv1j5bg.js";import"./badge.component-Bs56dGNt.js";import"./flex.component-CeiZ5H-k.js";import"./triangle-exclamation.component-DjZQ_odg.js";import"./card.component-BPP-KrvG.js";import"./unwrap-slots-C4vfFqJV.js";import"./checkmark.component-ffn2nTlK.js";import"./rbcb-toggle.template-DnThoDMC.js";import"./chevron-bottom.component-DkzqChti.js";import"./cross-small.component-D2vnY7S-.js";import"./popover.component-Cm-zfSgb.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BwqNscoD.js";import"./calender-add.component-je6FSFmc.js";import"./chevron-left.component-l_0O7PVA.js";import"./chevron-right.component-D7O2xPMc.js";import"./arrow-up.component-DVjCCnxC.js";import"./menu-heading.component-B-mQJ89X.js";import"./input.component-DKljpIQC.js";import"./textarea.component-CAZw6ryE.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BUBBJycp.js";import"./checkbox-group.component-2aKI6CZO.js";import"./toggle-control-base.component-CbN6VzhQ.js";import"./minus-small.component-CSTQ4fXo.js";import"./radio-group.component-Drv3nKcm.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
