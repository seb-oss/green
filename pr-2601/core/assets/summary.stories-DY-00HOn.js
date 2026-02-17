import{x as t}from"./iframe-B9-JWcQZ.js";import{a}from"./argTableProps-DM-XBptL.js";import"./summary-ZvXWlv8r.js";import"./datepicker-CcIAHzfk.js";import"./dropdown-gbhEVZqm.js";import"./option-DjusGCM8.js";import"./menu-heading-DatyGaXk.js";import"./input-Di9IopK0.js";import"./rocket-CkGkCwl4.js";import"./checkbox-group-D93pcEF4.js";import"./radio-group-DzLXqNoZ.js";import"./summary.component-CK1NCVl6.js";import"./query-async-aLAkRcbT.js";import"./datepicker.component-Ckguai4T.js";import"./localized-decorator-iEOzc6E3.js";import"./ref-Cg1lMp3d.js";import"./dropdown.component--jVzYVav.js";import"./icon.component-CYx4zgop.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CMV431zo.js";import"./form-control-header.component-DemSV4kG.js";import"./badge.component-CXbWycvp.js";import"./flex.component-Bn7BNe8a.js";import"./triangle-exclamation.component-BVJ2cWtG.js";import"./card.component-D5Ge48lT.js";import"./unwrap-slots-DVEiINUO.js";import"./checkmark.component-sWwaGEhi.js";import"./rbcb-toggle.template-BY5Gvj9-.js";import"./chevron-bottom.component-Bt9bWNz8.js";import"./cross-small.component-xQ-AhMCD.js";import"./popover.component-SHtaSH6i.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CBPuqT_c.js";import"./calender-add.component-D13r2iQP.js";import"./chevron-left.component-CVgLuZkm.js";import"./chevron-right.component-BTTw7tJ9.js";import"./arrow-up.component-CIIJ-C1U.js";import"./menu-heading.component-BTkS-uGp.js";import"./input.component-CgZ0Z7lY.js";import"./textarea.component-CtOGVklu.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-ZcgoBvRa.js";import"./checkbox-group.component-BGXwZ4OA.js";import"./toggle-control-base.component-Dw_i9Es3.js";import"./minus-small.component-BA4wsQy7.js";import"./radio-group.component-B4t5JO8g.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
