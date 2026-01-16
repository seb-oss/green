import{x as t}from"./iframe-UufRagcw.js";import{a}from"./argTableProps-B4u898HN.js";import"./summary-DnTri_C4.js";import"./datepicker-SBfglZVf.js";import"./dropdown-joeQi2_b.js";import"./option-Ch_txBZC.js";import"./menu-heading-BO5-MeVD.js";import"./input-BpDhDSQn.js";import"./rocket-qJQXWWLd.js";import"./checkbox-group-DUsf31mH.js";import"./radio-group-D07-wrXr.js";import"./summary.component-DINN_Utb.js";import"./query-async-DOM1uY7s.js";import"./datepicker.component-BoclD7l4.js";import"./localized-decorator-BUoGUc6x.js";import"./ref-CG0zXh2L.js";import"./dropdown.component-cDmtQVoL.js";import"./icon.component-BoZS1-wn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CZ6j9KRH.js";import"./form-control-header.component-3Zpsb8_s.js";import"./badge.component-CZ4Z_qYp.js";import"./flex.component-DIL_0UE4.js";import"./triangle-exclamation.component-CCTAGqwk.js";import"./card.component-DIqzDDlH.js";import"./unwrap-slots-eegXQQpu.js";import"./checkmark.component-DTax0b0S.js";import"./rbcb-toggle.template-BY2EyQSV.js";import"./chevron-bottom.component-CxQKvgZ0.js";import"./cross-small.component-BpA25poI.js";import"./popover.component-C-780sMV.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DE2LFYrN.js";import"./calender-add.component-BpqnD8wr.js";import"./chevron-left.component-z1AggM2P.js";import"./chevron-right.component-CUFX68zy.js";import"./arrow-up.component-DAynBjZa.js";import"./menu-heading.component-B519XC8T.js";import"./input.component-Cxz5tiSt.js";import"./textarea.component-CAQQgvzl.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Dvk258iP.js";import"./checkbox-group.component-BJtmex_V.js";import"./toggle-control-base.component-DZjDITxJ.js";import"./minus-small.component-rBE3I65F.js";import"./radio-group.component-CrFf8gGz.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
