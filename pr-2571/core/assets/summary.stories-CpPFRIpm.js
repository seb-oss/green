import{x as t}from"./iframe-CIyCOr3z.js";import{a}from"./argTableProps-BBeIRQpF.js";import"./summary-CETY2Ji4.js";import"./datepicker-DJ74YogX.js";import"./dropdown-CVEIVJkE.js";import"./option-Bl79LfHj.js";import"./menu-heading-C0CsM_Tx.js";import"./input-nzfyOnG0.js";import"./rocket-11BVyXB_.js";import"./checkbox-group-v2HX8BWG.js";import"./radio-group-D7U_0vmC.js";import"./summary.component-DjvUm8rB.js";import"./query-async-Cj_UxUny.js";import"./datepicker.component-CyO4RPgA.js";import"./localized-decorator-BwT68XI3.js";import"./ref-BnWGan7d.js";import"./calendar.component-DjZiXpBP.js";import"./dropdown.component-BzH2W8ht.js";import"./icon.component-BU7mvxId.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BJKd0eUW.js";import"./form-control-header.component-CvhV034g.js";import"./badge.component-CJE3gy-5.js";import"./flex.component-zzL_HQIe.js";import"./triangle-exclamation.component-VkCnrAZF.js";import"./card.component-DYSrcaMg.js";import"./unwrap-slots-B14UI6Jt.js";import"./checkmark.component-CAMKuH_M.js";import"./rbcb-toggle.template-BxaWM1o-.js";import"./chevron-bottom.component-CKEBFlHf.js";import"./cross-small.component-B4VqYf58.js";import"./popover.component-BViakSQ8.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DFiUxv14.js";import"./chevron-left.component-d_OgIV5k.js";import"./chevron-right.component-B0zbgily.js";import"./arrow-up.component-BVTfSFgf.js";import"./menu-heading.component-1fRAN5Ob.js";import"./input.component-B59BuHX3.js";import"./textarea.component-DtGNQ5aJ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-eGGGbZt4.js";import"./checkbox-group.component-BGLnDu17.js";import"./toggle-control-base.component-DM89ew-c.js";import"./minus-small.component-D0pUzAgO.js";import"./radio-group.component-CZfAHnxQ.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
