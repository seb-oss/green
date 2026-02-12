import{x as t}from"./iframe-Dp9IHT7M.js";import{a}from"./argTableProps-R5F9VmLh.js";import"./summary-Bmhw8ukQ.js";import"./datepicker-CC5Led38.js";import"./dropdown-9RtTLooV.js";import"./option-CJkVD0Fn.js";import"./menu-heading-Bpca4_yY.js";import"./input-DMuoCfL5.js";import"./rocket-Dgfgt8iW.js";import"./checkbox-group-COyT8xCQ.js";import"./radio-group-DB-ZPGbv.js";import"./summary.component-Bra37iT6.js";import"./query-async-CEcZVkp5.js";import"./datepicker.component-BdGB45lg.js";import"./localized-decorator-DE1HqyVs.js";import"./ref-CEhLC3U6.js";import"./dropdown.component-B4bUmix9.js";import"./icon.component-BLFwunDp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BvHSQGTy.js";import"./form-control-header.component-BoOmZUfj.js";import"./badge.component-mqcacaXY.js";import"./flex.component-_Iuoz229.js";import"./triangle-exclamation.component-D4pv6Zbk.js";import"./card.component-BwAAcLuz.js";import"./unwrap-slots-udkjBpOx.js";import"./checkmark.component-rBHvtd9D.js";import"./rbcb-toggle.template-Ch9loGqO.js";import"./chevron-bottom.component-Cz95kOpL.js";import"./cross-small.component-CVCCZJcL.js";import"./popover.component-DtrkYBYr.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-7-lTInaO.js";import"./calender-add.component-DrtG1yjw.js";import"./chevron-left.component-C5NtJykM.js";import"./chevron-right.component-DbF1T6yw.js";import"./arrow-up.component-B9zyVFT2.js";import"./menu-heading.component-BCbLIa0s.js";import"./input.component-BdDf24zP.js";import"./textarea.component-CfGGTqdF.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BzswU7gk.js";import"./checkbox-group.component-BB8cudaV.js";import"./toggle-control-base.component-Cjh7_0mJ.js";import"./minus-small.component-D2gZVWVn.js";import"./radio-group.component-COj4zDPO.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
