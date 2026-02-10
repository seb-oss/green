import{x as t}from"./iframe-DkyjKK95.js";import{a}from"./argTableProps-D25Jo-W0.js";import"./summary-BlUbya68.js";import"./datepicker-CZuuZt6B.js";import"./dropdown-Cz6hfHAQ.js";import"./option-bRzwkCaf.js";import"./menu-heading-DWVP-64-.js";import"./input-UJVv_RCl.js";import"./rocket-DQLPVUw-.js";import"./checkbox-group-CI6YShuf.js";import"./radio-group-CKyHu0S3.js";import"./summary.component-B-YTb52o.js";import"./query-async-fnatDoiD.js";import"./datepicker.component-wol9XXZT.js";import"./localized-decorator-i059Ztse.js";import"./ref-BQo6aNEH.js";import"./dropdown.component-BfMbM-Pg.js";import"./icon.component-CmrnUAyG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BG05e5YA.js";import"./form-control-header.component-xzdOStiD.js";import"./badge.component-CV-V3Cux.js";import"./flex.component-u7T-zljG.js";import"./triangle-exclamation.component-CZNQIorz.js";import"./card.component-PNJ1cq8S.js";import"./unwrap-slots-DrI21ODK.js";import"./checkmark.component-CJPX354Q.js";import"./rbcb-toggle.template-MO0s_iOj.js";import"./chevron-bottom.component-CwWgniJ9.js";import"./cross-small.component-B8nDVD9k.js";import"./popover.component-DZqZsUKQ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-ChTi-bFL.js";import"./calender-add.component-SAsg76Ka.js";import"./chevron-left.component-D4wpi8UE.js";import"./chevron-right.component-D3LbrGKw.js";import"./arrow-up.component-BAh8j4G8.js";import"./menu-heading.component-DCxW2Kus.js";import"./input.component-7ak90dT8.js";import"./textarea.component-ChkmkHaO.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C7Ho1nXW.js";import"./checkbox-group.component-QbXab1UC.js";import"./toggle-control-base.component-DTaD8IWH.js";import"./minus-small.component-LlkGKCbp.js";import"./radio-group.component-2DbYf65v.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
