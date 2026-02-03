import{x as t}from"./iframe-LkT8NquK.js";import{a}from"./argTableProps-CODBAdLs.js";import"./summary-DfmT4DAP.js";import"./datepicker-Bm-m7C-z.js";import"./dropdown-D2v0LS8U.js";import"./option-UnQi2ac7.js";import"./menu-heading-Y1Jnp0nU.js";import"./input-BEmGQc7n.js";import"./rocket-DPH1IHIT.js";import"./checkbox-group-C18-ntcc.js";import"./radio-group-C_QceMJE.js";import"./summary.component-Dyc2rirb.js";import"./query-async-DQH78lP7.js";import"./datepicker.component-Dn5NfnR2.js";import"./localized-decorator-CuqxbbFR.js";import"./ref-CUmfEANP.js";import"./dropdown.component-w5vY3xtw.js";import"./icon.component-C7eGfAkH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-8pspAym2.js";import"./form-control-header.component-CVFxsMPj.js";import"./badge.component-CsSNhFfY.js";import"./flex.component-D5Os17a3.js";import"./triangle-exclamation.component-C_lz-hAE.js";import"./card.component-DomMnCME.js";import"./unwrap-slots-CChMzFWR.js";import"./checkmark.component-Cfvp4TWv.js";import"./rbcb-toggle.template-CeAJJs49.js";import"./chevron-bottom.component-BYAKq1H1.js";import"./cross-small.component-BsYxiOB5.js";import"./popover.component-C8i4UoS0.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-COlSeF3B.js";import"./calender-add.component-CzvKa4nh.js";import"./chevron-left.component-BTAcrKFc.js";import"./chevron-right.component-CEpec7X2.js";import"./arrow-up.component-CB7E7pIQ.js";import"./menu-heading.component-clZNzHl-.js";import"./input.component-ChDQLat_.js";import"./textarea.component-DbUHfsew.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-x0E5LUG2.js";import"./checkbox-group.component-Cixy5-DX.js";import"./toggle-control-base.component-C-Up_SqV.js";import"./minus-small.component-93K37z0l.js";import"./radio-group.component-CpzwOH1E.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
