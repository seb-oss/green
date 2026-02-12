import{x as t}from"./iframe-BVQPmz1L.js";import{a}from"./argTableProps-DWGLOIaK.js";import"./summary-DRXsi6ZM.js";import"./datepicker-CBVHBTC8.js";import"./dropdown-CfbzPQYi.js";import"./option-DNzjFMrk.js";import"./menu-heading-NSceQhwh.js";import"./input-95TcLegz.js";import"./rocket-NOaHP777.js";import"./checkbox-group-JvT7vcwh.js";import"./radio-group--xAFHFr4.js";import"./summary.component-CTPM4lxb.js";import"./query-async-DTBI0fuf.js";import"./datepicker.component-vm9eNe2G.js";import"./localized-decorator-zDTKedmw.js";import"./ref-EqxnW758.js";import"./dropdown.component-EBoeCuAM.js";import"./icon.component-BfrKEkWA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-2z4bNcWN.js";import"./form-control-header.component-Cri6FS4C.js";import"./badge.component-gHl_-C7K.js";import"./flex.component-CN3TaWsZ.js";import"./triangle-exclamation.component-BTodIY5z.js";import"./card.component-ubTEhPvl.js";import"./unwrap-slots-C-a-c3l8.js";import"./checkmark.component-D7U7iqOQ.js";import"./rbcb-toggle.template-CkJ4vrMq.js";import"./chevron-bottom.component-BG0j2l11.js";import"./cross-small.component-CyTi_bLP.js";import"./popover.component-BCjzx3NQ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BzVLY3b5.js";import"./calender-add.component-Dm8tyf9F.js";import"./chevron-left.component-eOLDZiRx.js";import"./chevron-right.component-DA8dB7_i.js";import"./arrow-up.component-PrDVzxzn.js";import"./menu-heading.component-DebEiIXA.js";import"./input.component-5ufJeLyi.js";import"./textarea.component-BF7IZK6G.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D4dSxIRS.js";import"./checkbox-group.component-B2bw8rbq.js";import"./toggle-control-base.component-By3tMpWI.js";import"./minus-small.component-CTiVfElo.js";import"./radio-group.component-9uTiJ_jx.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
