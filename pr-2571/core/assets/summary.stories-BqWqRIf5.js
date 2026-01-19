import{x as t}from"./iframe-Dq4KnV63.js";import{a}from"./argTableProps-n5KuER0n.js";import"./summary-DrOaOeCS.js";import"./datepicker-C87K4Pjo.js";import"./dropdown-BPN6Byyx.js";import"./option-CWTwGDUn.js";import"./menu-heading-18UX4DuC.js";import"./input-BHWx30nR.js";import"./rocket-CWxbn90a.js";import"./checkbox-group-jZ2jTsDi.js";import"./radio-group-DxkuMoKb.js";import"./summary.component-B5m7TxF9.js";import"./query-async-CX2yabFj.js";import"./datepicker.component-ZhHhcc5Q.js";import"./localized-decorator-C-CcTGIl.js";import"./ref-CtLJujVs.js";import"./dropdown.component-BQJIQk4G.js";import"./icon.component-BHGNAYjw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B2qVm3Uu.js";import"./form-control-header.component-BS8e5oYT.js";import"./badge.component-CNs8ys8e.js";import"./flex.component-BnWYtpRs.js";import"./triangle-exclamation.component-DiM029I-.js";import"./card.component-C6G7l2lb.js";import"./unwrap-slots-Dd_WEpqp.js";import"./checkmark.component-CwAdZ8TD.js";import"./rbcb-toggle.template-Cbi5yTL0.js";import"./chevron-bottom.component-1RkXHrgR.js";import"./cross-small.component-C3NNzybn.js";import"./popover.component-BXSvquuo.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-hbGM7Tyb.js";import"./calender-add.component-S83r-a0T.js";import"./chevron-left.component-BsMp0Eg8.js";import"./chevron-right.component-1gCppXRR.js";import"./arrow-up.component-A2REoylv.js";import"./menu-heading.component-O3OLwpxh.js";import"./input.component-DFIKuMww.js";import"./textarea.component-DmP-R0WS.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DCmDlBIJ.js";import"./checkbox-group.component-CyoRrY3n.js";import"./toggle-control-base.component-DYD4TxuK.js";import"./minus-small.component-DjUfUada.js";import"./radio-group.component-a_bEs9v9.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
