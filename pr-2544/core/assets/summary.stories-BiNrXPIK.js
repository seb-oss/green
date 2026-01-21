import{x as t}from"./iframe-BKxXo2qK.js";import{a}from"./argTableProps-CY9wk-Tl.js";import"./summary-BLbmRq_Z.js";import"./datepicker-DfeWx_BP.js";import"./dropdown-C14lWqpd.js";import"./option-90Z68DHg.js";import"./menu-heading-4OxbkFZd.js";import"./input-DWMjzjxE.js";import"./rocket-D_ztl020.js";import"./checkbox-group-B8iAFSfe.js";import"./radio-group-SGGPBbde.js";import"./summary.component-DQYOHbh2.js";import"./query-async-4SKqjzJS.js";import"./datepicker.component-BGVuaZ-f.js";import"./localized-decorator-CDZGgK4X.js";import"./ref-G7KfFjNh.js";import"./dropdown.component-Bj_oBMMu.js";import"./icon.component-DfPxQLo0.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BvDJrwPF.js";import"./form-control-header.component-BPXKGLro.js";import"./badge.component-BsxJm9hE.js";import"./flex.component-BmTGdA7s.js";import"./triangle-exclamation.component-CAI2YyeY.js";import"./card.component-D-D-6BvE.js";import"./unwrap-slots-CZ0lsjZ-.js";import"./checkmark.component-DIiPHbe6.js";import"./rbcb-toggle.template-DpM3uec2.js";import"./chevron-bottom.component-B9V8M40I.js";import"./cross-small.component-gGlsemlT.js";import"./popover.component-Bd0vdsas.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-3AwrujaK.js";import"./calender-add.component-B8SEvwYQ.js";import"./chevron-left.component-VbzNhZlo.js";import"./chevron-right.component-B740vksI.js";import"./arrow-up.component-B8SNcIOA.js";import"./menu-heading.component-2hX7c0mx.js";import"./input.component-DT2y-gJG.js";import"./textarea.component-Vqk0sFV0.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CuBGMmSa.js";import"./checkbox-group.component-DRs8O844.js";import"./toggle-control-base.component-Do2VTOW1.js";import"./minus-small.component-7oAGV6Ud.js";import"./radio-group.component-D2J1xeB3.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
