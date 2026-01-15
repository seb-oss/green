import{x as t}from"./iframe-Bq9RTfZq.js";import{a}from"./argTableProps-BvHKU4bS.js";import"./summary-ino_FBq5.js";import"./datepicker-Dal5v6Hs.js";import"./dropdown-BF7mrKNG.js";import"./option-BBvFwLfa.js";import"./menu-heading-Du1HeCYa.js";import"./input-yp9XW-i-.js";import"./rocket-Vh4HICsS.js";import"./checkbox-group-1gPiYHP5.js";import"./radio-group-DrunUcWl.js";import"./summary.component-Cbu2bkGg.js";import"./query-async-DqwBZwDD.js";import"./datepicker.component-BDGcmxfW.js";import"./localized-decorator-CkX3xfcj.js";import"./ref-B8ofMAsS.js";import"./dropdown.component-CfXhAiea.js";import"./icon.component-BbZwV3DJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CRAD8mQL.js";import"./form-control-header.component-ByEjJK8V.js";import"./badge.component-DDdQuGEn.js";import"./flex.component-DEey0ruJ.js";import"./triangle-exclamation.component-BZms3oQM.js";import"./card.component-DLocLk9G.js";import"./unwrap-slots-ibKpmp-W.js";import"./checkmark.component-DPB6GUNY.js";import"./rbcb-toggle.template-DVX333LH.js";import"./chevron-bottom.component-CStQI4EE.js";import"./cross-small.component-BuCWGvDE.js";import"./popover.component-D8bHJrvT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Czw3rbAv.js";import"./calender-add.component-kLJlDD7q.js";import"./chevron-left.component-rAhu8A42.js";import"./chevron-right.component-DS7Hc5Qq.js";import"./arrow-up.component-LTLqx6Y3.js";import"./menu-heading.component-Dlh7NJjC.js";import"./input.component-BjAdW6p-.js";import"./textarea.component-IFQK6Xc8.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CbKxqtOS.js";import"./checkbox-group.component-FJkbwbbh.js";import"./toggle-control-base.component-BMoKhkI9.js";import"./minus-small.component-I3FWJB_G.js";import"./radio-group.component-CQO_vijP.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
