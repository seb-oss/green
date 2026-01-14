import{x as t}from"./iframe-g-Nlnl9W.js";import{a}from"./argTableProps-CEaMSs5W.js";import"./summary-CDoVjrRi.js";import"./datepicker-CEbMMste.js";import"./dropdown-D5WgKuXg.js";import"./option-CyfNNBxA.js";import"./menu-heading-0x7aEy42.js";import"./input-CzllZ-Cv.js";import"./rocket-CECTsD-0.js";import"./checkbox-group-BWoKk5oX.js";import"./radio-group-CrISq_Nf.js";import"./summary.component-C2SjeIrC.js";import"./query-async-lEkOz37G.js";import"./datepicker.component-DwSyB8v1.js";import"./localized-decorator-grrCtr3j.js";import"./ref-BP7P3OLh.js";import"./dropdown.component-D7P7Ca4I.js";import"./icon.component-V2NdZns9.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DWcsGrsm.js";import"./form-control-header.component-Cc1k_lgD.js";import"./badge.component-DlRrMNgY.js";import"./flex.component-D1UxupSd.js";import"./triangle-exclamation.component-BMMoeshQ.js";import"./card.component-o1Zu7NUq.js";import"./unwrap-slots-B74FOXMe.js";import"./checkmark.component-BjiurvDU.js";import"./rbcb-toggle.template-CSFMk9OY.js";import"./chevron-bottom.component-BlYwNIov.js";import"./cross-small.component-Ce43WbK5.js";import"./popover.component-CNTAczEM.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C7sQCXuy.js";import"./calender-add.component-CxWfRmCS.js";import"./chevron-left.component-CxALa9gu.js";import"./chevron-right.component-mfkZMoWa.js";import"./arrow-up.component-BjDPblZL.js";import"./menu-heading.component-DcsnIavK.js";import"./input.component-OmzHtdLK.js";import"./textarea.component-D5XlrHj2.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DGw_BB51.js";import"./checkbox-group.component-BlmCRqsK.js";import"./toggle-control-base.component-DzBk6-Xd.js";import"./minus-small.component-oN2MmOR2.js";import"./radio-group.component-DX0wg8BJ.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
