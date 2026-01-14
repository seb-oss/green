import{x as t}from"./iframe-CcFU4emh.js";import{a}from"./argTableProps-DPOdPo2o.js";import"./summary-B6UJxt4X.js";import"./datepicker-DGzncXZ_.js";import"./dropdown-CcxjO1xT.js";import"./option-BzaKkjtN.js";import"./menu-heading-BvLSE4zA.js";import"./input-mLR8Lj_1.js";import"./rocket-CTpS3u6i.js";import"./checkbox-group-WfTfPJIa.js";import"./radio-group-DSv5-n0j.js";import"./summary.component-Bpt9NKX3.js";import"./query-async-BB4XWqOO.js";import"./datepicker.component-DrFiFeT8.js";import"./localized-decorator-D5xzM0ED.js";import"./ref-DxHZnzyi.js";import"./dropdown.component-Wip0KH3h.js";import"./icon.component-BLQGDtNO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-JbWRn3_X.js";import"./form-control-header.component-CBNHaJ09.js";import"./badge.component-L4BqGbGp.js";import"./flex.component-hHq_mvyF.js";import"./triangle-exclamation.component-BBPAsN-N.js";import"./card.component-DPlNLuYN.js";import"./unwrap-slots-DBsz2rXu.js";import"./checkmark.component-DAZs-1DZ.js";import"./rbcb-toggle.template-C65nVCR4.js";import"./chevron-bottom.component-Ctf3La8z.js";import"./cross-small.component-DvU5-oOa.js";import"./popover.component-DGYTtf9u.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-HPllR7Ro.js";import"./calender-add.component-Yi-nIY7b.js";import"./chevron-left.component-B5mSu3Ys.js";import"./chevron-right.component-xo0eq9Wo.js";import"./arrow-up.component-BZfHqnxv.js";import"./menu-heading.component-IwPeLpGo.js";import"./input.component-k6eUIEXI.js";import"./textarea.component-GK1lrNz8.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BGKnvCO8.js";import"./checkbox-group.component-ClQYRDQ0.js";import"./toggle-control-base.component-Cjz32lP_.js";import"./minus-small.component-CRBIFHLg.js";import"./radio-group.component-Zh8ojHr0.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
