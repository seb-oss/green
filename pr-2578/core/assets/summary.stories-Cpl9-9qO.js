import{x as t}from"./iframe-DNTl48pd.js";import{a}from"./argTableProps-DOxWWQo1.js";import"./summary-DRBlSqaw.js";import"./datepicker-c6TLCVDR.js";import"./dropdown-DEDaIPOl.js";import"./option-n68IXVHu.js";import"./menu-heading-DVN1tUR3.js";import"./input-DjgMjlsw.js";import"./rocket-wlKvrT8P.js";import"./checkbox-group-Bq3y1tIA.js";import"./radio-group-BSu6RxNb.js";import"./summary.component-DMGr-fiy.js";import"./query-async-BIp5_guu.js";import"./datepicker.component-D2IS2mJk.js";import"./localized-decorator-D5Q6_2Fc.js";import"./ref-PYkZ42Q_.js";import"./dropdown.component-DPk91myw.js";import"./icon.component-BacprXjV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BieDd1XE.js";import"./form-control-header.component-D1aT3PWP.js";import"./badge.component-4puycZOE.js";import"./flex.component-QkSNFxkm.js";import"./triangle-exclamation.component-Dr04iao3.js";import"./card.component-CWIznfwY.js";import"./unwrap-slots-BLwtCqWm.js";import"./checkmark.component-BjiW3ux9.js";import"./rbcb-toggle.template-YXAoOrYR.js";import"./chevron-bottom.component-D8E9rmEH.js";import"./cross-small.component-CXVeepsU.js";import"./popover.component-Borr-Qhb.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CnIJCRaD.js";import"./calender-add.component-Br-7PVHu.js";import"./chevron-left.component-CZBHEzDP.js";import"./chevron-right.component-CzeyrXHF.js";import"./arrow-up.component-BTd5kRbw.js";import"./menu-heading.component-C88-Vx1c.js";import"./input.component-u_rmPoHE.js";import"./textarea.component-BOGO_NvU.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DIQpkfOf.js";import"./checkbox-group.component-3GoLXZ18.js";import"./toggle-control-base.component-D-qE2k_R.js";import"./minus-small.component-B1GNFPcV.js";import"./radio-group.component-BVa9kftl.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},Y={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,Y as Usage,tr as __namedExportsOrder,X as default};
