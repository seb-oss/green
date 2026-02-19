import{x as t}from"./iframe-Cz3AnkGr.js";import{a}from"./argTableProps-uL3iCL7t.js";import"./summary-pwlInUrT.js";import"./datepicker-C_3fxgAE.js";import"./dropdown-V5uRuDoe.js";import"./option-Cd5NjORi.js";import"./menu-heading-Bmtgt2Kj.js";import"./input-DNeE7aeb.js";import"./rocket-BFQtflMt.js";import"./checkbox-group-DT9Yh7rN.js";import"./radio-group-BzTTLXnn.js";import"./summary.component-CkqugW3S.js";import"./query-async-BaggKTkn.js";import"./datepicker.component-DtZLUE2E.js";import"./localized-decorator-Cd6-Wn6w.js";import"./ref-Bzk0oNil.js";import"./dropdown.component-Bon5HHBd.js";import"./icon.component-XMs54qH9.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DGzjts1_.js";import"./form-control-header.component-w5PSq_Y6.js";import"./badge.component-8Tvv_Wx3.js";import"./flex.component-CnBVnkT5.js";import"./triangle-exclamation.component-BgpEiWFd.js";import"./card.component-Di8ko5-K.js";import"./unwrap-slots-fEvpXCrn.js";import"./checkmark.component-CjW8cJFx.js";import"./rbcb-toggle.template-CxqaNgzM.js";import"./chevron-bottom.component-DnpHhgo9.js";import"./cross-small.component-uHeK7hp7.js";import"./popover.component-BPK4uTAT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-qys3NVCO.js";import"./calender-add.component-DEGVS8jW.js";import"./chevron-left.component-BeboHtpZ.js";import"./chevron-right.component-DSbE2Dgw.js";import"./arrow-up.component-BKdhpEW_.js";import"./menu-heading.component-lW47cGln.js";import"./input.component-Nq88IePM.js";import"./textarea.component-CSkus26i.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-OxNGo9Rs.js";import"./checkbox-group.component-B2Kfx9ef.js";import"./toggle-control-base.component-FBSPOC9S.js";import"./minus-small.component-C2q2tUFO.js";import"./radio-group.component-Cq8F2tKR.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
