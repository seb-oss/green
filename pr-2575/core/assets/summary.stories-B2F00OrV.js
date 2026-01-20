import{x as t}from"./iframe-Ckb5JYy8.js";import{a}from"./argTableProps-MFub6R6M.js";import"./summary-C-cLwGvp.js";import"./datepicker-CU5WYSET.js";import"./dropdown-DxbN5KUI.js";import"./option-DX83fWh_.js";import"./menu-heading-C2yWEOA1.js";import"./input-DwP0X9yO.js";import"./rocket-BKvpNjZZ.js";import"./checkbox-group-C_uo4bd6.js";import"./radio-group-DPVhJ52U.js";import"./summary.component-Cp87_yet.js";import"./query-async-BurFEgP8.js";import"./datepicker.component-Djdc7V--.js";import"./localized-decorator-BKTLIKfh.js";import"./ref-CByMp4gX.js";import"./dropdown.component-DT0LWzMQ.js";import"./icon.component-4t6GFlNj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-endqD0Oj.js";import"./form-control-header.component-D8ZpFBPV.js";import"./badge.component-CUqc9JKw.js";import"./flex.component-bq63keLP.js";import"./triangle-exclamation.component-BdyI1rwo.js";import"./card.component-y7GisDGl.js";import"./unwrap-slots-NTTsYF-G.js";import"./checkmark.component-C-Qy47Nt.js";import"./rbcb-toggle.template-_EW_2Czd.js";import"./chevron-bottom.component-52ydG2uN.js";import"./cross-small.component-sli8Z06C.js";import"./popover.component-B1YvKzTR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-sf1eapaq.js";import"./calender-add.component-BvMYOmp_.js";import"./chevron-left.component-B-LjpGV3.js";import"./chevron-right.component-CD1ukb72.js";import"./arrow-up.component-B26hTEf2.js";import"./menu-heading.component-Bqovk5Bc.js";import"./input.component-Crpiipdz.js";import"./textarea.component-OFRKAqg-.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D4Gpn50M.js";import"./checkbox-group.component-rw0bakzx.js";import"./toggle-control-base.component-D8di27tp.js";import"./minus-small.component-CgQJ2nqN.js";import"./radio-group.component-ZXYM_IaY.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
