import{x as t}from"./iframe-Bnz-Jxbc.js";import{a}from"./argTableProps-BpOl5AD1.js";import"./summary-CPKGhQNL.js";import"./datepicker-NKptarQk.js";import"./dropdown-26tMZgWf.js";import"./option-DSQzsfo6.js";import"./menu-heading-CdCNmle2.js";import"./input-BbQY5FXx.js";import"./rocket-B_TKqsJ_.js";import"./checkbox-group-iLb8YIIx.js";import"./radio-group-CK9DnuDv.js";import"./summary.component-1KegRGFv.js";import"./query-async-BxLkzc2X.js";import"./datepicker.component-BVOS5rY1.js";import"./localized-decorator-DBBG6ALZ.js";import"./ref-D3eVjTnp.js";import"./dropdown.component-7b-9o7C9.js";import"./icon.component-DzKqo047.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DYrfWRw2.js";import"./form-control-header.component-Hs13BJJ1.js";import"./badge.component-BMV2PXuv.js";import"./flex.component-BX2aWvL_.js";import"./triangle-exclamation.component-BYplp8ec.js";import"./card.component-oFDBdUNx.js";import"./unwrap-slots-DHU5JNq1.js";import"./checkmark.component-DREVrtC7.js";import"./rbcb-toggle.template-k-Y9TGzj.js";import"./chevron-bottom.component-D8z6TKNW.js";import"./cross-small.component-CIqhkPC_.js";import"./popover.component-CkWt0eVK.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B0I0kPCC.js";import"./calender-add.component-BnL5C9EZ.js";import"./chevron-left.component-DvisSPe_.js";import"./chevron-right.component-DIoRwTst.js";import"./arrow-up.component-grtL4GgX.js";import"./menu-heading.component-BYAbJdXI.js";import"./input.component-DHwlgF8a.js";import"./textarea.component-541CQLoL.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D-yYmv2t.js";import"./checkbox-group.component-BPZa5cWi.js";import"./toggle-control-base.component-T3ZhNu2t.js";import"./minus-small.component-CuZJ_JnV.js";import"./radio-group.component-C0f5Pk_c.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
