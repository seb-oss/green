import{x as t}from"./iframe-DZfCx1ov.js";import{a}from"./argTableProps-ChfjJlnJ.js";import"./summary-BwUAm2jg.js";import"./datepicker--GfbLuHW.js";import"./dropdown-C3cCtmY5.js";import"./option-kwtMenhi.js";import"./menu-heading-yeKbP368.js";import"./input-BaRU349b.js";import"./rocket-DNluVPXV.js";import"./checkbox-group-CU5OfYfa.js";import"./radio-group-D5J5o941.js";import"./summary.component-0l1KADHh.js";import"./query-async-bLsOLXDr.js";import"./datepicker.component-E8DmH09S.js";import"./localized-decorator-1X_YDkor.js";import"./ref-DHGzGutZ.js";import"./dropdown.component-D_u2YXb4.js";import"./icon.component-I5R4l-On.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bp2KcGdq.js";import"./form-control-header.component-BXb7LC9Q.js";import"./badge.component-DpJKJmAc.js";import"./flex.component-DTmNbtRV.js";import"./triangle-exclamation.component-BfIVf862.js";import"./card.component-BiYx90g4.js";import"./unwrap-slots-BqWkyLT6.js";import"./checkmark.component-B3dyB-tG.js";import"./rbcb-toggle.template-Cd84ukjQ.js";import"./chevron-bottom.component-E8u2PLZU.js";import"./cross-small.component-Cg2CuOEF.js";import"./popover.component-Dbc0tYqd.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DkXQr6V7.js";import"./calender-add.component-CHIMK-qx.js";import"./chevron-left.component-B_6hVDs9.js";import"./chevron-right.component-CtRA7Z3E.js";import"./arrow-up.component-Ci89NgFc.js";import"./menu-heading.component-D0WLiUue.js";import"./input.component-DgcvKzP5.js";import"./textarea.component-BTfE5PBf.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CO2E6FlJ.js";import"./checkbox-group.component-DEngJH6f.js";import"./toggle-control-base.component-mrYoOgzp.js";import"./minus-small.component-C1Ut7xhB.js";import"./radio-group.component-2AmXfBGY.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
