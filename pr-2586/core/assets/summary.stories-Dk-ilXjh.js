import{x as t}from"./iframe-CIVWH4Mv.js";import{a}from"./argTableProps-DR_EqNAa.js";import"./summary-DzL_9MyW.js";import"./datepicker-DlJZ7CUD.js";import"./dropdown-CjD_aGKZ.js";import"./option-GBZ48ilA.js";import"./menu-heading-CbqjjuVU.js";import"./input-DfHzN0tD.js";import"./rocket-BexwLZUL.js";import"./checkbox-group-DL3yz-kG.js";import"./radio-group-BttSnh6E.js";import"./summary.component-CAf3r-zz.js";import"./query-async-COlJGK7B.js";import"./datepicker.component-vtaSqStH.js";import"./localized-decorator-B2RSqNUR.js";import"./ref-CWIFtQ46.js";import"./dropdown.component-BcaMLByF.js";import"./icon.component-DIi6KvFX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-ZwTMzsJn.js";import"./form-control-header.component-CUi15paH.js";import"./badge.component-BCo110oT.js";import"./flex.component--kjnXqAK.js";import"./triangle-exclamation.component-B7MVRYgG.js";import"./card.component-9Yif2FC1.js";import"./unwrap-slots-CHX9xXWU.js";import"./checkmark.component-C1jxH-Yg.js";import"./rbcb-toggle.template-Bd1Q2jEs.js";import"./chevron-bottom.component-yHJ-m_vL.js";import"./cross-small.component-DjADvGIh.js";import"./popover.component-C-zF00cL.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DWfI8ADZ.js";import"./calender-add.component-BAeIIxmV.js";import"./chevron-left.component-BMVZxs-u.js";import"./chevron-right.component-DRb2VjP8.js";import"./arrow-up.component-BpQMOYLM.js";import"./menu-heading.component-D2gTUCj7.js";import"./input.component-DDXuYYBt.js";import"./textarea.component-DWfkgtoi.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-ISNKdP3F.js";import"./checkbox-group.component-C8e7eqFT.js";import"./toggle-control-base.component-zW3OfGmP.js";import"./minus-small.component-D4Ub8bC9.js";import"./radio-group.component-Css6wHNd.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
