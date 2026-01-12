import{x as t}from"./iframe-D7LW9HlS.js";import{a}from"./argTableProps-B5Xfym_S.js";import"./summary--EYlcJzd.js";import"./datepicker-BXwHLtzk.js";import"./dropdown-CYvEpNBD.js";import"./option-C_ftsVBM.js";import"./menu-heading-BkuEpKCe.js";import"./input-D5wYGFki.js";import"./rocket-BHhP7Fyn.js";import"./checkbox-group-B867zM7u.js";import"./radio-group-DWf5Wq6F.js";import"./summary.component-CodZWYVq.js";import"./query-async-DfDYiAiZ.js";import"./datepicker.component-Cl7Fj8Nq.js";import"./localized-decorator-D2NO-b-n.js";import"./ref-Ct_Nqoj0.js";import"./dropdown.component-BPf1ChVq.js";import"./icon.component-CT-VwdJz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CuFd2vHE.js";import"./form-control-header.component-B-H7YkP8.js";import"./badge.component-BtIVS7mT.js";import"./flex.component-llKK8EQ2.js";import"./triangle-exclamation.component-is7GTGqS.js";import"./card.component-Bxf8mI4M.js";import"./unwrap-slots-0pgkyNOz.js";import"./checkmark.component-DCz4mvvt.js";import"./rbcb-toggle.template-FSQSEtYX.js";import"./chevron-bottom.component-DOKFRbpX.js";import"./cross-small.component-Cq-2Duvv.js";import"./popover.component-xqtD-veO.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DKtQJpOS.js";import"./calender-add.component-PnfxDluq.js";import"./chevron-left.component-BmGRxau1.js";import"./chevron-right.component-DLYgRcSY.js";import"./arrow-up.component-DHXcB3oL.js";import"./menu-heading.component-DhYD7aFs.js";import"./input.component-CNXVMxbJ.js";import"./textarea.component-9yuPWO3A.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C1x-Nlhz.js";import"./checkbox-group.component-Bqe9eb8I.js";import"./toggle-control-base.component-Bx0-8B-T.js";import"./minus-small.component-Cbgk3So4.js";import"./radio-group.component-BSQpKZVc.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
