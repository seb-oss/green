import{x as t}from"./iframe-BA3TVzOL.js";import{a}from"./argTableProps-cE9rvP7h.js";import"./summary-BxCf8mBf.js";import"./datepicker-C81nYHQg.js";import"./dropdown-Can5EXa_.js";import"./option-Dmyv_woM.js";import"./menu-heading-D2AEs7AB.js";import"./input-Cm4UeFLO.js";import"./rocket-VE7zeZXV.js";import"./checkbox-group-DY58gBo8.js";import"./radio-group-_AsA_CZ0.js";import"./summary.component-DBRScAW7.js";import"./query-async-cUpoGvvP.js";import"./datepicker.component-4qotzOHm.js";import"./localized-decorator-Bfa8DFiV.js";import"./ref-Ccug316D.js";import"./dropdown.component-K2u_oOkg.js";import"./icon.component-DNkU6CuX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C64NJ0op.js";import"./form-control-header.component-C4S9cWkQ.js";import"./badge.component-Cde762Jh.js";import"./flex.component-DaRqz6HB.js";import"./triangle-exclamation.component-CnqH6jM8.js";import"./card.component-kHBbkZHO.js";import"./unwrap-slots-DT0R9U1D.js";import"./checkmark.component-DX7ou_g_.js";import"./rbcb-toggle.template-C3edZko0.js";import"./chevron-bottom.component-DWkqMqZp.js";import"./cross-small.component-Bnt0RTcD.js";import"./popover.component-CIArKX3m.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Djc1dC0e.js";import"./calender-add.component-DgI4gwuq.js";import"./chevron-left.component-Cmz-HYfG.js";import"./chevron-right.component-3SdVQLhJ.js";import"./arrow-up.component-Cxf0XeVO.js";import"./menu-heading.component-DagJzISa.js";import"./input.component-Br6E40FG.js";import"./textarea.component-CUox_2-r.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DyEM4Pks.js";import"./checkbox-group.component-DopBLwTb.js";import"./toggle-control-base.component-vhOgdOAN.js";import"./minus-small.component-BaC6m5PU.js";import"./radio-group.component-BZN656c3.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
