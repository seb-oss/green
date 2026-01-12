import{x as t}from"./iframe-DXWmPRHc.js";import{a}from"./argTableProps-DnCbNmrO.js";import"./summary-BREmIIOF.js";import"./datepicker-DlLWAa_7.js";import"./dropdown-DOTJm6y5.js";import"./option-BDbZQVmB.js";import"./menu-heading-qzfYr1SR.js";import"./input-Dpo6bKdQ.js";import"./rocket-Doq_OUjN.js";import"./checkbox-group-_eePSxg8.js";import"./radio-group-aJofQzlt.js";import"./summary.component-DHfro0tq.js";import"./query-async-DRCKWH5X.js";import"./datepicker.component-BNMmDAm9.js";import"./localized-decorator-6pJKV14k.js";import"./ref-tywtlUhY.js";import"./dropdown.component-zABT-x9A.js";import"./icon.component-D4hHTvoO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DSE6oVD8.js";import"./form-control-header.component-c8HW1SFs.js";import"./badge.component-tQFMqmpl.js";import"./flex.component-CA_YrKCB.js";import"./triangle-exclamation.component-CW7q32Uh.js";import"./card.component-CSL_lt_n.js";import"./unwrap-slots-wgFXBPpD.js";import"./checkmark.component-D-9lsGwi.js";import"./rbcb-toggle.template-lZXdfVN1.js";import"./chevron-bottom.component-ByVbeTqf.js";import"./cross-small.component-DVQsmPaB.js";import"./popover.component-B9CWbhKy.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Ds0qF_Np.js";import"./calender-add.component-BxjP9Rwc.js";import"./chevron-left.component-DlrGO6U0.js";import"./chevron-right.component-Cp9nlG16.js";import"./arrow-up.component-gILh8yAc.js";import"./menu-heading.component-okl83KVb.js";import"./input.component-jzzxJ82O.js";import"./textarea.component-4A5BF-cn.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CQod7CUH.js";import"./checkbox-group.component-CiHqNYR5.js";import"./toggle-control-base.component-5OZRVTX8.js";import"./minus-small.component-CLW9ftY1.js";import"./radio-group.component-gv_a9UPK.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
