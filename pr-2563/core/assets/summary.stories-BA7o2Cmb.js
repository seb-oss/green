import{x as t}from"./iframe-DKtVfO4i.js";import{a}from"./argTableProps-CT5EeQLh.js";import"./summary-DRaNOrAV.js";import"./datepicker-DblG4r2k.js";import"./dropdown-TonUjRT5.js";import"./option-fYCea4dr.js";import"./menu-heading-DTPVcofd.js";import"./input-DTxp7f7M.js";import"./rocket-D_re8v-C.js";import"./checkbox-group-5IWkGNiy.js";import"./radio-group-BzOMBeZQ.js";import"./summary.component-CrxMArLn.js";import"./query-async-DWMm6qGE.js";import"./datepicker.component-o08ycI2D.js";import"./localized-decorator-ChlCLfkP.js";import"./ref-C0PmBB1s.js";import"./dropdown.component-BfR4WwWs.js";import"./icon.component-Ckr318eu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-gRrrSpvM.js";import"./form-control-header.component-CzRH-me5.js";import"./badge.component-D1ciBwfK.js";import"./flex.component-Lw7CX6Ts.js";import"./triangle-exclamation.component-wPsgu4NP.js";import"./card.component-5yyoJszG.js";import"./unwrap-slots-pKiGYXz6.js";import"./checkmark.component-CfIYgnhC.js";import"./rbcb-toggle.template-CK990ZzC.js";import"./chevron-bottom.component-uNtfeCe8.js";import"./cross-small.component-DE6lcoJt.js";import"./popover.component-DrisHnCR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DwqwQiIg.js";import"./calender-add.component-DgI14sSW.js";import"./chevron-left.component-CppQ091c.js";import"./chevron-right.component-CV5oRiwj.js";import"./arrow-up.component-zuEZY4B3.js";import"./menu-heading.component-DtKW4VKW.js";import"./input.component-cTMe3jgq.js";import"./textarea.component-rWNgyoPE.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CP1_BBSP.js";import"./checkbox-group.component-Dcm4P1w3.js";import"./toggle-control-base.component-CgBP3nis.js";import"./minus-small.component-C3TZms5C.js";import"./radio-group.component-ByfmwlUj.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
