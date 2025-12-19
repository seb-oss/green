import{x as t}from"./iframe-CaSnqVAO.js";import{a}from"./argTableProps-C6iN36Xh.js";import"./summary-BSqe2Y3k.js";import"./datepicker-DTINijSf.js";import"./dropdown-BN4RHof7.js";import"./option-Buaw2w-5.js";import"./menu-heading-BFZOEErI.js";import"./input-CnK8JKF5.js";import"./rocket-Dzoz4gKZ.js";import"./checkbox-group-D-lCWiKb.js";import"./radio-group-3CXpcIMD.js";import"./summary.component-Giq8BBD5.js";import"./query-async-BkEvcfiS.js";import"./datepicker.component-D5LvP4Kf.js";import"./localized-decorator-Bh06p6zl.js";import"./ref-CJdWf_uW.js";import"./dropdown.component-Dt1m-Yrl.js";import"./icon.component-BdiabhnO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CHpZv3gZ.js";import"./form-control-header.component-zFLYIo2l.js";import"./badge.component-DKCNgvUp.js";import"./flex.component-xmOxoKSe.js";import"./triangle-exclamation.component-Cpih2oi2.js";import"./card.component-B05iLK3e.js";import"./unwrap-slots-BLDJFuxH.js";import"./checkmark.component-0YH12w0L.js";import"./rbcb-toggle.template-cBdrhMyL.js";import"./chevron-bottom.component-Bi2gF6jd.js";import"./cross-small.component-CfK7DhBz.js";import"./popover.component-BWnqnfME.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CS_XQGlh.js";import"./calender-add.component-CL9PvY-a.js";import"./chevron-left.component-CsXjrdCn.js";import"./chevron-right.component-B7hjmRAr.js";import"./arrow-up.component-IdNNQ3HM.js";import"./menu-heading.component-BM_nQlmD.js";import"./input.component-DpGK-r0-.js";import"./textarea.component-CSuOmQjN.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CZHbQZig.js";import"./checkbox-group.component-CCOnKxHp.js";import"./toggle-control-base.component-BxLGGsVO.js";import"./minus-small.component-QznebjGU.js";import"./radio-group.component-Br-ga7rI.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
