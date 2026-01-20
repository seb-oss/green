import{x as t}from"./iframe-CJoIiIdK.js";import{a}from"./argTableProps-BRcL5L6l.js";import"./summary-Ck0Nd4WU.js";import"./datepicker-CRVS8iRL.js";import"./dropdown-1Nfb0c_3.js";import"./option-f5Sxxv-W.js";import"./menu-heading-BNVMnUwo.js";import"./input-CqTHqriG.js";import"./rocket-D949bZj0.js";import"./checkbox-group-BdMD8Gzn.js";import"./radio-group-Bpnt24_g.js";import"./summary.component-DILwiBev.js";import"./query-async-D89qAnl0.js";import"./datepicker.component-B8fIt5j5.js";import"./localized-decorator-B52viOIE.js";import"./ref-BmIqiLI7.js";import"./dropdown.component-Dvx48ttb.js";import"./icon.component-4oiZW30k.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Dmgf2Lnb.js";import"./form-control-header.component-Cvo4PuFM.js";import"./badge.component-BQhh_rMy.js";import"./flex.component-D_xxqkO6.js";import"./triangle-exclamation.component-D3Kl-hP3.js";import"./card.component-DhSEVE0I.js";import"./unwrap-slots-DQOTygqO.js";import"./checkmark.component-BANOg0Y2.js";import"./rbcb-toggle.template-DyWjXP9d.js";import"./chevron-bottom.component-CFe9inZH.js";import"./cross-small.component-vI5lEVSG.js";import"./popover.component-Ce8F59gP.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-I8bVqgy-.js";import"./calender-add.component-xbdLhb8E.js";import"./chevron-left.component-CYUpqUrQ.js";import"./chevron-right.component-DOCJ_MBF.js";import"./arrow-up.component-CCwR7rwi.js";import"./menu-heading.component-DKG5O6uJ.js";import"./input.component-373cxrin.js";import"./textarea.component-lwg_WhI1.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C8mAT-II.js";import"./checkbox-group.component-X7QG1cXv.js";import"./toggle-control-base.component-sjzhA5PK.js";import"./minus-small.component-BmBoNNQO.js";import"./radio-group.component-DS2M5kLY.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
