import{x as t}from"./iframe-CPczCUo-.js";import{a}from"./argTableProps-CrQdz3qL.js";import"./summary-BiClJ6Ls.js";import"./datepicker-DwUUZUxa.js";import"./dropdown-qM5Yzgad.js";import"./option-BshAny8e.js";import"./menu-heading-Cb_qn9qU.js";import"./input-B5SHD2bt.js";import"./rocket-hSM17cCF.js";import"./checkbox-group-CZ8Nr9g3.js";import"./radio-group-B7Va8wQX.js";import"./summary.component-CyyXs2ZJ.js";import"./query-async-DL9niDG8.js";import"./datepicker.component-DOzTwbLy.js";import"./localized-decorator-DGBuiHzn.js";import"./ref-YhhlN1ET.js";import"./dropdown.component-Bn-Ryu23.js";import"./icon.component-Cq2Pzy0j.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Dpb460lW.js";import"./form-control-header.component-Ch3RAMa7.js";import"./badge.component-Bfkh2LqK.js";import"./flex.component-BjCQub8k.js";import"./triangle-exclamation.component-MFmsziZI.js";import"./card.component-C9FLvbvX.js";import"./unwrap-slots-CAxlB3Q3.js";import"./checkmark.component-CBuN5FYj.js";import"./rbcb-toggle.template-DaJS27Ke.js";import"./chevron-bottom.component-BpX0uoYU.js";import"./cross-small.component-QYZ17nsG.js";import"./popover.component-LxFOtxzO.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cm6P-fzb.js";import"./calender-add.component-BI77yxIQ.js";import"./chevron-left.component-B6Ex17kb.js";import"./chevron-right.component-Db-7hrHc.js";import"./arrow-up.component-BEEt-vHw.js";import"./menu-heading.component-D2JHeG_X.js";import"./input.component-wt73QZNA.js";import"./textarea.component-BlVxu9Ev.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BK6eJyMT.js";import"./checkbox-group.component-B5_ARXV1.js";import"./toggle-control-base.component-3Lyj3NkE.js";import"./minus-small.component-Cxj72OJJ.js";import"./radio-group.component-oxWQiHZ0.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
