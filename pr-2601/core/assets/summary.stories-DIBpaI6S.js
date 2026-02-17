import{x as t}from"./iframe-DvHbIuuO.js";import{a}from"./argTableProps-Cnl2uSQy.js";import"./summary-D_d77rPk.js";import"./datepicker-DSD31bcT.js";import"./dropdown-D_X0MYx_.js";import"./option-BrCaj3Ys.js";import"./menu-heading-B8UPCVMd.js";import"./input-CB5Cv7HX.js";import"./rocket-Cb6yuomU.js";import"./checkbox-group-BKcooo3Y.js";import"./radio-group-o42ngS1L.js";import"./summary.component-C1d4aCRz.js";import"./query-async-B6SbaM9B.js";import"./datepicker.component-DIaeBt9I.js";import"./localized-decorator-CIupvBuP.js";import"./ref-DZGRXUu_.js";import"./dropdown.component-DsY5oxQG.js";import"./icon.component-sUnlcUx4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bq84WiDH.js";import"./form-control-header.component-D3ah8-Np.js";import"./badge.component-BDGevOkk.js";import"./flex.component-YrCAuDEy.js";import"./triangle-exclamation.component-B6Nab224.js";import"./card.component-CLdwazrG.js";import"./unwrap-slots-DELMTorE.js";import"./checkmark.component-Pxdqj_-C.js";import"./rbcb-toggle.template-Bh-kkIK2.js";import"./chevron-bottom.component-6MWZbbkh.js";import"./cross-small.component-NQv0HgpX.js";import"./popover.component-D7DJ32yB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C9G0M8k_.js";import"./calender-add.component-DDoCcYXg.js";import"./chevron-left.component-DdKPq6jy.js";import"./chevron-right.component-BlJ_3FaS.js";import"./arrow-up.component-zyWc5WZ8.js";import"./menu-heading.component-Dx4AvyUG.js";import"./input.component-DltzzxyC.js";import"./textarea.component-BI576ARW.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-UEAz7FJj.js";import"./checkbox-group.component-DqgCw6Gp.js";import"./toggle-control-base.component-C5i10_vj.js";import"./minus-small.component-B8jZNpLC.js";import"./radio-group.component-BNDtB0DD.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
