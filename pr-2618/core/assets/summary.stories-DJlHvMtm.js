import{x as t}from"./iframe-3rIzNoLA.js";import{a}from"./argTableProps-MjWkxVLw.js";import"./summary-C3aaqCwa.js";import"./datepicker-tQZYDUiA.js";import"./dropdown-C32a9KF1.js";import"./option-CPBoIAUc.js";import"./menu-heading-B8OGjBR9.js";import"./input-C5ZRBwr8.js";import"./rocket-D2FK8QB1.js";import"./checkbox-group-BMF593fz.js";import"./radio-group-B16Wmzla.js";import"./summary.component-Dtac3PY_.js";import"./query-async-lTzDkmAM.js";import"./datepicker.component-Vn_X9HDj.js";import"./localized-decorator-BD_IdVsx.js";import"./ref-zGt94KEm.js";import"./dropdown.component-DLBiz9Ql.js";import"./icon.component-D5eym7mm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CHnwt6Ti.js";import"./form-control-header.component-Di3oMqzq.js";import"./badge.component-fbGF4cUW.js";import"./flex.component-DRbWzKfG.js";import"./triangle-exclamation.component-CJnFtLju.js";import"./card.component-DrrYU94N.js";import"./unwrap-slots-SXc1OHb8.js";import"./checkmark.component-DJAX2zZZ.js";import"./rbcb-toggle.template-DvbIwwd9.js";import"./chevron-bottom.component-DqAvDkiV.js";import"./cross-small.component-D7p3lnJE.js";import"./popover.component-DwlqHWHR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-4gLbx2LD.js";import"./calender-add.component-C3Rvm9iX.js";import"./chevron-left.component-B9-WL_pn.js";import"./chevron-right.component-VodOkbr2.js";import"./arrow-up.component-BdohpMeR.js";import"./menu-heading.component-DeS-ENAh.js";import"./input.component-Cl26cBAG.js";import"./textarea.component-BDa07Or_.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-0A0tSSsi.js";import"./checkbox-group.component-1WxrQla9.js";import"./toggle-control-base.component-DbT4Y00F.js";import"./minus-small.component-4PLmU58v.js";import"./radio-group.component-DGvvKr3c.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
