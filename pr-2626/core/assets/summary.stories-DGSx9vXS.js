import{x as t}from"./iframe-BNaQQkJH.js";import{a}from"./argTableProps-CT9p0MjM.js";import"./summary-DMNgRzxt.js";import"./datepicker-B28HYwHi.js";import"./dropdown-D3asvQSs.js";import"./option-gQIkIttS.js";import"./menu-heading-DzHBCMoh.js";import"./input-Bz5Ue07s.js";import"./rocket-BP3pLHFs.js";import"./checkbox-group-DjWDdrqo.js";import"./radio-group-DCARoJsz.js";import"./summary.component-BLCWa_Yi.js";import"./query-async-BtNFjBKD.js";import"./datepicker.component-Dz8xBAul.js";import"./localized-decorator-DnTOrFQG.js";import"./ref-DbC8iqFU.js";import"./dropdown.component-DDtb3w0T.js";import"./icon.component-BHq7_Gnp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D1Y8-ydK.js";import"./form-control-header.component-DQbdlz9Z.js";import"./badge.component-CvWke1Ph.js";import"./flex.component-BcOD8jwx.js";import"./triangle-exclamation.component-fTQxGCVG.js";import"./card.component-KzQwFi6G.js";import"./unwrap-slots-CZKkouza.js";import"./checkmark.component-CclalNAS.js";import"./rbcb-toggle.template-BDsy8iqG.js";import"./chevron-bottom.component-Bq78Axoj.js";import"./cross-small.component-jtLIWRAq.js";import"./popover.component-ltKv_bSX.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DSLTE-8y.js";import"./calender-add.component-H-d1bdqU.js";import"./chevron-left.component-6KlXlN2S.js";import"./chevron-right.component-DBrmicFc.js";import"./arrow-up.component-Mem6bGTC.js";import"./menu-heading.component-rjfMiSXd.js";import"./input.component-C8e0bDZr.js";import"./textarea.component-Bx_XEHeB.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CUv9s6sM.js";import"./checkbox-group.component-B26SxXTQ.js";import"./toggle-control-base.component-CLE_NPkN.js";import"./minus-small.component-CO0-VjBG.js";import"./radio-group.component-B_7PShcF.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
