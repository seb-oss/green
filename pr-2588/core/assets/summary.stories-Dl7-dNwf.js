import{x as t}from"./iframe-CV4VHgIs.js";import{a}from"./argTableProps-DHiFLesZ.js";import"./summary-OqKmzOKV.js";import"./datepicker-CXIW_QH1.js";import"./dropdown-Dwoyx1mj.js";import"./option-CzkLUR0f.js";import"./menu-heading-CRbF-kWw.js";import"./input-DN6EG8a9.js";import"./rocket-C-RfO6vN.js";import"./checkbox-group-CpPOdQhf.js";import"./radio-group-CZzZzg2Q.js";import"./summary.component-5Bzl0eKF.js";import"./query-async-ClNjxWu4.js";import"./datepicker.component-D_LVmvjm.js";import"./localized-decorator-BYopzF03.js";import"./ref-BS34vG_D.js";import"./dropdown.component-DAs5LhS4.js";import"./icon.component-XFsSxgDJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Cp0QlK_U.js";import"./form-control-header.component-C5EUPN7x.js";import"./badge.component-jtBRX4dI.js";import"./flex.component-DNymDvNk.js";import"./triangle-exclamation.component-Bdd4f_8w.js";import"./card.component-B47VLAgL.js";import"./unwrap-slots-kF7JcEL9.js";import"./checkmark.component-B3Tp8Bhr.js";import"./rbcb-toggle.template-DX7gwhr2.js";import"./chevron-bottom.component-BWXqEo_b.js";import"./cross-small.component-BxQZD6Dp.js";import"./popover.component-eRyrg-hO.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CqVFkNi9.js";import"./calender-add.component-BvaA2iVA.js";import"./chevron-left.component-CDEqL5W5.js";import"./chevron-right.component-7bFTBViW.js";import"./arrow-up.component-CNTzvkIg.js";import"./menu-heading.component-DpsqNNxl.js";import"./input.component-XQW_0tIJ.js";import"./textarea.component-BUS7VmpM.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BT_Q3S6L.js";import"./checkbox-group.component-CzhGRAMD.js";import"./toggle-control-base.component-Dzxo3-nb.js";import"./minus-small.component-C3YSGbbc.js";import"./radio-group.component-CMTYlWXM.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
