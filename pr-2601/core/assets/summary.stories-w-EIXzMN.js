import{x as t}from"./iframe-BGqbqd8h.js";import{a}from"./argTableProps-CcX74XCV.js";import"./summary-DG5q79Ly.js";import"./datepicker-DljzKQ2R.js";import"./dropdown-D0XMYbBR.js";import"./option-CrJprL40.js";import"./menu-heading-Df2KpD7z.js";import"./input-yuHlJVSe.js";import"./rocket-BcubeB1U.js";import"./checkbox-group-mzYjBKCA.js";import"./radio-group-DxxayRyA.js";import"./summary.component-B09FwxI7.js";import"./query-async-sXK7zbxy.js";import"./datepicker.component-YbD6lg0b.js";import"./localized-decorator-CZpYH3pp.js";import"./ref-BuJ8qdGF.js";import"./dropdown.component-BgLSB8BE.js";import"./icon.component-B9o9Bgs_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Mz2dZFOh.js";import"./form-control-header.component-CVmzNQWI.js";import"./badge.component-BMZKX0Nx.js";import"./flex.component-5Rea7j4r.js";import"./triangle-exclamation.component-Bt9k34gv.js";import"./card.component-DFTXL_Rs.js";import"./unwrap-slots-VccFsCol.js";import"./checkmark.component-CndTtyW9.js";import"./rbcb-toggle.template-DBEKuSI6.js";import"./chevron-bottom.component-BbyIDVMU.js";import"./cross-small.component-DRQk991G.js";import"./popover.component-CiOdcKGa.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BHWqX7yb.js";import"./calender-add.component-C-Kn1ezb.js";import"./chevron-left.component-HxaVfCgg.js";import"./chevron-right.component-UdsLkm7n.js";import"./arrow-up.component-C6CAEdYX.js";import"./menu-heading.component-CLfWRJ0G.js";import"./input.component-CCh5S8vE.js";import"./textarea.component-BObyMc5N.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BI-550iM.js";import"./checkbox-group.component-CrSt6KfS.js";import"./toggle-control-base.component-Ifwuns7y.js";import"./minus-small.component-DMsaEWMO.js";import"./radio-group.component-x552wYaj.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
