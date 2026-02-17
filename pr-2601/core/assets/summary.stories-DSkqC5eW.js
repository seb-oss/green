import{x as t}from"./iframe-BavzDZMV.js";import{a}from"./argTableProps-gX0lf344.js";import"./summary-Dc80sFYO.js";import"./datepicker-VPAvJUyO.js";import"./dropdown-gZN5jFlk.js";import"./option-5YGa23bW.js";import"./menu-heading-DvUMIEr-.js";import"./input-BV-mWB4H.js";import"./rocket-C06CPC27.js";import"./checkbox-group-Dnrq3dmV.js";import"./radio-group-CWTg5LtB.js";import"./summary.component-DCuuvwqo.js";import"./query-async-BDuJ0BIf.js";import"./datepicker.component-D03um-mW.js";import"./localized-decorator-B6A2Gnt2.js";import"./ref-CNgy3l5F.js";import"./dropdown.component-DyuGM1JD.js";import"./icon.component-Cev4K6id.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BUGw4wjR.js";import"./form-control-header.component-Dla5xxGh.js";import"./badge.component-COiazuH6.js";import"./flex.component-Do3AdSpB.js";import"./triangle-exclamation.component-B_6hKlEp.js";import"./card.component-CUPSPXah.js";import"./unwrap-slots-rIOzlakZ.js";import"./checkmark.component-DP95pxpn.js";import"./rbcb-toggle.template-OlqmDZNy.js";import"./chevron-bottom.component-BlkzCzPA.js";import"./cross-small.component-Df8LNFan.js";import"./popover.component-CPbYpuQr.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BSQDwIkp.js";import"./calender-add.component-B9tyRjUf.js";import"./chevron-left.component-CxIPq-Du.js";import"./chevron-right.component-LKxZT-Fl.js";import"./arrow-up.component-B02TRgFX.js";import"./menu-heading.component-cASZ_cKy.js";import"./input.component-CRSSCEAd.js";import"./textarea.component-DoHekCMX.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Cr-njh3g.js";import"./checkbox-group.component-B-KoqrXo.js";import"./toggle-control-base.component-CQO-hG39.js";import"./minus-small.component-C-JkXHSF.js";import"./radio-group.component-Cnlpb1Nh.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
