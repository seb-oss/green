import{x as t}from"./iframe-BQ4eNaz6.js";import{a}from"./argTableProps--jdXpSJZ.js";import"./summary-DQe9x3uf.js";import"./datepicker-Dv-2XFyN.js";import"./dropdown-CHGZG_wM.js";import"./option-CWRkO3U1.js";import"./menu-heading-BL4ZJu2u.js";import"./input-DN4qhzoP.js";import"./rocket-SrUKsZq_.js";import"./checkbox-group-Ctb6AFNN.js";import"./radio-group-7MaBsZv8.js";import"./summary.component-CVO43keb.js";import"./query-async-S9tlB0oE.js";import"./datepicker.component-D9pLrh_s.js";import"./localized-decorator-gl2Mi8lZ.js";import"./ref-WwsxjMAQ.js";import"./calendar.component-BfVkdSEI.js";import"./dropdown.component-vyaBybno.js";import"./icon.component-CjYBnmJh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C4btTQmD.js";import"./form-control-header.component-C1ot8qTD.js";import"./badge.component-vtnItBZ4.js";import"./flex.component-BRb9Ckho.js";import"./triangle-exclamation.component-s7-XlqVU.js";import"./card.component-B2Lp7-rO.js";import"./unwrap-slots-CoxYACWp.js";import"./checkmark.component-BXLv6pt4.js";import"./rbcb-toggle.template-z_ElTH4R.js";import"./chevron-bottom.component-piiKETGy.js";import"./cross-small.component-D1IbJpKt.js";import"./popover.component-CuS54Khp.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CvuzOi6V.js";import"./chevron-left.component-CK4sxWvb.js";import"./chevron-right.component-ENnpf8rI.js";import"./arrow-up.component-zP9ryv3f.js";import"./menu-heading.component-B9QwWz8H.js";import"./input.component-CoUiMsVl.js";import"./textarea.component-BWIS72vc.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CrQdY94s.js";import"./checkbox-group.component-BbITt78E.js";import"./toggle-control-base.component-DAsKk4VC.js";import"./minus-small.component-DbqsET36.js";import"./radio-group.component-CV1D3VUq.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
