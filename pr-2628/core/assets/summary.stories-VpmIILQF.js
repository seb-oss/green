import{x as t}from"./iframe-CpqjK228.js";import{a}from"./argTableProps-DNo5QX-O.js";import"./summary-BFryjH5B.js";import"./datepicker-BQziF2sn.js";import"./dropdown-CTxIGfLS.js";import"./option-DFpVRXwI.js";import"./menu-heading-BRwn2Ek1.js";import"./input-BOlPqezT.js";import"./rocket-CQVY-dVH.js";import"./checkbox-group-CDOiuV7q.js";import"./radio-group-sPvU2l1P.js";import"./summary.component-4TvmV1fJ.js";import"./query-async-D-YClkJJ.js";import"./datepicker.component-DzJclilK.js";import"./localized-decorator-DFl8Kj1T.js";import"./ref-CBXrEj4Y.js";import"./dropdown.component-Co7hfdW8.js";import"./icon.component-DXkG6Wjx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-bUEMy_zq.js";import"./form-control-header.component-Bdbrqj94.js";import"./badge.component-8pojcllU.js";import"./flex.component-DVPv3sYg.js";import"./triangle-exclamation.component-BPVoDvof.js";import"./card.component-Dy3OvPeW.js";import"./unwrap-slots-BqDiEUFi.js";import"./checkmark.component-C7uu3_EY.js";import"./rbcb-toggle.template-CSYk5FmX.js";import"./chevron-bottom.component-V6xPgCbr.js";import"./cross-small.component-B0Y9wkNt.js";import"./popover.component-BGZBM3hK.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DWXJICuZ.js";import"./calender-add.component-C4XpAmT5.js";import"./chevron-left.component-GQ5RxHnl.js";import"./chevron-right.component-B1SB6tB4.js";import"./arrow-up.component-C9DIGAnJ.js";import"./menu-heading.component-DrB-oWlu.js";import"./input.component-OeF35e8S.js";import"./textarea.component-ChqT3_I4.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DB2-cYJE.js";import"./checkbox-group.component-15KxkrA0.js";import"./toggle-control-base.component--6kqahjJ.js";import"./minus-small.component-Cv6U06ef.js";import"./radio-group.component-Cto7C3Sx.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
