import{x as t}from"./iframe-B1vn8YXe.js";import{a}from"./argTableProps-CBieWvqJ.js";import"./summary-BgqZvBLz.js";import"./datepicker-Bj_J-lIS.js";import"./dropdown-CxMjTJeR.js";import"./option-B5wYVMoB.js";import"./menu-heading-iXwKzpeO.js";import"./input-BbJZ4HHj.js";import"./rocket-CwPWPjcJ.js";import"./checkbox-group-D2giFggL.js";import"./radio-group-B9VSZPUx.js";import"./summary.component-BOFyfQbi.js";import"./query-async-B9vJ_jZ8.js";import"./datepicker.component-CfjA4-vw.js";import"./localized-decorator-BdxueW-j.js";import"./ref-DKN74vO1.js";import"./dropdown.component-QchkDKK3.js";import"./icon.component-DRbd6nhQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DXuMCPKj.js";import"./form-control-header.component-BbohXbvt.js";import"./badge.component-PYCdsreq.js";import"./flex.component-zgxE1oym.js";import"./triangle-exclamation.component-BHeD1EO-.js";import"./card.component-ByvfZq7l.js";import"./unwrap-slots-CZaIt_jG.js";import"./checkmark.component-DzF2rl0h.js";import"./rbcb-toggle.template-CYrKYovl.js";import"./chevron-bottom.component-C5j4RYM-.js";import"./cross-small.component-uYxDBT0P.js";import"./popover.component-DoozZEIJ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B9rJdmpN.js";import"./calender-add.component-yhgHYQFo.js";import"./chevron-left.component-uty55idK.js";import"./chevron-right.component-Di7OjHum.js";import"./arrow-up.component-BPKFGBcJ.js";import"./menu-heading.component-cjGFVCjJ.js";import"./input.component-f9nLwtRz.js";import"./textarea.component-hsVQQGiu.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C239VrCF.js";import"./checkbox-group.component-D329mre-.js";import"./toggle-control-base.component-BqKmDOPI.js";import"./minus-small.component-BXIZcBm6.js";import"./radio-group.component-CRiuPFV9.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
