import{x as t}from"./iframe-DWU_JXmu.js";import{a}from"./argTableProps-BAeAzYT0.js";import"./summary-Cd6BgZhD.js";import"./datepicker-CLbcmumG.js";import"./dropdown-PGfq3E2C.js";import"./option-BhhkT6Mg.js";import"./menu-heading-CjdVwLWr.js";import"./input-DhPKJ_Dp.js";import"./rocket-08IXER2N.js";import"./checkbox-group-BgOJ3BKe.js";import"./radio-group-4pFFl5lo.js";import"./summary.component-Dk0Pb_ST.js";import"./query-async-KPu_HqWs.js";import"./datepicker.component-DEk-Ue2n.js";import"./localized-decorator-Du1IUVXM.js";import"./ref-B-gDldt3.js";import"./dropdown.component-oP60wGwy.js";import"./icon.component-tf5hdNYz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BAKrSsMc.js";import"./form-control-header.component-D9xuWSKu.js";import"./badge.component-Bv7KKoYh.js";import"./flex.component-nwBDGrB1.js";import"./triangle-exclamation.component-Dn7HOgIP.js";import"./card.component-2cWsT0sL.js";import"./unwrap-slots-j4zI_FYd.js";import"./checkmark.component-B_JZZZmF.js";import"./rbcb-toggle.template-DGfMwIhp.js";import"./chevron-bottom.component-B9fkOuLf.js";import"./cross-small.component-BT95TfPg.js";import"./popover.component-Cwp5NJIL.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CD2syjzm.js";import"./calender-add.component-BZRVNSaI.js";import"./chevron-left.component-CoW1Ky85.js";import"./chevron-right.component-CSkZrcMA.js";import"./arrow-up.component-BXy30qBQ.js";import"./menu-heading.component-Cd2IJOf-.js";import"./input.component-qA-nVbE1.js";import"./textarea.component-B74m5Kue.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CrBkxsv4.js";import"./checkbox-group.component-DvuUG7Hp.js";import"./toggle-control-base.component-Dk6wMkpI.js";import"./minus-small.component-CRcB_3zR.js";import"./radio-group.component-C4W6ltmj.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
