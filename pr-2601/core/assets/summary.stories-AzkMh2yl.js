import{x as t}from"./iframe-Cg-uRGyf.js";import{a}from"./argTableProps-Dr8eZcy2.js";import"./summary-iwXJkjK_.js";import"./datepicker-akNg3ebO.js";import"./dropdown-CcmzgjPg.js";import"./option-DrF2d6Fm.js";import"./menu-heading-2m7RZXY0.js";import"./input-BB5SK-pN.js";import"./rocket-Cl74NzAW.js";import"./checkbox-group-BcbH9hBm.js";import"./radio-group-DGvcjlcd.js";import"./summary.component-Bw_UVr1b.js";import"./query-async-CkyB6I37.js";import"./datepicker.component-BZ4cgV_j.js";import"./localized-decorator-CzsJr5KX.js";import"./ref-DIVWHMuw.js";import"./dropdown.component-DzempDK7.js";import"./icon.component-BnwNMKHB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DTTP2Qy0.js";import"./form-control-header.component-INLnmZWo.js";import"./badge.component-Dxd1vt4f.js";import"./flex.component-DTgxc_ij.js";import"./triangle-exclamation.component-Ch8gMZqz.js";import"./card.component-Bp9JCaYI.js";import"./unwrap-slots-CHUlCgbm.js";import"./checkmark.component-DjDjAcmF.js";import"./rbcb-toggle.template-CX6IQ43u.js";import"./chevron-bottom.component-Dvl7g3VO.js";import"./cross-small.component-C1ztOO65.js";import"./popover.component-Cw1WA-tO.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-g-RKeXga.js";import"./calender-add.component-DnJpx2Cg.js";import"./chevron-left.component-DJGFfve3.js";import"./chevron-right.component-CsTDfmIQ.js";import"./arrow-up.component-xgFDtfJ-.js";import"./menu-heading.component-DoRAI7nX.js";import"./input.component-BRvO8urI.js";import"./textarea.component-ByONCzRK.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CSJ2nJHQ.js";import"./checkbox-group.component-CNlbajIV.js";import"./toggle-control-base.component-C-Oe1jke.js";import"./minus-small.component-BuZdhMxq.js";import"./radio-group.component-Diyy9cfK.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
