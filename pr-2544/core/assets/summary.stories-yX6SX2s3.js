import{x as t}from"./iframe-lP-4zMVt.js";import{a}from"./argTableProps-DyeyflwH.js";import"./summary-C0uBfExi.js";import"./datepicker-8uLXsQ0v.js";import"./dropdown-ntZxCo_v.js";import"./option-C9_4X9Wg.js";import"./menu-heading-f15Oq1pD.js";import"./input-CyrrQFNq.js";import"./rocket-D3dDcjD9.js";import"./checkbox-group-CyGREZBe.js";import"./radio-group-DENaUCM9.js";import"./summary.component-7LeD-oyt.js";import"./query-async-DzoOZbcv.js";import"./datepicker.component-9jmWtTio.js";import"./localized-decorator-BEn2_4eF.js";import"./ref-up6giZMU.js";import"./dropdown.component-ChMn1bbJ.js";import"./icon.component-kHVMrRuO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CDE4Ks3X.js";import"./form-control-header.component-DZFomjLG.js";import"./badge.component-ya6KONEK.js";import"./flex.component-BEL83sYW.js";import"./triangle-exclamation.component-BS1rtuZa.js";import"./card.component-B8x6_bHz.js";import"./unwrap-slots-DHqTztSi.js";import"./checkmark.component-DrA8O3lE.js";import"./rbcb-toggle.template-DY2nLiQh.js";import"./chevron-bottom.component-CGMRURVm.js";import"./cross-small.component-D3TnpIc1.js";import"./popover.component-xJUYYMva.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BW0oyemW.js";import"./calender-add.component-BQn0m39e.js";import"./chevron-left.component-CbdGnvdd.js";import"./chevron-right.component-isznlcpI.js";import"./arrow-up.component-B7kuEgwz.js";import"./menu-heading.component-DuSKvXTe.js";import"./input.component-_BDBhNR9.js";import"./textarea.component-DICiDFSy.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CgLi7-fj.js";import"./checkbox-group.component-C5PCOTi8.js";import"./toggle-control-base.component-bup8zwdY.js";import"./minus-small.component-DzO-rUNg.js";import"./radio-group.component-DEIQ5J8n.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
