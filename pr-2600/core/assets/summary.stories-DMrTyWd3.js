import{x as t}from"./iframe-CWB-UUgA.js";import{a}from"./argTableProps-CbapwQsW.js";import"./summary-HgZ2OQny.js";import"./datepicker-B2lmU0aD.js";import"./dropdown-DGzqRVj3.js";import"./option-D7BAOsB6.js";import"./menu-heading-Dwgz7Yw3.js";import"./input-B5_1vGss.js";import"./rocket-CDNF2GDd.js";import"./checkbox-group-sc3k2knh.js";import"./radio-group-CM-Haczs.js";import"./summary.component-DHIemhEg.js";import"./query-async-CcNfS0R5.js";import"./datepicker.component-BGxji4-4.js";import"./localized-decorator-DhqxWkEo.js";import"./ref-SaePMHeh.js";import"./dropdown.component-COSnlPRG.js";import"./icon.component-DzOkRgBV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C540T_ad.js";import"./form-control-header.component-CSsWa79O.js";import"./badge.component-oFwJ9yNp.js";import"./flex.component-D0qqtZ6S.js";import"./triangle-exclamation.component-BZvq8eTt.js";import"./card.component-BstX9cht.js";import"./unwrap-slots-DnFggJvU.js";import"./checkmark.component-B6lI0i9b.js";import"./rbcb-toggle.template-BwICBkhl.js";import"./chevron-bottom.component-Bo9MWJ2U.js";import"./cross-small.component-DURJYNWe.js";import"./popover.component-DjL_3Zo4.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BWuj3CVs.js";import"./calender-add.component-DmipCknD.js";import"./chevron-left.component-C02jlzja.js";import"./chevron-right.component-DjZmKfLC.js";import"./arrow-up.component-DCvS0k4K.js";import"./menu-heading.component-CBqQb_nH.js";import"./input.component-DLS9CMFd.js";import"./textarea.component-CrqWxLO3.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BRsyn7eo.js";import"./checkbox-group.component-nzYztRli.js";import"./toggle-control-base.component-PuhaebAd.js";import"./minus-small.component-DDay__7F.js";import"./radio-group.component-B9tBKnyI.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
