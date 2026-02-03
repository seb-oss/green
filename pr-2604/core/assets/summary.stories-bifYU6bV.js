import{x as t}from"./iframe-yBlaU3uw.js";import{a}from"./argTableProps-W5EXrFoQ.js";import"./summary-Bq2aKIhH.js";import"./datepicker-D_OU-GVL.js";import"./dropdown-BIjLLunv.js";import"./option-Cfv23M2m.js";import"./menu-heading-BnRA-Tgc.js";import"./input-Dqvp66GG.js";import"./rocket-CzUdKtjs.js";import"./checkbox-group-B_XTcHAF.js";import"./radio-group-BZDnUBwU.js";import"./summary.component-DoktRwiA.js";import"./query-async-DrgfG7Px.js";import"./datepicker.component-3U6scPxC.js";import"./localized-decorator-C8wQAk1q.js";import"./ref-BCq6gcSq.js";import"./dropdown.component-jHQlZZLl.js";import"./icon.component-CnM3VYnP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CZVp7WPO.js";import"./form-control-header.component-xZv8nU8z.js";import"./badge.component-D1X78qIm.js";import"./flex.component-BpiN7Lji.js";import"./triangle-exclamation.component--PQFgrqk.js";import"./card.component-ByEYhV9a.js";import"./unwrap-slots-c89DHvMj.js";import"./checkmark.component-Cz2BPzPH.js";import"./rbcb-toggle.template-CXzC8R-B.js";import"./chevron-bottom.component-Bwfzvz6a.js";import"./cross-small.component-BiYiOMlz.js";import"./popover.component-L8DRza2A.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-6R3mSyH7.js";import"./calender-add.component-BfCIIuNf.js";import"./chevron-left.component-D-q_VZE0.js";import"./chevron-right.component-Cd-CUO3R.js";import"./arrow-up.component-CzZvcvVY.js";import"./menu-heading.component-FQdpJKNj.js";import"./input.component-DZPbhnB5.js";import"./textarea.component-BzTbmsQs.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Dtq5Zvny.js";import"./checkbox-group.component-BawD2ERf.js";import"./toggle-control-base.component-4iJQLH82.js";import"./minus-small.component-C6rKocWW.js";import"./radio-group.component-CeT0SQGe.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
