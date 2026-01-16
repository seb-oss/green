import{x as t}from"./iframe-BQQroKqS.js";import{a}from"./argTableProps-198TiHdR.js";import"./summary-DuK2EHEC.js";import"./datepicker-BQhxcoZU.js";import"./dropdown-NQE4zrpb.js";import"./option-pmtIyW3Y.js";import"./menu-heading-BMeU0EGp.js";import"./input-BerJiZVI.js";import"./rocket-DtJiwkRx.js";import"./checkbox-group-vbH8LTHL.js";import"./radio-group-DqClXkTf.js";import"./summary.component-uQuBtiF8.js";import"./query-async-DvRQ1_SU.js";import"./datepicker.component-EAIq_3Zr.js";import"./localized-decorator-CI8jsUR1.js";import"./ref-WluDU2rw.js";import"./dropdown.component-BSDt2ntF.js";import"./icon.component-CIBcNMH6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BvG71WkV.js";import"./form-control-header.component-BB2LzGxg.js";import"./badge.component-BXHBr3D9.js";import"./flex.component-7T4du4Zy.js";import"./triangle-exclamation.component-BSJKkn0y.js";import"./card.component-CqlmFwU6.js";import"./unwrap-slots-Dn5lYdo2.js";import"./checkmark.component-j9gXlqgl.js";import"./rbcb-toggle.template-AgKXFyOB.js";import"./chevron-bottom.component-eOWu3Mhh.js";import"./cross-small.component-CLHea3N6.js";import"./popover.component-C9W5Jwe2.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cb4gcDix.js";import"./calender-add.component-iyC4OnrD.js";import"./chevron-left.component-D36G6dr2.js";import"./chevron-right.component-BQd7GJKB.js";import"./arrow-up.component-9O4ksQJB.js";import"./menu-heading.component-C56s1uiT.js";import"./input.component-Ci4_KES6.js";import"./textarea.component-Ankn8Az-.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BZzkK6Gg.js";import"./checkbox-group.component-DbsQSlp0.js";import"./toggle-control-base.component-thlpuH3m.js";import"./minus-small.component-CQoQxzk2.js";import"./radio-group.component-CX8VK701.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
