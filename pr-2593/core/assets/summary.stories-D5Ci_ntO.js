import{x as t}from"./iframe-CELF-Vyq.js";import{a}from"./argTableProps-DUFUo9tI.js";import"./summary-DO7Kqawc.js";import"./datepicker-Cd4nzTtZ.js";import"./dropdown-YipmTsYM.js";import"./option-DL2FKP5x.js";import"./menu-heading-C3aqXFUa.js";import"./input-DAG_nTS3.js";import"./rocket-BnAHqvmQ.js";import"./checkbox-group-DYoWn6V7.js";import"./radio-group-Dhvz3dOS.js";import"./summary.component-D0WtXf78.js";import"./query-async-BrEvNLb8.js";import"./datepicker.component-Cd48uoUZ.js";import"./localized-decorator-DerGAKJ_.js";import"./ref-9wMtPy1x.js";import"./dropdown.component-kuWpKDp6.js";import"./icon.component-B-pG8KGI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bua_ULSm.js";import"./form-control-header.component-CkF-5udU.js";import"./badge.component-Art25qP1.js";import"./flex.component-0Gth6Pct.js";import"./triangle-exclamation.component-S2K7me8K.js";import"./card.component-Bnzv_dhj.js";import"./unwrap-slots-DWk8gh31.js";import"./checkmark.component-Bxr5fAdr.js";import"./rbcb-toggle.template-D6QeADdE.js";import"./chevron-bottom.component-CNqsT1Bn.js";import"./cross-small.component-zo88JS2_.js";import"./popover.component-C2sbpQpD.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Drjuhyxz.js";import"./calender-add.component-B-_CYecl.js";import"./chevron-left.component-DKOyWrAw.js";import"./chevron-right.component-C2zEG5PF.js";import"./arrow-up.component-Wp0Q-0xl.js";import"./menu-heading.component-EIgHE8Zh.js";import"./input.component-D_m1UgSh.js";import"./textarea.component-D6s3xKVn.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-MqO9LPbX.js";import"./checkbox-group.component-BPs2jz4i.js";import"./toggle-control-base.component-DTQM92-s.js";import"./minus-small.component-Duk19zBK.js";import"./radio-group.component-DNOXhJfs.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
