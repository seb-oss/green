import{x as t}from"./iframe-CJE7aiH0.js";import{a}from"./argTableProps-C8qsyRk-.js";import"./summary-CU4dO3oT.js";import"./datepicker-C3lDK4NP.js";import"./dropdown-CI0pPHQa.js";import"./option-Be1_yY3_.js";import"./menu-heading-Bg6PlgnW.js";import"./input-N_feyuW8.js";import"./rocket-DXmDX_bS.js";import"./checkbox-group-KSn90KFF.js";import"./radio-group-BhCdHXQM.js";import"./summary.component-CY-rQ3Ju.js";import"./query-async-utgmSpeQ.js";import"./datepicker.component-aIgFr0Ou.js";import"./localized-decorator-kFqkmb10.js";import"./ref-CBLAw287.js";import"./dropdown.component-DXFDFR49.js";import"./icon.component-CtwQOH-4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CmHUQyIY.js";import"./form-control-header.component-BsIbS895.js";import"./badge.component-DfKNvGPa.js";import"./flex.component-JDR8gBKy.js";import"./triangle-exclamation.component-DEoP9nh-.js";import"./card.component-Blz831NO.js";import"./unwrap-slots-658nlSjQ.js";import"./checkmark.component-D2NevCr9.js";import"./rbcb-toggle.template-CVZKt19P.js";import"./chevron-bottom.component-CmW1CzIt.js";import"./cross-small.component-CSC62mww.js";import"./popover.component-tAjsLLnj.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-coZNw7re.js";import"./calender-add.component-CwVdrW8O.js";import"./chevron-left.component-CNQYknG-.js";import"./chevron-right.component-B_AjUqQZ.js";import"./arrow-up.component-DVOBfa7c.js";import"./menu-heading.component-D7uvSGX2.js";import"./input.component-eLhVWXnw.js";import"./textarea.component-BkMz3flt.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DD2pYawt.js";import"./checkbox-group.component-B7KaYU1K.js";import"./toggle-control-base.component-BI1m3GL3.js";import"./minus-small.component-h47JX6lh.js";import"./radio-group.component-BXXWQ8po.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
