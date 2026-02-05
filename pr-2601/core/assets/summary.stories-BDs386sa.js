import{x as t}from"./iframe-BCOtacgH.js";import{a}from"./argTableProps-BIhd_aJB.js";import"./summary-Bq5cxdvv.js";import"./datepicker-DqDh9bPk.js";import"./dropdown-CD1_oefq.js";import"./option-CuJOB56D.js";import"./menu-heading-DdnDrSRD.js";import"./input-IwhFazbf.js";import"./rocket-DbXnYA9x.js";import"./checkbox-group-hlD-hUsi.js";import"./radio-group-BFrzbhNX.js";import"./summary.component-58abRiZw.js";import"./query-async-D0SVm6bL.js";import"./datepicker.component-BPZZchZU.js";import"./localized-decorator-CIpPe7g5.js";import"./ref-BWiAg8y6.js";import"./dropdown.component-B3rlHAqj.js";import"./icon.component-c9NQRHfL.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DF6TFAHR.js";import"./form-control-header.component-Bj2gYdEo.js";import"./badge.component-DBOqF6t3.js";import"./flex.component-DluP1aJt.js";import"./triangle-exclamation.component-CqQT7Eou.js";import"./card.component-Vxn5B0q8.js";import"./unwrap-slots-BS9Pw_Bk.js";import"./checkmark.component-BZie8MS8.js";import"./rbcb-toggle.template-CpXC2UOn.js";import"./chevron-bottom.component-DGO1CSpm.js";import"./cross-small.component-CrzDKx9b.js";import"./popover.component-BCAZnbzh.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BEm6VjHF.js";import"./calender-add.component-C1cKOnBI.js";import"./chevron-left.component-C15ccgZE.js";import"./chevron-right.component-BigCkDud.js";import"./arrow-up.component-ClNqqL1Z.js";import"./menu-heading.component-PZ5CnUAa.js";import"./input.component-CbAau3HC.js";import"./textarea.component-Dt1prFUZ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BoaPASVz.js";import"./checkbox-group.component-Gqd_q_r4.js";import"./toggle-control-base.component-D4ZB6l6I.js";import"./minus-small.component-CAh6ztie.js";import"./radio-group.component-DojHFtNZ.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
