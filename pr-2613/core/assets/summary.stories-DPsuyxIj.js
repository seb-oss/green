import{x as t}from"./iframe-NCz73qay.js";import{a}from"./argTableProps-CRbwnLW_.js";import"./summary-DQ49BsV3.js";import"./datepicker-Qnzr23J9.js";import"./dropdown-5szUnKz-.js";import"./option-CQj3RSSk.js";import"./menu-heading-DKqr2wIb.js";import"./input-Di_jdhHB.js";import"./rocket-DQNY5QqV.js";import"./checkbox-group-C5m8uq5G.js";import"./radio-group-BNwkhWTi.js";import"./summary.component-DQP-e3SK.js";import"./query-async-_CqqRNsH.js";import"./datepicker.component-CQtIwPVD.js";import"./localized-decorator-C5ligKZT.js";import"./ref-D0tBR-H0.js";import"./dropdown.component-C410EKOc.js";import"./icon.component-CTR8jJcj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BCeTBtt0.js";import"./form-control-header.component-BmkdQjMr.js";import"./badge.component-C5TmWNFX.js";import"./flex.component-CD_9lWUd.js";import"./triangle-exclamation.component-8Z38ZavA.js";import"./card.component-DjJvOxIE.js";import"./unwrap-slots-BPzla03k.js";import"./checkmark.component-BwxafSfA.js";import"./rbcb-toggle.template-ChUG7UvJ.js";import"./chevron-bottom.component-BRPLdPfd.js";import"./cross-small.component-b-I7GJb2.js";import"./popover.component-e7EQGf9e.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BfvHe5F6.js";import"./calender-add.component-DxfTOKLf.js";import"./chevron-left.component-CaYTyoEs.js";import"./chevron-right.component-C0k0iLF1.js";import"./arrow-up.component-C8eilaYY.js";import"./menu-heading.component-DdegQC1v.js";import"./input.component-rTXeTXOl.js";import"./textarea.component-WgEMojSd.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Besx7RRc.js";import"./checkbox-group.component-CX6HkZqv.js";import"./toggle-control-base.component-DQZJwK7C.js";import"./minus-small.component-ExRuT8hn.js";import"./radio-group.component-DrpjTgpx.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
