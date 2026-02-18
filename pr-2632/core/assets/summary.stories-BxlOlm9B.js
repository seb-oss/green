import{x as t}from"./iframe-g2RbAea7.js";import{a}from"./argTableProps-B00LFve7.js";import"./summary-CPXoxrBN.js";import"./datepicker-CEXQGt9R.js";import"./dropdown-CD4fVMSL.js";import"./option-B5SInV_J.js";import"./menu-heading-CkIKfPsd.js";import"./input-cusx5bQo.js";import"./rocket-s-06Y9Cj.js";import"./checkbox-group-BMQSWhBS.js";import"./radio-group-CdqL5F18.js";import"./summary.component-B50Xdp6O.js";import"./query-async-BjetbQ7P.js";import"./datepicker.component-uzH5JazT.js";import"./localized-decorator-CGK7UXPh.js";import"./ref-qEToTFgl.js";import"./dropdown.component-DNci-5co.js";import"./icon.component-D9LNjvT4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-sPgx6Rbw.js";import"./form-control-header.component-DXlTW0jt.js";import"./badge.component-DNnuw_nN.js";import"./flex.component-lJw3gVPm.js";import"./triangle-exclamation.component-DT9z3Urs.js";import"./card.component-U-JgRhya.js";import"./unwrap-slots-C8MvIrQe.js";import"./checkmark.component-DOwOJjH5.js";import"./rbcb-toggle.template-4O5HjOjh.js";import"./chevron-bottom.component-BmOxusLV.js";import"./cross-small.component-BUaC8pGO.js";import"./popover.component-D4NauEhP.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CABXx4g-.js";import"./calender-add.component-5PsYHdg9.js";import"./chevron-left.component-B0bGkQvv.js";import"./chevron-right.component-BBkqvQoF.js";import"./arrow-up.component-C78zB5C2.js";import"./menu-heading.component-BIbu7tSW.js";import"./input.component-eVFPzoh6.js";import"./textarea.component-F8Ajyhwz.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DpsAiRU2.js";import"./checkbox-group.component-QErGhzdx.js";import"./toggle-control-base.component-BomW8Dvh.js";import"./minus-small.component-ZEvLzAjX.js";import"./radio-group.component-Cc3RCOa-.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
