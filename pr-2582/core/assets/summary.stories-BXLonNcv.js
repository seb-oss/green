import{x as t}from"./iframe-ws1MlFGZ.js";import{a}from"./argTableProps-jIkb-kzq.js";import"./summary-B_Z17m9Z.js";import"./datepicker-DL-Zep6J.js";import"./dropdown-Cylh8IQ-.js";import"./option-DN7oEZQ7.js";import"./menu-heading-BILdSweJ.js";import"./input-tvNuz02V.js";import"./rocket-DeoxW3fa.js";import"./checkbox-group-B9E4BqdI.js";import"./radio-group-Bw4uK0tp.js";import"./summary.component-Bo3Z2zvK.js";import"./query-async-DDsuYwdj.js";import"./datepicker.component-CT8U4tpO.js";import"./localized-decorator-Co9lq93q.js";import"./ref-4FogBlET.js";import"./dropdown.component-U7Xtdxj4.js";import"./icon.component-CYaFRt3a.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bm9al9Q0.js";import"./form-control-header.component-D-gW4__C.js";import"./badge.component-DUk4mhVi.js";import"./flex.component-BHjGU510.js";import"./triangle-exclamation.component-DUTNnAul.js";import"./card.component-BZd9eAUU.js";import"./unwrap-slots-CZdp6qUr.js";import"./checkmark.component-B9Irdx1C.js";import"./rbcb-toggle.template-B08_5RnV.js";import"./chevron-bottom.component-C9oYU6ZT.js";import"./cross-small.component-B_iAO7Xh.js";import"./popover.component-kE68GLlu.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B3Tse08B.js";import"./calender-add.component-wJMAKYkX.js";import"./chevron-left.component-D1DxEGA8.js";import"./chevron-right.component-CQgRXNDM.js";import"./arrow-up.component-DuiOiKYG.js";import"./menu-heading.component-BomIMKTs.js";import"./input.component-Cy0PmfxG.js";import"./textarea.component-whagidgp.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BbqsuKFc.js";import"./checkbox-group.component-DIAvXvKk.js";import"./toggle-control-base.component-Cb2kitN3.js";import"./minus-small.component-aZqqLe24.js";import"./radio-group.component-BP7-1jW9.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
