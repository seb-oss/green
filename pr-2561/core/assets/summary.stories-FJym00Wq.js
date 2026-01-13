import{x as t}from"./iframe-R-UOI5Ct.js";import{a}from"./argTableProps-Bw-eVafG.js";import"./summary-B8dkIEJi.js";import"./datepicker-LUsqwWpQ.js";import"./dropdown-6G5_VvrW.js";import"./option-DbnPFHGj.js";import"./menu-heading-Bj90ZIqK.js";import"./input-C1ussFnL.js";import"./rocket-Bb6ZGD_Z.js";import"./checkbox-group-CcDdMGVX.js";import"./radio-group-C2kQYNaO.js";import"./summary.component-Dv11AH8Y.js";import"./query-async-xnEuN8FF.js";import"./datepicker.component-15yjPRFn.js";import"./localized-decorator-pYJBvnT-.js";import"./ref-CrpU28mu.js";import"./dropdown.component-lxW3qsHp.js";import"./icon.component-DkM0gJ3v.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-IAE_TVfb.js";import"./form-control-header.component-FoZzj2_c.js";import"./badge.component-D4pVHao9.js";import"./flex.component-Dx7fs3aT.js";import"./triangle-exclamation.component-eNxex7bN.js";import"./card.component-CWlpHV50.js";import"./unwrap-slots-CjsSP3WS.js";import"./checkmark.component-B9PxApyq.js";import"./rbcb-toggle.template-wxfey3Bh.js";import"./chevron-bottom.component-dliDxXlV.js";import"./cross-small.component-CfsKXyHM.js";import"./popover.component-DROGwjFC.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Db6v2L7t.js";import"./calender-add.component-BU4ZYub6.js";import"./chevron-left.component-BsvzfXQ6.js";import"./chevron-right.component-DPjXbPJs.js";import"./arrow-up.component-Dq6tJ_kr.js";import"./menu-heading.component-Dk0SuUap.js";import"./input.component-DWo6PtQo.js";import"./textarea.component-DgDfpqVb.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-7OMEiQ8O.js";import"./checkbox-group.component-olct-LZQ.js";import"./toggle-control-base.component-RsR-LcEu.js";import"./minus-small.component-fBw1Ozn5.js";import"./radio-group.component-DEswMRSG.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
