import{x as t}from"./iframe-CGVjz2_e.js";import{a}from"./argTableProps-DOxNT6OO.js";import"./summary-DV2mNssw.js";import"./datepicker-B3tpZXDV.js";import"./dropdown-CzucySjg.js";import"./option-DVfJoRFa.js";import"./menu-heading-B87utlLm.js";import"./input-Bun-BPa_.js";import"./rocket-CvlxiRto.js";import"./checkbox-group-DnHf88hk.js";import"./radio-group-CTpsE-F9.js";import"./summary.component-DCEivJgF.js";import"./query-async-CsxdzFI-.js";import"./datepicker.component-BRK6toGX.js";import"./localized-decorator-CnSFr7gy.js";import"./ref-BgqP-0YG.js";import"./calendar.component-BTg2iQbj.js";import"./dropdown.component-DnidoXdy.js";import"./icon.component-Dnah42s8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Vv-3iYKP.js";import"./form-control-header.component-D6F4z3MS.js";import"./badge.component-CpJu-jy8.js";import"./flex.component-tPhgzTIn.js";import"./triangle-exclamation.component-0DCTdmi0.js";import"./card.component-BR-VdkaL.js";import"./unwrap-slots-DA5BOF8R.js";import"./checkmark.component-B49MwxRP.js";import"./rbcb-toggle.template-BtKeatJh.js";import"./chevron-bottom.component-Cq7I5Ko3.js";import"./cross-small.component-DRElvAQH.js";import"./popover.component-B3TqAnDJ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-C76l8juA.js";import"./chevron-left.component-2EHluU5L.js";import"./chevron-right.component-aVQ3xCId.js";import"./arrow-up.component-C9xOhclp.js";import"./menu-heading.component-CK3w9QxU.js";import"./input.component-Dl4wyCph.js";import"./textarea.component-DStP4DAs.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Dq2E6BqT.js";import"./checkbox-group.component-Don2S4JC.js";import"./toggle-control-base.component-CsLoyBAP.js";import"./minus-small.component-DhgeJywE.js";import"./radio-group.component-B5Q8F5MQ.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
