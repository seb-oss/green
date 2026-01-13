import{x as t}from"./iframe-Bt1Yqfo9.js";import{a}from"./argTableProps-hzukFYMZ.js";import"./summary-D1DMPK5f.js";import"./datepicker-aNEt2TNM.js";import"./dropdown-lCPo0ZSt.js";import"./option-DwQIEmJ4.js";import"./menu-heading-5U1D7NIm.js";import"./input-AVte0fXR.js";import"./rocket-l_cHML1v.js";import"./checkbox-group-B16K_E1C.js";import"./radio-group-FTcgtV8d.js";import"./summary.component-Bk4BIAni.js";import"./query-async-DM0653X1.js";import"./datepicker.component-CPlC3Fna.js";import"./localized-decorator-Db2hDNTS.js";import"./ref-CzezdJpn.js";import"./dropdown.component-DjynnbDI.js";import"./icon.component-CnGrBf1q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Cqcn58iH.js";import"./form-control-header.component-A0iCm6Vi.js";import"./badge.component-2bTKzWsP.js";import"./flex.component-B24ezWRH.js";import"./triangle-exclamation.component-WLdhP4d6.js";import"./card.component-Qe0x4vpY.js";import"./unwrap-slots-DfPGwicF.js";import"./checkmark.component-DarZtqqo.js";import"./rbcb-toggle.template-BH_VgFqU.js";import"./chevron-bottom.component-BAfo35JF.js";import"./cross-small.component-CiXN725I.js";import"./popover.component-BG6Eo2Dm.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B5NliTJo.js";import"./calender-add.component-Bu4oFiqW.js";import"./chevron-left.component-B2AwqqOL.js";import"./chevron-right.component-CmHdyCbX.js";import"./arrow-up.component-BdfQs0LV.js";import"./menu-heading.component-8IWrnQGW.js";import"./input.component-H3Mb-sCc.js";import"./textarea.component-Cb_ome0M.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D1kUvR9t.js";import"./checkbox-group.component-Dc709z8V.js";import"./toggle-control-base.component-e12bRiW2.js";import"./minus-small.component-QOpEkf3P.js";import"./radio-group.component-BwEzyzmP.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
