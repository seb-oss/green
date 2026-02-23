import{x as t}from"./iframe-BrEe7A9x.js";import{a}from"./argTableProps-DykrQ4Uz.js";import"./summary-CaegIMiM.js";import"./datepicker-Du-xECKZ.js";import"./dropdown-B2fvX3uc.js";import"./option-Dlk9j_3k.js";import"./menu-heading-Dw87mfgl.js";import"./input-Cb0Q6KC6.js";import"./rocket-S10zvttw.js";import"./checkbox-group-bCtcsRe-.js";import"./radio-group-DO_ZRc-B.js";import"./summary.component-DpJA01jL.js";import"./query-async-4KbUa9up.js";import"./datepicker.component-DA-q_xy0.js";import"./localized-decorator-B1QgNj29.js";import"./ref-Cn0dL6Az.js";import"./dropdown.component-C_feTX_h.js";import"./icon.component-BJgPnnvB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-8SsM0fXs.js";import"./form-control-header.component-1UEDUWT0.js";import"./badge.component-CJvL_L9e.js";import"./flex.component-CSsERzN1.js";import"./triangle-exclamation.component-TpZwIAlP.js";import"./card.component-DK4yBXx1.js";import"./unwrap-slots-BWk_ZiUe.js";import"./checkmark.component-CH0egJAa.js";import"./rbcb-toggle.template-CcQPfyj5.js";import"./chevron-bottom.component-DAB8Gtrg.js";import"./cross-small.component-5zSmBZBR.js";import"./popover.component-DxWWtnp4.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-22MyQi1I.js";import"./calender-add.component-hfShyt-T.js";import"./chevron-left.component-BumXKzAK.js";import"./chevron-right.component-B_DKfmj-.js";import"./arrow-up.component-IjGPHPIq.js";import"./menu-heading.component-Bea5hn9q.js";import"./input.component-D_VQ9q_b.js";import"./textarea.component-DWA43KXT.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Bxzl4j78.js";import"./checkbox-group.component-DHktfWXs.js";import"./toggle-control-base.component-B8SRQboT.js";import"./minus-small.component-DO7bMfbd.js";import"./radio-group.component-D6Uo_QMT.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
