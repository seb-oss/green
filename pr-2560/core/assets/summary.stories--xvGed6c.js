import{x as t}from"./iframe-CqKMOIX5.js";import{a}from"./argTableProps-P0oqvWTk.js";import"./summary-BXYHvmrK.js";import"./datepicker-BdAng8xH.js";import"./dropdown-5WKoY3gK.js";import"./option-wr5Wb7-M.js";import"./menu-heading-BV24KeE5.js";import"./input-Cgftv0v7.js";import"./rocket-C_QV943K.js";import"./checkbox-group-DRYJNgFJ.js";import"./radio-group-BmRzoFjs.js";import"./summary.component-Cws5ONVX.js";import"./query-async-Cm40O73v.js";import"./datepicker.component-DkwUNZZ4.js";import"./localized-decorator-CFtgwxVo.js";import"./ref-CDFL4nzn.js";import"./dropdown.component-DLvHkmIz.js";import"./icon.component-BhjPPF0u.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-WBmlBdLn.js";import"./form-control-header.component-DLienXhn.js";import"./badge.component-CRjLWoYj.js";import"./flex.component-BwnCzdl3.js";import"./triangle-exclamation.component-v9-kS8y7.js";import"./card.component-H7NZpziN.js";import"./unwrap-slots-BOKoZm0z.js";import"./checkmark.component-DpFv9e3Z.js";import"./rbcb-toggle.template-BAj6Ggec.js";import"./chevron-bottom.component-BAaYnwKx.js";import"./cross-small.component-WZkpYNYY.js";import"./popover.component-DZibbuew.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-1PAGNCsk.js";import"./calender-add.component-DCWNuaH6.js";import"./chevron-left.component-Y6nIvi4M.js";import"./chevron-right.component-CbTIly0t.js";import"./arrow-up.component-B1Xbs1Zp.js";import"./menu-heading.component-DHKvZRZD.js";import"./input.component-BNL7d9AB.js";import"./textarea.component-rWBDbBqx.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BDchla5p.js";import"./checkbox-group.component-DI8q5L9s.js";import"./toggle-control-base.component-DWQbhh84.js";import"./minus-small.component-DjuUhn4j.js";import"./radio-group.component-BNL3FjwY.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
