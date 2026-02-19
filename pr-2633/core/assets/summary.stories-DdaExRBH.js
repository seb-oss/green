import{x as t}from"./iframe-D9vAKIAs.js";import{a}from"./argTableProps-DKtduvzU.js";import"./summary-Z_SQVwlS.js";import"./datepicker-_nVlcy81.js";import"./dropdown-CVASJzJj.js";import"./option-D54TGe0V.js";import"./menu-heading-D8zB4XcR.js";import"./input-D9mydRZ0.js";import"./rocket-Bh1kPzEt.js";import"./checkbox-group-cfZHAWrI.js";import"./radio-group-CF4EEPep.js";import"./summary.component-Bum1uBCz.js";import"./query-async-C9wX-X9z.js";import"./datepicker.component-DlCYZUiE.js";import"./localized-decorator-CW606twr.js";import"./ref-CyH9Wv-S.js";import"./dropdown.component-ytZkUiw0.js";import"./icon.component-fD0NACjC.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DS8lR-41.js";import"./form-control-header.component-CGYP8NYV.js";import"./badge.component-BmXn-llx.js";import"./flex.component-CZ9qApdD.js";import"./triangle-exclamation.component-BgNWe9O8.js";import"./card.component-QApxYYUS.js";import"./unwrap-slots-BYhTHFF5.js";import"./checkmark.component-8JRXD7Z_.js";import"./rbcb-toggle.template-B2hJPRL6.js";import"./chevron-bottom.component-Ch2U6SuV.js";import"./cross-small.component-DOZaAP1o.js";import"./popover.component-Db_Msa0t.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DpACiFmf.js";import"./calender-add.component-J4iDOCut.js";import"./chevron-left.component-B0dydDSy.js";import"./chevron-right.component-_LYvPvYz.js";import"./arrow-up.component-CfX0P2Jg.js";import"./menu-heading.component-C3fJR-i7.js";import"./input.component-BkswokZ4.js";import"./textarea.component-PFoy8i6F.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-YMbwVZ8w.js";import"./checkbox-group.component-CNt-vMey.js";import"./toggle-control-base.component-Cd3XPr-_.js";import"./minus-small.component-PVROivyw.js";import"./radio-group.component-D40av6Qm.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
