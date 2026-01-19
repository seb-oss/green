import{x as t}from"./iframe-Bs7dWGrf.js";import{a}from"./argTableProps-X4Lk-nTn.js";import"./summary-C4q-3N2o.js";import"./datepicker-S78mHsb-.js";import"./dropdown-CB5yXtK5.js";import"./option-Dxa_peMM.js";import"./menu-heading-BvkbIvAa.js";import"./input-BVGL70av.js";import"./rocket-CfJ0ioBG.js";import"./checkbox-group-Bb07ESW6.js";import"./radio-group-BVt15lTN.js";import"./summary.component-C2Mtci0c.js";import"./query-async-5Iv8BDB1.js";import"./datepicker.component-ChW9lmjl.js";import"./localized-decorator-ChgUp2NR.js";import"./ref-BgBQWSkV.js";import"./calendar.component-DxzRmLyN.js";import"./dropdown.component-D42Q61SB.js";import"./icon.component-Rskfci6k.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CAe_dWvk.js";import"./form-control-header.component-BuofbzHq.js";import"./badge.component-CpMx3oxv.js";import"./flex.component-Dqm4oVBu.js";import"./triangle-exclamation.component-YpdPYQCy.js";import"./card.component--9p-OJX3.js";import"./unwrap-slots-J51lp1Fw.js";import"./checkmark.component-BELo2V_g.js";import"./rbcb-toggle.template-B1CYoWCF.js";import"./chevron-bottom.component-BfJ_Dz1W.js";import"./cross-small.component-BbvrmRvy.js";import"./popover.component-BBUhdmLZ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CdcYA3B9.js";import"./chevron-left.component-DhomWu2F.js";import"./chevron-right.component-B7d0vDpO.js";import"./arrow-up.component-udgvm7mx.js";import"./menu-heading.component-DE0QHvmH.js";import"./input.component-QkjaoBqC.js";import"./textarea.component-BpAQWxTh.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B_1tkeLy.js";import"./checkbox-group.component-CayZ8Wyn.js";import"./toggle-control-base.component-BhHD77na.js";import"./minus-small.component-COe70z7f.js";import"./radio-group.component-D2lzKnhG.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
