import{x as t}from"./iframe-B9gqZTf9.js";import{a}from"./argTableProps-CvO9PM69.js";import"./summary-BCspCS38.js";import"./datepicker-DjsMl7s_.js";import"./dropdown-Cufk_Sjm.js";import"./option-CiG1QQsl.js";import"./menu-heading-zjSUlQ6y.js";import"./input-DFem1uZI.js";import"./rocket-BG-fhOiu.js";import"./checkbox-group-CCLA3ckA.js";import"./radio-group-IbcjW9m1.js";import"./summary.component-C7wz_a_6.js";import"./query-async-BV4Ig6pP.js";import"./datepicker.component-DKT-Hlhi.js";import"./localized-decorator-DtQpAqut.js";import"./ref-agaVxYZB.js";import"./dropdown.component-BaUKhydJ.js";import"./icon.component-VxoP50OR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-oF5L89RV.js";import"./form-control-header.component-D8hihKBK.js";import"./badge.component-DKS0LfWP.js";import"./flex.component-BFFdnvB3.js";import"./triangle-exclamation.component-D52Pi_rO.js";import"./card.component-7KNh_NNT.js";import"./unwrap-slots-BdgIzyb8.js";import"./checkmark.component-F2frys7D.js";import"./rbcb-toggle.template-BX87NMmH.js";import"./chevron-bottom.component-OzjayCq4.js";import"./cross-small.component-CeTXbQTx.js";import"./popover.component-D41CJr2_.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-U8WZBKh4.js";import"./calender-add.component-CJKo9HYz.js";import"./chevron-left.component-CfNcWWOj.js";import"./chevron-right.component-O5DMpBBa.js";import"./arrow-up.component-tbFslPZs.js";import"./menu-heading.component-D-JmFAgV.js";import"./input.component-Da97YKeA.js";import"./textarea.component-BNHFJVyx.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CGoktBnR.js";import"./checkbox-group.component-DoJgn0EJ.js";import"./toggle-control-base.component-DattCZ-W.js";import"./minus-small.component-BBOTlqbq.js";import"./radio-group.component-BB4PyN_-.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
