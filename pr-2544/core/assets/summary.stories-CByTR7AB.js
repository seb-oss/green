import{x as t}from"./iframe-DijEw74_.js";import{a}from"./argTableProps-CiaERFqh.js";import"./summary-DudKV7rz.js";import"./datepicker-Clrxrbfx.js";import"./dropdown-XS3UTf-d.js";import"./option-BCbXOBU9.js";import"./menu-heading-B6GuQ4zJ.js";import"./input-mfkOci2M.js";import"./rocket-B5fJSAct.js";import"./checkbox-group-D7iQmuWw.js";import"./radio-group-CrwrwYVz.js";import"./summary.component-Dv_0t6iy.js";import"./query-async-Cffx9de5.js";import"./datepicker.component-B277S764.js";import"./localized-decorator-Cue1qFC5.js";import"./ref-BIzzhEfv.js";import"./dropdown.component-Bq7HSYyv.js";import"./icon.component-ZyiLm2zQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CVtUowK0.js";import"./form-control-header.component-CAC8Ys7l.js";import"./badge.component-DBObLPaO.js";import"./flex.component-BmJ0jVPN.js";import"./triangle-exclamation.component-w-VWHqr5.js";import"./card.component-GP9cGCKF.js";import"./unwrap-slots-CYhaXYjY.js";import"./checkmark.component-JDHpl_9I.js";import"./rbcb-toggle.template-CDQavUAb.js";import"./chevron-bottom.component-gI35QfTx.js";import"./cross-small.component-Cr5f3_bC.js";import"./popover.component-Dh7zNXtg.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BR8qbflb.js";import"./calender-add.component-DJZDOPLx.js";import"./chevron-left.component-qje1FkY3.js";import"./chevron-right.component-CiG2-JeT.js";import"./arrow-up.component-mRpcfVhR.js";import"./menu-heading.component-DlmY0O3f.js";import"./input.component-CPK1GBuw.js";import"./textarea.component-BpgdMzgX.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BgP5wbdD.js";import"./checkbox-group.component-CTdDCnrP.js";import"./toggle-control-base.component-BKLb9Ifn.js";import"./minus-small.component-Dya9K-8x.js";import"./radio-group.component-b5kmASGs.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
