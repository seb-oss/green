import{x as t}from"./iframe-hOF0QXhq.js";import{a}from"./argTableProps-DrYJdFYi.js";import"./summary-llHH-nqS.js";import"./datepicker-zumNxzzM.js";import"./dropdown-CPSOkRkB.js";import"./option-BGjXcJrB.js";import"./menu-heading-DQBTKJ7g.js";import"./input-wz3MBq_C.js";import"./rocket-CdxoFCjj.js";import"./checkbox-group-CvhEjtp0.js";import"./radio-group-CoS2gPUi.js";import"./summary.component-_UJOgbSF.js";import"./query-async-BkQQwkHw.js";import"./datepicker.component-C1Cnozyl.js";import"./localized-decorator-Bg9TnhtJ.js";import"./ref-Dn3iUkse.js";import"./dropdown.component--TK6FBWg.js";import"./icon.component-10D176rT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Z_Xsnuy-.js";import"./form-control-header.component-Eg4MEFdJ.js";import"./badge.component-DHoRWkqn.js";import"./flex.component-CBkQFOb4.js";import"./triangle-exclamation.component-C-OuuYdS.js";import"./card.component-CKkLG6yj.js";import"./unwrap-slots-BZYFDt5d.js";import"./checkmark.component-D_sDeeKc.js";import"./rbcb-toggle.template-DOKNCFpi.js";import"./chevron-bottom.component-DdzaduyI.js";import"./cross-small.component-BtSanF3R.js";import"./popover.component-_RgAKYqt.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CIBagM_I.js";import"./calender-add.component-uejKymMj.js";import"./chevron-left.component-CShGXAad.js";import"./chevron-right.component-C2wysJWd.js";import"./arrow-up.component-14nxuG5W.js";import"./menu-heading.component-D_A7p4V6.js";import"./input.component-DRHilbIJ.js";import"./textarea.component-Bd9Cejzq.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D-hpbKrD.js";import"./checkbox-group.component-Cfd2UqiK.js";import"./toggle-control-base.component-blPIUMlc.js";import"./minus-small.component-yBlbRtXF.js";import"./radio-group.component-CNM9hjOz.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
