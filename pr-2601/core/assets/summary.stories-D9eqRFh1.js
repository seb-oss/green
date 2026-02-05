import{x as t}from"./iframe-HiFJV8bk.js";import{a}from"./argTableProps-DBp_PM4G.js";import"./summary-BRHoZrXJ.js";import"./datepicker-9v53ZeT_.js";import"./dropdown-CE81HpsY.js";import"./option-RtUpQJpP.js";import"./menu-heading-Ch-OQ3yH.js";import"./input-DKOb5ehS.js";import"./rocket-fARa-nCm.js";import"./checkbox-group-DJPFHMMe.js";import"./radio-group-8CdNahct.js";import"./summary.component-Q4gFsFjq.js";import"./query-async-BUsdlShf.js";import"./datepicker.component-B7JhyrO-.js";import"./localized-decorator-Dmej81GR.js";import"./ref-CVM-VzQN.js";import"./dropdown.component-DaQzDpx3.js";import"./icon.component-BK5A2ge7.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D-3KkFzM.js";import"./form-control-header.component-IomV9baN.js";import"./badge.component-Z-rwar02.js";import"./flex.component-BtZj_Xnn.js";import"./triangle-exclamation.component-D9fYSJ-w.js";import"./card.component-BDYeFBPt.js";import"./unwrap-slots-xzehliXC.js";import"./checkmark.component-U0nIxNw8.js";import"./rbcb-toggle.template-Cp3mZ_ec.js";import"./chevron-bottom.component-ZC1QNV_z.js";import"./cross-small.component-O5n-8TM7.js";import"./popover.component-Cx-T2aYB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BhbRefW9.js";import"./calender-add.component-ditmQRxN.js";import"./chevron-left.component-BNGqwyqg.js";import"./chevron-right.component-BfHETwNj.js";import"./arrow-up.component-BC5Si7XE.js";import"./menu-heading.component-DoV6GKVm.js";import"./input.component-BBqJCei2.js";import"./textarea.component-Bl0PgXIB.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BQ9TBopK.js";import"./checkbox-group.component-CMB8o_fv.js";import"./toggle-control-base.component-CKTOEL2T.js";import"./minus-small.component-BFDWYT3t.js";import"./radio-group.component-BphFFm4q.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
