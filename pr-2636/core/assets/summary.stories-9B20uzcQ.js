import{x as t}from"./iframe-RJwfSkMC.js";import{a}from"./argTableProps-BW4Yyl4q.js";import"./summary-BAGNTaYH.js";import"./datepicker-DqUfTAB4.js";import"./dropdown-CG5zYCzJ.js";import"./option-BKv-JIaI.js";import"./menu-heading-DRRsVa5h.js";import"./input-Cv7C_DgY.js";import"./rocket-BG5j2DSS.js";import"./checkbox-group-DDOM9DNB.js";import"./radio-group-BILPBi6y.js";import"./summary.component-CbUmFnJw.js";import"./query-async-DIdEPoMM.js";import"./datepicker.component-D7GSaQ3A.js";import"./localized-decorator-BK9f9wtH.js";import"./ref-Cm87PKEh.js";import"./dropdown.component-BKFxju2L.js";import"./icon.component-Cupvf4Wr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Qt4_wgJn.js";import"./form-control-header.component-BGjrRjpc.js";import"./badge.component-CYHeTLR2.js";import"./flex.component-BfiuFAFA.js";import"./triangle-exclamation.component-DCqKAlMw.js";import"./card.component-BIpb3hIK.js";import"./unwrap-slots-BDcUNgq5.js";import"./checkmark.component-DKWj8RBC.js";import"./rbcb-toggle.template-aSwqPeAd.js";import"./chevron-bottom.component-dy5u5m4p.js";import"./cross-small.component-2s_5F5R8.js";import"./popover.component-DzJUABbz.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BY0SDX88.js";import"./calender-add.component-D5pX3z-8.js";import"./chevron-left.component-XjbjrXph.js";import"./chevron-right.component-3i1EphrO.js";import"./arrow-up.component-CbZL_zaf.js";import"./menu-heading.component-CoAoxnXO.js";import"./input.component-DHIt4WBn.js";import"./textarea.component-BOjmU4Qk.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-5wqDkvrB.js";import"./checkbox-group.component-BpRuRSxC.js";import"./toggle-control-base.component-DuRRu0KV.js";import"./minus-small.component-DLghTx0s.js";import"./radio-group.component-3azMQLTu.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
