import{x as t}from"./iframe-B2lF6KQV.js";import{a}from"./argTableProps-D0Z9HkZ-.js";import"./summary-ptprleJC.js";import"./datepicker-BaH9iKAM.js";import"./dropdown-D6E5cAm0.js";import"./option-DQgn6KKa.js";import"./menu-heading-BRilNzZ1.js";import"./input-BcbfeGoE.js";import"./rocket-DVzLDjXo.js";import"./checkbox-group-DADdLzR5.js";import"./radio-group-QLQN1Iq9.js";import"./summary.component-DeaIYssX.js";import"./query-async-CHlbjN4P.js";import"./datepicker.component-BIAXEri7.js";import"./localized-decorator-DmwnpXt5.js";import"./ref-DicP_OXy.js";import"./dropdown.component-BAGUezBE.js";import"./icon.component-QmmjEKmh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bd0BmvSS.js";import"./form-control-header.component-_cJrqFez.js";import"./badge.component-Cd2v4q9G.js";import"./flex.component-D3FiEuxa.js";import"./triangle-exclamation.component-WQ7VdiH3.js";import"./card.component-LS_eywYY.js";import"./unwrap-slots-C4fJWq54.js";import"./checkmark.component-DzYHivbx.js";import"./rbcb-toggle.template-DaQcUlZk.js";import"./chevron-bottom.component-8q4PSK7L.js";import"./cross-small.component-BF21MkLi.js";import"./popover.component-CJEMT2tn.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-jkyCYK1w.js";import"./calender-add.component-DznG_xSX.js";import"./chevron-left.component-BaY3Jd7W.js";import"./chevron-right.component-adu4ir3m.js";import"./arrow-up.component-C2cLa8dr.js";import"./menu-heading.component-iLV1PDhk.js";import"./input.component-zv_HdVRx.js";import"./textarea.component-DI-BoXST.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Bo-7QZ3l.js";import"./checkbox-group.component-4WXowSSA.js";import"./toggle-control-base.component-BRPnQWPx.js";import"./minus-small.component-Bs0P-ZLu.js";import"./radio-group.component-D7r-vzRt.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
