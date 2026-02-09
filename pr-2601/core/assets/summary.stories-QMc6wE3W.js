import{x as t}from"./iframe-BW-l_IqU.js";import{a}from"./argTableProps-CuH1d52u.js";import"./summary-BpknY12S.js";import"./datepicker-CwywTtDJ.js";import"./dropdown-C2tBTJFn.js";import"./option-bUsrDvLS.js";import"./menu-heading-C3Vz4011.js";import"./input-CC1QuH-3.js";import"./rocket-C9pzZHrl.js";import"./checkbox-group-C0HtPUTr.js";import"./radio-group-D56v89ug.js";import"./summary.component-C8ugcL3Q.js";import"./query-async-Dzf06EcU.js";import"./datepicker.component-Bs6WMJ9g.js";import"./localized-decorator-eSEGARO4.js";import"./ref-C-D6knMR.js";import"./dropdown.component-Cvt-osYX.js";import"./icon.component-DgUzqp7i.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DAoILSwF.js";import"./form-control-header.component-B85bF4G9.js";import"./badge.component-CmZok_l8.js";import"./flex.component-Dh0WZ1Jk.js";import"./triangle-exclamation.component-0cPvsNau.js";import"./card.component-CCdCM00n.js";import"./unwrap-slots-D0gUCv-a.js";import"./checkmark.component-D64NlXkr.js";import"./rbcb-toggle.template-DGokBaBV.js";import"./chevron-bottom.component-DJJrBYp6.js";import"./cross-small.component-C9qqoQ53.js";import"./popover.component-D1LnUqHJ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-RPFfGjkm.js";import"./calender-add.component-CxkxD9Vh.js";import"./chevron-left.component-Dm9gOmSj.js";import"./chevron-right.component-BfWPqmlN.js";import"./arrow-up.component-vOhcYcYB.js";import"./menu-heading.component-BhlbEHmk.js";import"./input.component-HV0jNozP.js";import"./textarea.component-CuNmaXLe.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DCg2oZbE.js";import"./checkbox-group.component-DtKQ0bpR.js";import"./toggle-control-base.component-DtswDVzf.js";import"./minus-small.component-CAbkwsZF.js";import"./radio-group.component-ZuIR_ybl.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
