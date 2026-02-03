import{x as t}from"./iframe-BwkPDoxN.js";import{a}from"./argTableProps-CaSK2nfy.js";import"./summary-48Brzc-a.js";import"./datepicker-Bv_Sd_j0.js";import"./dropdown-C3OwTXzz.js";import"./option-liqOv-1-.js";import"./menu-heading-DdvzOQKD.js";import"./input-BTHtNHjs.js";import"./rocket-DBsXKchF.js";import"./checkbox-group-B6EWsjS8.js";import"./radio-group-ChcSiMJ3.js";import"./summary.component-B1PA8pTQ.js";import"./query-async-BwG4BGak.js";import"./datepicker.component-BmRUhMg2.js";import"./localized-decorator-B-qp9NjG.js";import"./ref-HI6IXTNH.js";import"./dropdown.component-B3tBfDBf.js";import"./icon.component-JGK0YT_U.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-WjurI-jG.js";import"./form-control-header.component-Dk-eM9vS.js";import"./badge.component-DITjGtXw.js";import"./flex.component-D2nCY6Na.js";import"./triangle-exclamation.component-Bh8OvC0T.js";import"./card.component-DaCxy0yf.js";import"./unwrap-slots-BNRQ3zJx.js";import"./checkmark.component-NAVoMkdr.js";import"./rbcb-toggle.template-BSEQllME.js";import"./chevron-bottom.component-cYVFXSVy.js";import"./cross-small.component-C3MPeq7F.js";import"./popover.component-eUvH0i4y.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DrhIet_P.js";import"./calender-add.component-D9Z9Czwz.js";import"./chevron-left.component-CRjMKe2A.js";import"./chevron-right.component-DqKKEdGP.js";import"./arrow-up.component-DF1ImIX1.js";import"./menu-heading.component-3RsDIo75.js";import"./input.component-C4oFtp2o.js";import"./textarea.component-CSb0N75M.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B3109L2_.js";import"./checkbox-group.component-CaF8npPu.js";import"./toggle-control-base.component-CJf3ONHP.js";import"./minus-small.component-BTPuHTEw.js";import"./radio-group.component-CyZ42zLq.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
