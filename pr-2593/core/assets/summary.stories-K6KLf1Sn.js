import{x as t}from"./iframe-BZT1zFLW.js";import{a}from"./argTableProps-ps-zQReG.js";import"./summary-CJaI1sjw.js";import"./datepicker-BdYqOCb2.js";import"./dropdown-DxzrmEg9.js";import"./option-C64woHeB.js";import"./menu-heading-BBAb8Sie.js";import"./input-BOVuB6ZA.js";import"./rocket-DwZ67ekM.js";import"./checkbox-group-Dq54536T.js";import"./radio-group-0MVctYdv.js";import"./summary.component-MBxMFq4E.js";import"./query-async-BmCIJT4j.js";import"./datepicker.component-DXOkF-DA.js";import"./localized-decorator-CcBxja47.js";import"./ref-CC9SNLfc.js";import"./dropdown.component-CvZza7G9.js";import"./icon.component-Bq1dliJE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DCqQiQid.js";import"./form-control-header.component-VT5Z5Qf7.js";import"./badge.component-CjvZt4eq.js";import"./flex.component-qMZM1TSb.js";import"./triangle-exclamation.component-B7icht5P.js";import"./card.component-iRV4bi_g.js";import"./unwrap-slots-rpciDVh1.js";import"./checkmark.component-DA5U0FTS.js";import"./rbcb-toggle.template-DL1tlc3q.js";import"./chevron-bottom.component-CBervGGo.js";import"./cross-small.component-C3Y5f_gL.js";import"./popover.component-DS5Gi422.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CyX7m9zx.js";import"./calender-add.component-no-2BuMw.js";import"./chevron-left.component-DqHKUCg8.js";import"./chevron-right.component-oJYgnXZ_.js";import"./arrow-up.component-C6oarNvu.js";import"./menu-heading.component-CT8ZNkn8.js";import"./input.component-Jz2dchEL.js";import"./textarea.component-5ErnGHUn.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-nQ03mZMt.js";import"./checkbox-group.component-D7YfxUj8.js";import"./toggle-control-base.component-DADcznuB.js";import"./minus-small.component-CvDDHbzY.js";import"./radio-group.component-BXULLLkC.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
