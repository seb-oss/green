import{x as t}from"./iframe-C-vSePkR.js";import{a}from"./argTableProps-CtVGYQM_.js";import"./summary-CpnnJMvG.js";import"./datepicker-Ci09MVvb.js";import"./dropdown-C8QgxOoN.js";import"./option-uQiUwQr7.js";import"./menu-heading-BrzZ8rCz.js";import"./input-TMtebSZc.js";import"./rocket-IUr5FeOQ.js";import"./checkbox-group-DYAUi9GE.js";import"./radio-group-Blz9wg7z.js";import"./summary.component-CNJQSSrJ.js";import"./query-async-CIIJoAyw.js";import"./datepicker.component-DvI5SEeC.js";import"./localized-decorator-KpgV2Yt6.js";import"./ref-Dwt_4f_g.js";import"./dropdown.component-DR4sNBE_.js";import"./icon.component-Ca-hYHGF.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DTG53aFA.js";import"./form-control-header.component-Cf7raF4a.js";import"./badge.component-DMC4L3IL.js";import"./flex.component-C5LxecxV.js";import"./triangle-exclamation.component-BVj8rc2f.js";import"./card.component-dplERBBH.js";import"./unwrap-slots-CzPAGoEk.js";import"./checkmark.component-Cb_OXouL.js";import"./rbcb-toggle.template-BypwAjd-.js";import"./chevron-bottom.component-DtmY9UfK.js";import"./cross-small.component-svKLtk3x.js";import"./popover.component-DqaIpsq4.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cdb4mlgk.js";import"./calender-add.component-DGqs_DK5.js";import"./chevron-left.component-Cmic1Zob.js";import"./chevron-right.component-N5pmJV0M.js";import"./arrow-up.component-DghJvCtM.js";import"./menu-heading.component-0ZFJAxq3.js";import"./input.component-ZkrOLmaG.js";import"./textarea.component-CNA6MW-P.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B-pw6ycg.js";import"./checkbox-group.component-CdNqECoc.js";import"./toggle-control-base.component-B-4tmv-4.js";import"./minus-small.component-dRHP6ami.js";import"./radio-group.component-C1pvRT02.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},Y={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,Y as Usage,tr as __namedExportsOrder,X as default};
