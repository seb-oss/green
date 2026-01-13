import{x as t}from"./iframe-Dhv-OfZF.js";import{a}from"./argTableProps-BXGlUnOS.js";import"./summary-CWYmVz16.js";import"./datepicker-CWI_Pkmv.js";import"./dropdown-CNpBAMfi.js";import"./option-Z43GKUKQ.js";import"./menu-heading-DjIJapTU.js";import"./input-BXSA0Mau.js";import"./rocket-B0SCe-FO.js";import"./checkbox-group-C1AKln9z.js";import"./radio-group-CshLh8uA.js";import"./summary.component-DkxHPvex.js";import"./query-async-C4xHTT6q.js";import"./datepicker.component-DNWtqRb8.js";import"./localized-decorator-CpXzMxQ1.js";import"./ref-BomApD5b.js";import"./dropdown.component-SiLgTAWn.js";import"./icon.component-pSs68CpH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-zm6rOXFn.js";import"./form-control-header.component-Bkmog4Bw.js";import"./badge.component-CtD6czE-.js";import"./flex.component-DvkXtIAD.js";import"./triangle-exclamation.component-BIondxtt.js";import"./card.component-B-_FoWIO.js";import"./unwrap-slots-Dne5jdF6.js";import"./checkmark.component-PK3tFqjS.js";import"./rbcb-toggle.template-DtDdd8PD.js";import"./chevron-bottom.component-x8HYVjXn.js";import"./cross-small.component-D9iXPUQZ.js";import"./popover.component-RTfAGIUX.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-MIfODGPo.js";import"./calender-add.component-B9AG_b1z.js";import"./chevron-left.component-BYhJ9dgk.js";import"./chevron-right.component-BxguYXGb.js";import"./arrow-up.component-B2g8mulg.js";import"./menu-heading.component-D0_hn7_g.js";import"./input.component-IggALGTG.js";import"./textarea.component-BzUPJQdC.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BXuZIhoT.js";import"./checkbox-group.component-WEoL3lSq.js";import"./toggle-control-base.component-BM8sunHt.js";import"./minus-small.component-CruQeEHS.js";import"./radio-group.component-Ck24U9Gg.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
