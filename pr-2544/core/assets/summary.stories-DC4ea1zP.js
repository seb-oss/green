import{x as t}from"./iframe-CqMRxf4t.js";import{a}from"./argTableProps-BB_wX5CW.js";import"./summary-B-_eSwRZ.js";import"./datepicker-nQlY6YUC.js";import"./dropdown-lmLYWzwe.js";import"./option-kNDfW8kB.js";import"./menu-heading-ZCnyysqN.js";import"./input-CizQYMls.js";import"./rocket-CcqWZl4s.js";import"./checkbox-group-B4lF0mgj.js";import"./radio-group-9J0oIQck.js";import"./summary.component-B24XPTmC.js";import"./query-async-a7Ay_F5d.js";import"./datepicker.component-CsnwxX9I.js";import"./localized-decorator-BUOryX8v.js";import"./ref-Dncwfagt.js";import"./dropdown.component-CXdsU2jn.js";import"./icon.component-DG8vwsfl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Z2Cf2-m4.js";import"./form-control-header.component-BdN3Fegb.js";import"./badge.component-xzcpzSW_.js";import"./flex.component-D01Szg88.js";import"./triangle-exclamation.component-BZ96A-0s.js";import"./card.component-C5zEme9g.js";import"./unwrap-slots-BTt_Zr5R.js";import"./checkmark.component-CsZgBC2L.js";import"./rbcb-toggle.template-C2Htw1nK.js";import"./chevron-bottom.component-CrtoyzLd.js";import"./cross-small.component-BeTsQhGl.js";import"./popover.component-C443CdSQ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Ba3b25E6.js";import"./calender-add.component-CkHJroUK.js";import"./chevron-left.component-Cs8PV6NY.js";import"./chevron-right.component-CRrajsRZ.js";import"./arrow-up.component-h7UzccuZ.js";import"./menu-heading.component-DeRQB5el.js";import"./input.component-9qwkVZ3A.js";import"./textarea.component-Q8P9pFcr.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B7QiNzXG.js";import"./checkbox-group.component-Crs3NnR5.js";import"./toggle-control-base.component-57WKfWv_.js";import"./minus-small.component-DTWXWkbu.js";import"./radio-group.component-CXn2Ypvj.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
