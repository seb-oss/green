import{x as t}from"./iframe-DnvYCRWK.js";import{a}from"./argTableProps-BD3g7wIm.js";import"./summary-Csy-Ih2u.js";import"./datepicker-B2AeXxaL.js";import"./dropdown-DEV92kG7.js";import"./option-6p5nVKCH.js";import"./menu-heading-BK4Jousm.js";import"./input-CFpqIzEX.js";import"./rocket-BFyh9vvY.js";import"./checkbox-group-gC6Nas0Y.js";import"./radio-group-DodPiAEH.js";import"./summary.component-SoBkA46i.js";import"./query-async-B9V5kK7S.js";import"./datepicker.component-C02kzvUN.js";import"./localized-decorator-CQPXyEqC.js";import"./ref-CpzdEq9z.js";import"./dropdown.component-DhLzNlqk.js";import"./icon.component-B4Fq6qNB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D7QseB53.js";import"./form-control-header.component-X9gzoRZy.js";import"./badge.component-Bejb8Y0I.js";import"./flex.component-C-jKumqM.js";import"./triangle-exclamation.component-C04OPBoi.js";import"./card.component-EIdXABdd.js";import"./unwrap-slots-B1VvJE-Z.js";import"./checkmark.component-DBseg7jG.js";import"./rbcb-toggle.template-UiMFOazI.js";import"./chevron-bottom.component-DYEItjSf.js";import"./cross-small.component-DvhWqvuR.js";import"./popover.component-C9lk2xfE.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D1BOgzQB.js";import"./calender-add.component-CWZ8YwCG.js";import"./chevron-left.component-CZ14AyWW.js";import"./chevron-right.component-CM9Z84BS.js";import"./arrow-up.component-CSzN2rMP.js";import"./menu-heading.component-DtgfoVXv.js";import"./input.component-D6RwwBGV.js";import"./textarea.component-erehxuz5.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CKLDD7Tr.js";import"./checkbox-group.component-TXib2Jbm.js";import"./toggle-control-base.component-BdAYgq8W.js";import"./minus-small.component-C3Ixvm3d.js";import"./radio-group.component-e7GHL3mo.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},X={...o,render:e=>t`<form style="width: 450px" novalidate>
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
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=${!0}
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"You must agree to the terms and conditions"]}}}
        >
          <gds-checkbox
            value="terms-and-conditions"
            label="I agree to the terms and conditions"
          ></gds-checkbox>
        </gds-checkbox-group>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,X as Usage,tr as __namedExportsOrder,W as default};
