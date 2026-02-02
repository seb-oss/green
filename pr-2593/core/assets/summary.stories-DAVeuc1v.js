import{x as t}from"./iframe-DP9akqBZ.js";import{a}from"./argTableProps-i-gmEOqo.js";import"./summary-CzibbYwO.js";import"./datepicker-_MMPbRhZ.js";import"./dropdown-DHjTTrWi.js";import"./option-CRp3mIoh.js";import"./menu-heading-WNGNVnOk.js";import"./input-YaNCHPES.js";import"./rocket-CVLkqj8B.js";import"./checkbox-group-hJzy4kTZ.js";import"./radio-group---48T-5N.js";import"./summary.component-BdiLQDb6.js";import"./query-async-BtCL5vdu.js";import"./datepicker.component-CZqm-uyV.js";import"./localized-decorator-DjiVRTA8.js";import"./ref-BG4HeETm.js";import"./dropdown.component-CqWYnNBD.js";import"./icon.component-B1kgOlUX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-kitUImCM.js";import"./form-control-header.component-BzRp-TlG.js";import"./badge.component-BFa9br6-.js";import"./flex.component-BkeSN3lL.js";import"./triangle-exclamation.component-AE0LRPZB.js";import"./card.component-lHB-B_as.js";import"./unwrap-slots-D1W3oFRS.js";import"./checkmark.component-CesEMpvI.js";import"./rbcb-toggle.template-BupezNn6.js";import"./chevron-bottom.component-hd9aqcFx.js";import"./cross-small.component-j0vAr5j-.js";import"./popover.component-CEdm7zWa.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-mHl7RYw1.js";import"./calender-add.component-CGzr1O6B.js";import"./chevron-left.component-DQf5kzC6.js";import"./chevron-right.component-CwjRKN7M.js";import"./arrow-up.component-DqklD-g4.js";import"./menu-heading.component-1LIXuBco.js";import"./input.component-DJ7yQ5_-.js";import"./textarea.component-zp2YzTGl.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DDPPbUhO.js";import"./checkbox-group.component-B2HLYkV6.js";import"./toggle-control-base.component-BTm_y92T.js";import"./minus-small.component-BxDCjvrS.js";import"./radio-group.component-BLQNa-WW.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
