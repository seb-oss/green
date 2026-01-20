import{x as t}from"./iframe-BjB7oDKT.js";import{a}from"./argTableProps-CX7AXzvE.js";import"./summary-B5ZaJBS0.js";import"./datepicker-DjW5j-0h.js";import"./dropdown-DM1c4yMH.js";import"./option-CZwvW6Hd.js";import"./menu-heading-Dqo5Er5h.js";import"./input-BCaeobjE.js";import"./rocket-CZ_vYNvv.js";import"./checkbox-group-klNK0j5G.js";import"./radio-group-DoU2hQIy.js";import"./summary.component-C6797fYO.js";import"./query-async-BcYiSKxG.js";import"./datepicker.component-BuFHwf6t.js";import"./localized-decorator-CWtqtl7U.js";import"./ref-fEHZrf-Z.js";import"./dropdown.component-Di1g-3sZ.js";import"./icon.component-DlGg0fkI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DtOpjgwO.js";import"./form-control-header.component-P1bophgl.js";import"./badge.component-D2O7e3R5.js";import"./flex.component-Z2JnHsVp.js";import"./triangle-exclamation.component-DVr_sHsg.js";import"./card.component-CVQTQ-EQ.js";import"./unwrap-slots-DkQ2eWz4.js";import"./checkmark.component-DgHnM_NT.js";import"./rbcb-toggle.template-Bh1KoPvv.js";import"./chevron-bottom.component-CUYdhV_X.js";import"./cross-small.component-BibNx_RM.js";import"./popover.component-DbSl4lKp.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CGX1cFCm.js";import"./calender-add.component-BdCjw6O0.js";import"./chevron-left.component-CaBIIrmW.js";import"./chevron-right.component-CrJYzUNw.js";import"./arrow-up.component-EVTzBk9F.js";import"./menu-heading.component-EHzrtegk.js";import"./input.component-Bndc5Obs.js";import"./textarea.component-C1IbCfam.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BfMGPUZB.js";import"./checkbox-group.component-D8QhHzUx.js";import"./toggle-control-base.component-CsmChSB8.js";import"./minus-small.component-6LjHUv3K.js";import"./radio-group.component-DrNKBEHU.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
