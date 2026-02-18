import{x as t}from"./iframe-Yrp1X1kH.js";import{a}from"./argTableProps-PlP3t3mK.js";import"./summary-B3n_3Zox.js";import"./datepicker-25zAkEen.js";import"./dropdown-B2kTJPRB.js";import"./option-LoK--zP3.js";import"./menu-heading-CD30RFl3.js";import"./input-DKFGjz7W.js";import"./rocket-CTJ7Umbe.js";import"./checkbox-group-Dig0TafY.js";import"./radio-group-DnmHiTIn.js";import"./summary.component-8ARPDHs3.js";import"./query-async-BE025uLc.js";import"./datepicker.component-CNGcOHrS.js";import"./localized-decorator-D1--hSX5.js";import"./ref-D36q4JPL.js";import"./dropdown.component-BITSizrK.js";import"./icon.component-BMfChpE-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C2z54FLN.js";import"./form-control-header.component-6t_FC4ph.js";import"./badge.component-COxR4wtN.js";import"./flex.component-B1o462z2.js";import"./triangle-exclamation.component-CZ1nL60p.js";import"./card.component-Cy1jwRe-.js";import"./unwrap-slots-Xmrgap8b.js";import"./checkmark.component-BzUpgAM-.js";import"./rbcb-toggle.template-DlVFkpzQ.js";import"./chevron-bottom.component-BveTuSkR.js";import"./cross-small.component-BJLzlvaP.js";import"./popover.component-BeW8a-TS.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BsJWnUuB.js";import"./calender-add.component-81ulf47l.js";import"./chevron-left.component-BojiaRp2.js";import"./chevron-right.component-ilcfxG-Y.js";import"./arrow-up.component-DfGp4UWb.js";import"./menu-heading.component-D8R9l5O8.js";import"./input.component-lfekBu9Y.js";import"./textarea.component-Brqj65OX.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DYDksrHh.js";import"./checkbox-group.component-BTiRnnFB.js";import"./toggle-control-base.component-B-pCQUer.js";import"./minus-small.component-CSJoS3zl.js";import"./radio-group.component-gVwq5Hbt.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
