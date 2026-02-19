import{x as t}from"./iframe-CMGnU5sP.js";import{a}from"./argTableProps-Dl2p_p4C.js";import"./summary-7m4virac.js";import"./datepicker-CZW1Hov5.js";import"./dropdown-CC_6Nr59.js";import"./option-CPDB-QLW.js";import"./menu-heading-D2JzhqFD.js";import"./input-CSJiQfia.js";import"./rocket-C0uDnISh.js";import"./checkbox-group-0Pd6pxka.js";import"./radio-group-UmRN0LpT.js";import"./summary.component-DagqjaD1.js";import"./query-async-XNXmP2mQ.js";import"./datepicker.component-DSpiSFbQ.js";import"./localized-decorator-DJxu8cYG.js";import"./ref-CuTUotr-.js";import"./dropdown.component-BdQjcjWr.js";import"./icon.component-DlWivA6j.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CgvRP3Cj.js";import"./form-control-header.component-BCiwYAJP.js";import"./badge.component-CpkNa6U2.js";import"./flex.component-CXaYjCBZ.js";import"./triangle-exclamation.component-Bgu0A64O.js";import"./card.component-DplAei5N.js";import"./unwrap-slots-DpclvoqV.js";import"./checkmark.component-tCN0GMag.js";import"./rbcb-toggle.template-B6qcOJGR.js";import"./chevron-bottom.component-DkJ1VH8j.js";import"./cross-small.component-CJ7OXW9c.js";import"./popover.component-BEibATNX.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BhmfY1zq.js";import"./calender-add.component-Cjo2oMgF.js";import"./chevron-left.component-YPUPEnq6.js";import"./chevron-right.component-D0GoYbNj.js";import"./arrow-up.component-CsfI0SBA.js";import"./menu-heading.component-BN4CwzcA.js";import"./input.component-D4G8yoWi.js";import"./textarea.component-Ce_iAHCe.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Dm_44NM2.js";import"./checkbox-group.component-BGohpymf.js";import"./toggle-control-base.component-1SJoh0PO.js";import"./minus-small.component-RG7bZcbA.js";import"./radio-group.component-C7xLB9CP.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
