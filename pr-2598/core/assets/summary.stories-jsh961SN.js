import{x as t}from"./iframe-aXTL5SNE.js";import{a}from"./argTableProps-BKoJbl0l.js";import"./summary-CWVq4Ro8.js";import"./datepicker-BqmFvH6K.js";import"./dropdown-7Gor7Tm0.js";import"./option-nQvPEr5P.js";import"./menu-heading-BP6MHmhk.js";import"./input-BpJjYQdS.js";import"./rocket-BNI1aHii.js";import"./checkbox-group-BGECSeYF.js";import"./radio-group-Bkjm6qlV.js";import"./summary.component-DGBUx51I.js";import"./query-async-BfThUFw1.js";import"./datepicker.component-BeqGvcbq.js";import"./localized-decorator-CM3Vzjzt.js";import"./ref-1OBy-VeM.js";import"./dropdown.component-9EdgZPgF.js";import"./icon.component-DhFG2JS7.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Cok-stmV.js";import"./form-control-header.component-5TyQRsGt.js";import"./badge.component-D5ugRCK4.js";import"./flex.component-BzB6S2Pb.js";import"./triangle-exclamation.component-CaWaEaPo.js";import"./card.component-2prNoFXS.js";import"./unwrap-slots-lIdkDJBo.js";import"./checkmark.component-D4dHiKwr.js";import"./rbcb-toggle.template-CLIYOJHj.js";import"./chevron-bottom.component-DbQe1NgH.js";import"./cross-small.component-ChwPojX4.js";import"./popover.component-NGi7o0wZ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BMb2nfsr.js";import"./calender-add.component-cVwMRO9U.js";import"./chevron-left.component-C7tYoEaz.js";import"./chevron-right.component-C-J4nQ8M.js";import"./arrow-up.component-DcobhBfu.js";import"./menu-heading.component-Bgj86-mt.js";import"./input.component-CkLlZb54.js";import"./textarea.component-4Z4wd1Qc.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BcQsFsHq.js";import"./checkbox-group.component-BnMDhtlD.js";import"./toggle-control-base.component-BOnWLRZO.js";import"./minus-small.component-bWmXIGvv.js";import"./radio-group.component-lte6Fkus.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
