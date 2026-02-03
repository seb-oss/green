import{x as t}from"./iframe-diouKOJK.js";import{a}from"./argTableProps-BW81qDo0.js";import"./summary-DK0FV4Fb.js";import"./datepicker-CuUZEQkM.js";import"./dropdown-VC28tlBs.js";import"./option-TAGSIsLc.js";import"./menu-heading-Dg2Jz18n.js";import"./input-C97cnj8j.js";import"./rocket-C1APQH6j.js";import"./checkbox-group-DRLL_g8X.js";import"./radio-group-4RhdLebK.js";import"./summary.component-4lCpCtDz.js";import"./query-async-75m01vWb.js";import"./datepicker.component-DTaFKvgO.js";import"./localized-decorator-DYC8F6RS.js";import"./ref-r9KnRyIr.js";import"./dropdown.component-CGGY8PF_.js";import"./icon.component-BYUZC0kd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bnxe7_mj.js";import"./form-control-header.component-f2a9gejf.js";import"./badge.component-DFjAPVqU.js";import"./flex.component-B-jap3kC.js";import"./triangle-exclamation.component-DTrnPpcI.js";import"./card.component-rlPQ_nNP.js";import"./unwrap-slots-DbUfkRHa.js";import"./checkmark.component-myYUcimK.js";import"./rbcb-toggle.template-DoJJ67pR.js";import"./chevron-bottom.component-Bl1dtlHG.js";import"./cross-small.component-CKT4T82S.js";import"./popover.component-BOIvvIKM.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Dn1ZxgyY.js";import"./calender-add.component-DPXPMOr4.js";import"./chevron-left.component-x9PsTY8c.js";import"./chevron-right.component-DqP5H0qY.js";import"./arrow-up.component-CFy3Q1pG.js";import"./menu-heading.component-fuc_wA8A.js";import"./input.component-QYKWoHW9.js";import"./textarea.component-CnVUjOUp.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C9DcUV7k.js";import"./checkbox-group.component-PfuvGQbo.js";import"./toggle-control-base.component-CBhblVhM.js";import"./minus-small.component-B4CXJx0g.js";import"./radio-group.component-BH64yiT5.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
