import{x as t}from"./iframe-1F4SKICq.js";import{a}from"./argTableProps-BdjseJtq.js";import"./summary-DAbPQJU1.js";import"./datepicker-DBiXC3y8.js";import"./dropdown-BWZl55zn.js";import"./option-aw_n14ib.js";import"./menu-heading-Bf5GC1D7.js";import"./input-DtMojvk1.js";import"./rocket-xrAG-dik.js";import"./checkbox-group-Dc8I17mw.js";import"./radio-group-BUxh5-3Y.js";import"./summary.component-DGDfP7Sm.js";import"./query-async-fQNhZeyO.js";import"./datepicker.component-B5tOHI92.js";import"./localized-decorator-B9zHb0OH.js";import"./ref-B8GukhfU.js";import"./dropdown.component-DNuFo7a9.js";import"./icon.component-0VF-ANJx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-nGXz20Vn.js";import"./form-control-header.component-Cn-Hw8Xz.js";import"./badge.component-BD7ADR-p.js";import"./flex.component-DSn4JYs1.js";import"./triangle-exclamation.component-Cd0wi4fM.js";import"./card.component-DgL5FTy7.js";import"./unwrap-slots-DAJKdcHw.js";import"./checkmark.component-8aXcbKex.js";import"./rbcb-toggle.template-Bz-MbcQY.js";import"./chevron-bottom.component-BN7mXXnG.js";import"./cross-small.component-CoJsr_cV.js";import"./popover.component-r8YlN6Fa.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Bzu3RkuE.js";import"./calender-add.component-gl0FAXAV.js";import"./chevron-left.component-D23Jysa7.js";import"./chevron-right.component-C96f8ZaC.js";import"./arrow-up.component-Dd5cM-mL.js";import"./menu-heading.component-SadOz8wl.js";import"./input.component-yGkqTyd_.js";import"./textarea.component-CTTgf_Bj.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DpmZAgsj.js";import"./checkbox-group.component-7LttORj4.js";import"./toggle-control-base.component-CzfzUQUo.js";import"./minus-small.component-C9BYbvhT.js";import"./radio-group.component-DjFb1lV9.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
