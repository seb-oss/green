import{x as t}from"./iframe-DuOxvxMM.js";import{a}from"./argTableProps-BLilrDpD.js";import"./summary-X5QpZQbR.js";import"./datepicker-CUoq1-vv.js";import"./dropdown-vV8TRLmu.js";import"./option-vGPoYa4c.js";import"./menu-heading-DaBZYxt4.js";import"./input-Cpy96h5G.js";import"./rocket-BPDCow4u.js";import"./checkbox-group-DU7WgMS7.js";import"./radio-group-CfnpzASN.js";import"./summary.component-CM_j9kwT.js";import"./query-async-BkcgD29f.js";import"./datepicker.component-B3YvGMQ6.js";import"./localized-decorator-w0AHHsgk.js";import"./ref-8r6n27it.js";import"./calendar.component-Dj7Q9xG0.js";import"./dropdown.component-B-vhxiYz.js";import"./icon.component-CUEcHyr6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D7xVh_Gm.js";import"./form-control-header.component-DZw6gUf-.js";import"./badge.component-DIwENjkK.js";import"./flex.component-Fp2Ol_1y.js";import"./triangle-exclamation.component-DtUO3APk.js";import"./card.component-D_CSQy-c.js";import"./unwrap-slots-QgelGEyB.js";import"./checkmark.component-gaTjbr3B.js";import"./rbcb-toggle.template-DCM1uqub.js";import"./chevron-bottom.component-B0I98ULO.js";import"./cross-small.component--QHBwLvf.js";import"./popover.component-DqcSBbha.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-9S1aX7tC.js";import"./chevron-left.component-ChTCQH5a.js";import"./chevron-right.component-Bz6-tiAW.js";import"./arrow-up.component-CjXopY0o.js";import"./menu-heading.component-BjBC8wPC.js";import"./input.component-st0gsF6r.js";import"./textarea.component--u_tUltj.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BpJAUa9P.js";import"./checkbox-group.component-CExIvhw0.js";import"./toggle-control-base.component-DKMApslq.js";import"./minus-small.component-BsirOjPV.js";import"./radio-group.component-Bah04Gs3.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
