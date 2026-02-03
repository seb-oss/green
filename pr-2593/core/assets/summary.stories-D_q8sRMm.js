import{x as t}from"./iframe-DeD76d6T.js";import{a}from"./argTableProps-BGfxXVL2.js";import"./summary-DOvwr9o4.js";import"./datepicker-Bz4KzjQA.js";import"./dropdown-CIGbdgp3.js";import"./option-Dy2eQjnl.js";import"./menu-heading-BbwKQ_Nk.js";import"./input-C-PVDD3p.js";import"./rocket-DOHJTZl7.js";import"./checkbox-group-vAmZSt5S.js";import"./radio-group-CGPJChD-.js";import"./summary.component-COmlbpNx.js";import"./query-async-BwgGfV7U.js";import"./datepicker.component-CeOA7Fx1.js";import"./localized-decorator-DxP51tC8.js";import"./ref-CYTLOdz7.js";import"./dropdown.component-B7t2CnRh.js";import"./icon.component-BpXojplS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-sNIHzeql.js";import"./form-control-header.component-Deh2G95f.js";import"./badge.component-CCjmsGqI.js";import"./flex.component-BHtdtXy8.js";import"./triangle-exclamation.component-BdGP46Xc.js";import"./card.component-BqkU3JX6.js";import"./unwrap-slots-COKnDPsA.js";import"./checkmark.component-BqLmm-35.js";import"./rbcb-toggle.template-OTMyfMyu.js";import"./chevron-bottom.component-D25eiucy.js";import"./cross-small.component-BMf3X43J.js";import"./popover.component--feL6tVk.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DYk-280y.js";import"./calender-add.component-tJzQOc1t.js";import"./chevron-left.component-DCZDOFnV.js";import"./chevron-right.component-BRrb8b8N.js";import"./arrow-up.component-DnGL75tq.js";import"./menu-heading.component-DxvbXdK-.js";import"./input.component-BHxrsbAj.js";import"./textarea.component-CAVrv_8o.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-xnP5rf-P.js";import"./checkbox-group.component-CUBXw7HF.js";import"./toggle-control-base.component-L3xwXICn.js";import"./minus-small.component-DTKV9R9z.js";import"./radio-group.component-CvTpFGM0.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
