import{x as t}from"./iframe-C6yopx4X.js";import{a}from"./argTableProps-iLLtpmXh.js";import"./summary-DCkUTbbw.js";import"./datepicker-DtG-70a-.js";import"./dropdown-jX8QZ8Wf.js";import"./option-Bug7dUEQ.js";import"./menu-heading-5fidkBqW.js";import"./input-C1BvICGl.js";import"./rocket-CexMjqCw.js";import"./checkbox-group-VEMvUnwR.js";import"./radio-group-tzHGQNAF.js";import"./summary.component-D_B8oEgb.js";import"./query-async-C4udv9lV.js";import"./datepicker.component-ByNSalso.js";import"./localized-decorator-D6Rh7gKc.js";import"./ref-Dih8Q4Cx.js";import"./dropdown.component-R9_4HtAI.js";import"./icon.component-Dc2cITEB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BYi3Os3g.js";import"./form-control-header.component-BYhi0Ahn.js";import"./badge.component-DO93KdEe.js";import"./flex.component-Crx3jgrH.js";import"./triangle-exclamation.component-DmCnuzny.js";import"./card.component-DahQZrjv.js";import"./unwrap-slots-DEIV-pCz.js";import"./checkmark.component-eW_EMrWz.js";import"./rbcb-toggle.template-BdTSvxAt.js";import"./chevron-bottom.component-OIqsn2hV.js";import"./cross-small.component-M3MMFohu.js";import"./popover.component-cbo_Ijzz.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B2csQq9r.js";import"./calender-add.component-Bwd8FbBu.js";import"./chevron-left.component-DYIneEAn.js";import"./chevron-right.component-CVo-bx2C.js";import"./arrow-up.component-X9D9iYKP.js";import"./menu-heading.component-DsScYgPk.js";import"./input.component-CCXIzkpW.js";import"./textarea.component-DhGCmMwr.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-mZ0eyK9B.js";import"./checkbox-group.component-DVvNw-dG.js";import"./toggle-control-base.component-cELUVQ67.js";import"./minus-small.component-BHVUgLvm.js";import"./radio-group.component-BuWclPrb.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
