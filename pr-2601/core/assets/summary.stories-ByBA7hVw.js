import{x as t}from"./iframe-gcKVotxS.js";import{a}from"./argTableProps-BKvTm1Bt.js";import"./summary-KfReSiQH.js";import"./datepicker-bm8qdXDD.js";import"./dropdown-eLPZTz2_.js";import"./option-DWvJEwID.js";import"./menu-heading-DJzHBGJ1.js";import"./input-DIMerjjH.js";import"./rocket-B45E-TPv.js";import"./checkbox-group-DbGrwuax.js";import"./radio-group-BGaxXJEy.js";import"./summary.component-CjtHhxqT.js";import"./query-async-B11iQ52J.js";import"./datepicker.component-D-5MFt9t.js";import"./localized-decorator-Cb1FU_TN.js";import"./ref-D_pDH2_D.js";import"./dropdown.component-B1sp0pDH.js";import"./icon.component-D1jrqd0e.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-pMe6hG3D.js";import"./form-control-header.component-D5-XVn6i.js";import"./badge.component-BdtB-LNW.js";import"./flex.component-sJHgSc4G.js";import"./triangle-exclamation.component-DMeUXi7Y.js";import"./card.component-vabm0gC2.js";import"./unwrap-slots-DIdDqJhT.js";import"./checkmark.component-C60Wca6I.js";import"./rbcb-toggle.template-BVdlvZkM.js";import"./chevron-bottom.component-B2FN1mRq.js";import"./cross-small.component-Bf9zHEik.js";import"./popover.component-DhEUo93Z.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CUpCkhjx.js";import"./calender-add.component-DYbJMCFx.js";import"./chevron-left.component-jSWjsDLt.js";import"./chevron-right.component-CsYWclwy.js";import"./arrow-up.component-BwXXSaI0.js";import"./menu-heading.component-C6fvB4r3.js";import"./input.component-CrrnAFRv.js";import"./textarea.component-DvmNn12v.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-cOqw9u-j.js";import"./checkbox-group.component-ABCpsfVY.js";import"./toggle-control-base.component-Cgj85F6K.js";import"./minus-small.component-CeWcxLYH.js";import"./radio-group.component-DfkZFD2S.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
