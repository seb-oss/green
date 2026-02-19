import{x as t}from"./iframe-ClQhXCfa.js";import{a}from"./argTableProps-BMTvtpp0.js";import"./summary-DBDSpDzr.js";import"./datepicker-i3gAvdpm.js";import"./dropdown-DeiixPQQ.js";import"./option-DsToLQLY.js";import"./menu-heading-BbiADlGJ.js";import"./input-Cl712Yky.js";import"./rocket-GtNzPHfY.js";import"./checkbox-group-BLsFPsfd.js";import"./radio-group-CXESwTkT.js";import"./summary.component-B7Mj5fJa.js";import"./query-async-fpNMfdJ5.js";import"./datepicker.component-xaCL1T7p.js";import"./localized-decorator-Bl6LP6Xe.js";import"./ref-C-EmMlx6.js";import"./dropdown.component-BwrDbPKG.js";import"./icon.component-TF5XNcxQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DwZ5JB3O.js";import"./form-control-header.component-Cajz3VXt.js";import"./badge.component-Bdl3pptY.js";import"./flex.component-fC1vQ49Q.js";import"./triangle-exclamation.component-Cd07ZSI4.js";import"./card.component-iVbpGFH9.js";import"./unwrap-slots-uQmHj09u.js";import"./checkmark.component-C2t1Azz3.js";import"./rbcb-toggle.template-CqzPzWux.js";import"./chevron-bottom.component-SrMZvy0d.js";import"./cross-small.component-zppJ4jxB.js";import"./popover.component-BWjYtO69.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DDuG3Frf.js";import"./calender-add.component-D_lx8_Z9.js";import"./chevron-left.component-Dc_3tUoj.js";import"./chevron-right.component-4qQvRuEy.js";import"./arrow-up.component-C76D3-0g.js";import"./menu-heading.component-D-9usaS6.js";import"./input.component-BMdfky-v.js";import"./textarea.component-CTHwFIku.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DLJ2qE_P.js";import"./checkbox-group.component-CIwV9wDh.js";import"./toggle-control-base.component-Dt82qu4_.js";import"./minus-small.component-CgjPu8ta.js";import"./radio-group.component-xLayqUf8.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
