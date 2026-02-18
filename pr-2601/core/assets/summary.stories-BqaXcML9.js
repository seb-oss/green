import{x as t}from"./iframe-DuvJJPsW.js";import{a}from"./argTableProps-oo5_IWA4.js";import"./summary-BZITYnxG.js";import"./datepicker-Bg7BarrT.js";import"./dropdown-Dhg0rQRu.js";import"./option-B5f18xhw.js";import"./menu-heading-DJXbwY_-.js";import"./input-C24Cq_vt.js";import"./rocket-BATDz2Xa.js";import"./checkbox-group-mnVtlmMc.js";import"./radio-group-D3pJpSBT.js";import"./summary.component-BN6vBl1T.js";import"./query-async-QMn40S2Z.js";import"./datepicker.component-zau-r7Ip.js";import"./localized-decorator-xYYjw7_4.js";import"./ref-DbDUt8Hp.js";import"./dropdown.component-BTB24xUJ.js";import"./icon.component-3WNa7gns.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-z3OmOgRf.js";import"./form-control-header.component-BdOCn00k.js";import"./badge.component-BpHM24cZ.js";import"./flex.component-Bqj0RcrB.js";import"./triangle-exclamation.component-G5VeGOpV.js";import"./card.component-DGQRvjJW.js";import"./unwrap-slots-D0tzxiDM.js";import"./checkmark.component-0GF1xo9w.js";import"./rbcb-toggle.template-9VHv85pH.js";import"./chevron-bottom.component-3qeEjqYA.js";import"./cross-small.component-CVu18ij_.js";import"./popover.component-C1xFQGTT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CLIDBXtq.js";import"./calender-add.component-XM3l0-gT.js";import"./chevron-left.component-QDtGzX-3.js";import"./chevron-right.component-VMMkhwEJ.js";import"./arrow-up.component-CoOdZh4L.js";import"./menu-heading.component-TLOMQcwC.js";import"./input.component-SMDqqBzr.js";import"./textarea.component-CGFz8xXZ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-AsYSg8lF.js";import"./checkbox-group.component--3p4J4Zu.js";import"./toggle-control-base.component-BRs5Gm8N.js";import"./minus-small.component-BRP08wzY.js";import"./radio-group.component-CdX86U6i.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},X={...o,render:e=>t`<form style="width: 450px" novalidate>
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
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=${!0}
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"You must agree to the terms and conditions"]}}}
        >
          <gds-checkbox
            value="terms-and-conditions"
            label="I agree to the terms and conditions"
          ></gds-checkbox>
        </gds-checkbox-group>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,X as Usage,tr as __namedExportsOrder,W as default};
