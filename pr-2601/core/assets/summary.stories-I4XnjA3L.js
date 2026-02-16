import{x as t}from"./iframe-B_dd3l6Z.js";import{a}from"./argTableProps-BQTkZNj4.js";import"./summary-CG2iwslt.js";import"./datepicker-BiJ_xZoa.js";import"./dropdown-CA1q5aZE.js";import"./option-CKujIdx4.js";import"./menu-heading-C9jGUBRw.js";import"./input-BpNbGhrW.js";import"./rocket-CJusWyez.js";import"./checkbox-group-CaiatHAq.js";import"./radio-group-CDnUfB69.js";import"./summary.component-JvMz4TzP.js";import"./query-async-BjRZKrE_.js";import"./datepicker.component-CktbrsIN.js";import"./localized-decorator-C0mZFE-7.js";import"./ref-DWHfv77d.js";import"./dropdown.component-BEmz2FK4.js";import"./icon.component-BrjBapjD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B_N7cNmJ.js";import"./form-control-header.component-BvCSEHcB.js";import"./badge.component-CXfZarqd.js";import"./flex.component-DKud6WrH.js";import"./triangle-exclamation.component-Cq6D91cM.js";import"./card.component-CCrFnE3X.js";import"./unwrap-slots-BdEV3Iuk.js";import"./checkmark.component-CjmT6smm.js";import"./rbcb-toggle.template-Dq0TGtHf.js";import"./chevron-bottom.component-DTOqX__i.js";import"./cross-small.component-BhWv_wuS.js";import"./popover.component-enhYs_AV.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-0ARBlI53.js";import"./calender-add.component-DFZAehYI.js";import"./chevron-left.component-BZKyteO_.js";import"./chevron-right.component-Bjg_Tmik.js";import"./arrow-up.component-DtPFfFqh.js";import"./menu-heading.component-CteDmhxS.js";import"./input.component-DOKDiFCk.js";import"./textarea.component-Us3NV-1G.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CSNXVOL7.js";import"./checkbox-group.component-t_4tr5zV.js";import"./toggle-control-base.component-C4EIFzc4.js";import"./minus-small.component-i-qpvlhY.js";import"./radio-group.component-hmVbRGDt.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
