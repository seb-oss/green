import{x as t}from"./iframe-BkGvYmww.js";import{a}from"./argTableProps-CG7WeaAj.js";import"./summary-Cu_1eNnW.js";import"./datepicker-BU1l5QLj.js";import"./dropdown-DWMuxDuz.js";import"./option-DCrDeJvU.js";import"./menu-heading-DWZrBJGA.js";import"./input-Dh875efU.js";import"./rocket-B9azPom0.js";import"./checkbox-group-q_XkH6qo.js";import"./radio-group-C3hgwW9T.js";import"./summary.component-Dzz_rnr9.js";import"./query-async-CpfpMiD0.js";import"./datepicker.component-DuURiLn6.js";import"./localized-decorator-CtflH7fI.js";import"./ref-BdcT4Ajl.js";import"./dropdown.component-B5DKHaCl.js";import"./icon.component-Duin8-xy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DtI9I_pH.js";import"./form-control-header.component-vkrs_L10.js";import"./badge.component-B38mBsFA.js";import"./flex.component-CsUSGEaD.js";import"./triangle-exclamation.component-sKxxe7HO.js";import"./card.component-jEkPx2Ld.js";import"./unwrap-slots-CxjRisog.js";import"./checkmark.component-G90VplZx.js";import"./rbcb-toggle.template-Dx0LDhJP.js";import"./chevron-bottom.component-By6_1Zbi.js";import"./cross-small.component-TJwuRnEb.js";import"./popover.component-CNOuX2Xv.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DDAuhv0X.js";import"./calender-add.component-0apgTCGO.js";import"./chevron-left.component-CNouHmdE.js";import"./chevron-right.component-DtOul6S_.js";import"./arrow-up.component-CAR1UBtP.js";import"./menu-heading.component-B0mjYvYg.js";import"./input.component-BS8YdS2P.js";import"./textarea.component-BacQFsNx.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C9_mNNS9.js";import"./checkbox-group.component-BvRAMf3_.js";import"./toggle-control-base.component-Dqguf-0A.js";import"./minus-small.component-SyIexbYq.js";import"./radio-group.component-Br67NFun.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
