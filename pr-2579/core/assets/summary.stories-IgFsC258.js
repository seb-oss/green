import{x as t}from"./iframe-nlDDYvqR.js";import{a}from"./argTableProps-p3q7J_-g.js";import"./summary-Cxc3mx6Z.js";import"./datepicker-CDDjxdhU.js";import"./dropdown-DOz9oS5S.js";import"./option--NrBzcbP.js";import"./menu-heading-DA4bSI_l.js";import"./input-0um2-B40.js";import"./rocket-D3v0lfhw.js";import"./checkbox-group-p1MTqRTs.js";import"./radio-group-BLCXCb-G.js";import"./summary.component-BcFM7Vaq.js";import"./query-async-Y7PtwARm.js";import"./datepicker.component-DkCaD7kQ.js";import"./localized-decorator-D8mSi4IG.js";import"./ref-BAbXWXqC.js";import"./dropdown.component-BROSMnJY.js";import"./icon.component-DuAs_fth.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Dtx-2fvI.js";import"./form-control-header.component-CX8XVARb.js";import"./badge.component-DopIgadB.js";import"./flex.component-CnLDL-8K.js";import"./triangle-exclamation.component-m6a9idBp.js";import"./card.component-BOnsqJuP.js";import"./unwrap-slots-jrnTcDNu.js";import"./checkmark.component-Dmd-fNGK.js";import"./rbcb-toggle.template-DPtXkoBM.js";import"./chevron-bottom.component-B-aOrEpy.js";import"./cross-small.component-stdcHKqp.js";import"./popover.component-5Vks968w.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BFO57iVi.js";import"./calender-add.component-DrYwI8fg.js";import"./chevron-left.component-BmN8Y_EL.js";import"./chevron-right.component-Ck9dh_Jx.js";import"./arrow-up.component-RPtTklXs.js";import"./menu-heading.component-rGP8n0qN.js";import"./input.component-MU2COccJ.js";import"./textarea.component-CxYFAPOE.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CHttG94U.js";import"./checkbox-group.component-C9NSJddS.js";import"./toggle-control-base.component-DPcxYXlG.js";import"./minus-small.component-CrHoGNmA.js";import"./radio-group.component-CApDCc4h.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
