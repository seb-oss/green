import{x as t}from"./iframe-DDb3w5d7.js";import{a}from"./argTableProps-zoI2F3Wn.js";import"./summary-BVFG0oZV.js";import"./datepicker-BigLNRh8.js";import"./dropdown-y7DfcaH2.js";import"./option-BC98azyc.js";import"./menu-heading-Bs8M3UmY.js";import"./input-m6gnjTnt.js";import"./rocket-xx_6tLsD.js";import"./checkbox-group-CmNL36xk.js";import"./radio-group-D2gzB9lj.js";import"./summary.component-CdX9UQ5j.js";import"./query-async-Dw4TYh5I.js";import"./datepicker.component-CY4B8Pr4.js";import"./localized-decorator-DSRvGx50.js";import"./ref-hl5vgOqk.js";import"./dropdown.component-MpkAKgfm.js";import"./icon.component-CD2cfMZJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DPVY2M0L.js";import"./form-control-header.component-Nm1KI9aj.js";import"./badge.component-CB4IR_3W.js";import"./flex.component-18DRtNZW.js";import"./triangle-exclamation.component-DJ3HG2wa.js";import"./card.component-BZZVbkVx.js";import"./unwrap-slots-CA0oo7m3.js";import"./checkmark.component-BvgoueWp.js";import"./rbcb-toggle.template-DanuwE7G.js";import"./chevron-bottom.component-Num5oAq0.js";import"./cross-small.component-CgP5_gcJ.js";import"./popover.component-DslyRozF.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Do7pq1MS.js";import"./calender-add.component-lzmZHvV0.js";import"./chevron-left.component-SjzVK7B_.js";import"./chevron-right.component-Dzcik_rD.js";import"./arrow-up.component-Di0m1aVl.js";import"./menu-heading.component-oA3gF1F2.js";import"./input.component-DtPwIXgq.js";import"./textarea.component-BYyUP1v8.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BzJvRyQ3.js";import"./checkbox-group.component-BpGY1MnJ.js";import"./toggle-control-base.component-B2dKIuls.js";import"./minus-small.component-ByDi6Hk7.js";import"./radio-group.component-BPaoLUMz.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
