import{x as t}from"./iframe-BEPLVs1y.js";import{a}from"./argTableProps-TLk4yset.js";import"./summary-CDfZYo22.js";import"./datepicker-C1tTBSVO.js";import"./dropdown-D8PLbgBe.js";import"./option-N-xqJDDd.js";import"./menu-heading-f6z39vyX.js";import"./input-BD69f-3d.js";import"./rocket-z2FCaXfu.js";import"./checkbox-group-CnNkxei5.js";import"./radio-group-DN4cOjtG.js";import"./summary.component-I3PtSDDq.js";import"./query-async-ByCVGNuu.js";import"./datepicker.component-Cbg5NrxB.js";import"./localized-decorator-BmLDxFUn.js";import"./ref-Dw-nne_i.js";import"./dropdown.component-CThi8wwS.js";import"./icon.component-ZivparLU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-e0qtVo7_.js";import"./form-control-header.component-CT2y7nM0.js";import"./badge.component-DP7ZHred.js";import"./flex.component-BiPoVA2f.js";import"./triangle-exclamation.component-7uLY9nIj.js";import"./card.component-COuxVN8N.js";import"./unwrap-slots-4I7Jj2B0.js";import"./checkmark.component-OX-iRULa.js";import"./rbcb-toggle.template-dvUn0ZBv.js";import"./chevron-bottom.component-BoCR3kZj.js";import"./cross-small.component-Dh5cjwaB.js";import"./popover.component-mQR_8C5Q.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-js35eNP9.js";import"./calender-add.component-C2jC2FCA.js";import"./chevron-left.component-BhrhBnNQ.js";import"./chevron-right.component-u3Y3VA5h.js";import"./arrow-up.component-DUN1k0n4.js";import"./menu-heading.component-tge7WB7Q.js";import"./input.component-BqtExE5U.js";import"./textarea.component-CGhOTm98.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DW4z7geG.js";import"./checkbox-group.component-CQEcpO2G.js";import"./toggle-control-base.component-Cs-mRTBn.js";import"./minus-small.component-DwZJ9EPf.js";import"./radio-group.component-GEC9yJSo.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
