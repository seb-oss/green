import{x as t}from"./iframe-VsbkeGCl.js";import{a}from"./argTableProps-B_m1l0iu.js";import"./summary-DkpL0PpF.js";import"./datepicker-DnHD7tFx.js";import"./dropdown-D47uZ91F.js";import"./option-Bg0t-cQw.js";import"./menu-heading-SSqtnSKF.js";import"./input-BFqKY3_P.js";import"./rocket-Bcne2p1J.js";import"./checkbox-group-DJSAvmif.js";import"./radio-group-CQd8GHiE.js";import"./summary.component-Cqt9dO74.js";import"./query-async-D4xQgIh5.js";import"./datepicker.component-DBBlI8sX.js";import"./localized-decorator-C6DN-AeH.js";import"./ref-W34XrMEO.js";import"./dropdown.component-BBnNX0JP.js";import"./icon.component-melMtIU4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DkTRkTo5.js";import"./form-control-header.component-CH11HNE3.js";import"./badge.component-DxH_LRqC.js";import"./flex.component-BrpdvwZj.js";import"./triangle-exclamation.component-Yb91oCVJ.js";import"./card.component-DZHBtaXg.js";import"./unwrap-slots-JgjjHowK.js";import"./checkmark.component-CIWGwjAD.js";import"./rbcb-toggle.template-hPJfWSfz.js";import"./chevron-bottom.component-CsQfHDnc.js";import"./cross-small.component-Bj4PYORy.js";import"./popover.component-B5cKVuVT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C8X-wwOJ.js";import"./calender-add.component-B0slhneh.js";import"./chevron-left.component-DQ7S1347.js";import"./chevron-right.component-CWe5CgEB.js";import"./arrow-up.component-2FknIgwG.js";import"./menu-heading.component-ZfswpN6a.js";import"./input.component-D9jHl2Qx.js";import"./textarea.component-CqbeuAEk.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B6ArbxO5.js";import"./checkbox-group.component-DAofG7m1.js";import"./toggle-control-base.component-CehWlGdx.js";import"./minus-small.component-B-fZIxb8.js";import"./radio-group.component-BlpO6coY.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
