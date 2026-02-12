import{x as t}from"./iframe-CcvMqXI-.js";import{a}from"./argTableProps-BITbF5py.js";import"./summary-B7BB_9t_.js";import"./datepicker-CydyN9Xy.js";import"./dropdown-HFTw_Eph.js";import"./option-DLrV-sTA.js";import"./menu-heading-Cbuy0Xr7.js";import"./input-DG36zhps.js";import"./rocket-DUSO_ZF_.js";import"./checkbox-group-B_XnCNDx.js";import"./radio-group-GN8P153B.js";import"./summary.component-RvYGoGfK.js";import"./query-async-D669dU0Y.js";import"./datepicker.component-aGUKb6zx.js";import"./localized-decorator-CcBU_CAK.js";import"./ref-Ddr22G-w.js";import"./dropdown.component-_keX6z65.js";import"./icon.component-BR3AQAfI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bz8EO9vv.js";import"./form-control-header.component-D4W5s5Oq.js";import"./badge.component-8SLUm_cv.js";import"./flex.component-BaaDi53W.js";import"./triangle-exclamation.component-C4HqkNi0.js";import"./card.component-DkMiRKkN.js";import"./unwrap-slots-BKNu2ecK.js";import"./checkmark.component-Ca-HOx5N.js";import"./rbcb-toggle.template-B5t8zDU2.js";import"./chevron-bottom.component-C67dq27V.js";import"./cross-small.component-CjZ5drxH.js";import"./popover.component-DZRsbvj9.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D-2-XaZP.js";import"./calender-add.component-NRe74j6T.js";import"./chevron-left.component-BgsvUNme.js";import"./chevron-right.component-66-Dg2b8.js";import"./arrow-up.component-tpuKL16k.js";import"./menu-heading.component-uaJ__I0A.js";import"./input.component-DjEeONXv.js";import"./textarea.component-DQAlc7OP.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D6bGP4_o.js";import"./checkbox-group.component-DWjDelaO.js";import"./toggle-control-base.component-DbAu4CnT.js";import"./minus-small.component-Br3rFyKz.js";import"./radio-group.component-Ca0hoJV-.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
