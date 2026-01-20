import{x as t}from"./iframe-DgD2fjN1.js";import{a}from"./argTableProps-Dqz34gYQ.js";import"./summary-CNLoCkXL.js";import"./datepicker-i2-zorua.js";import"./dropdown-Cny45pvy.js";import"./option-CMEElI49.js";import"./menu-heading-BjEw0hbK.js";import"./input-B9orZT40.js";import"./rocket-vBjaczQE.js";import"./checkbox-group-Do5Jplpt.js";import"./radio-group-DR47gabW.js";import"./summary.component-DD1u3EGS.js";import"./query-async-9jy6IDJB.js";import"./datepicker.component-DHCCtpNB.js";import"./localized-decorator-WEI3dB5R.js";import"./ref-C3kBKanZ.js";import"./dropdown.component-CRUNiQSu.js";import"./icon.component-Hxs4rkhS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Ce-SWZSC.js";import"./form-control-header.component-D2v5yfSV.js";import"./badge.component-DX5FhhWB.js";import"./flex.component-B01_mVld.js";import"./triangle-exclamation.component-BHHjBdyF.js";import"./card.component-ByseI5GP.js";import"./unwrap-slots-BSpu2P4I.js";import"./checkmark.component-CEn0zE0p.js";import"./rbcb-toggle.template-BS-dYkpq.js";import"./chevron-bottom.component-DachHljt.js";import"./cross-small.component-CkkOmtzm.js";import"./popover.component-Bj62IjO1.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DlO6Y-7d.js";import"./calender-add.component-Ch17cN8X.js";import"./chevron-left.component-BRcBJA7p.js";import"./chevron-right.component-DvoMJJYm.js";import"./arrow-up.component-z34c0D9b.js";import"./menu-heading.component-CDt7bsjW.js";import"./input.component-DM8KH35H.js";import"./textarea.component-CoEcNadz.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-4e1VEg8E.js";import"./checkbox-group.component-BpH-wY06.js";import"./toggle-control-base.component-BnHMEl2y.js";import"./minus-small.component-CNw-kZR8.js";import"./radio-group.component-C_Lb3-cX.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
