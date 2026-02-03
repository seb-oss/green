import{x as t}from"./iframe-B5XfIKHB.js";import{a}from"./argTableProps-BKZRkOuV.js";import"./summary-BqWD_rJ_.js";import"./datepicker-CTSEs0DL.js";import"./dropdown-CgvxXrUG.js";import"./option-ncrlC--n.js";import"./menu-heading-C5Z5BRaH.js";import"./input-Z9-27kAe.js";import"./rocket-CniTmw2C.js";import"./checkbox-group-DndK-ufK.js";import"./radio-group-BJwuEZzr.js";import"./summary.component-2PLLQq3U.js";import"./query-async-BOHmAeau.js";import"./datepicker.component-OiKTwTcy.js";import"./localized-decorator-C2Lx7U-P.js";import"./ref-D2kl9lm_.js";import"./dropdown.component-1VU8Hqy1.js";import"./icon.component-B3TdVrm3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CbofzfBd.js";import"./form-control-header.component-DsjCfaae.js";import"./badge.component-hhMOH56Z.js";import"./flex.component-DV0l-Z1E.js";import"./triangle-exclamation.component-8r66r9on.js";import"./card.component-CxWAuNko.js";import"./unwrap-slots-N2-XD1XG.js";import"./checkmark.component-CYgKs90B.js";import"./rbcb-toggle.template-B0z_tn6z.js";import"./chevron-bottom.component-D9hvDDKD.js";import"./cross-small.component-CXwO99n7.js";import"./popover.component-UorKMUgR.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DBjxExM6.js";import"./calender-add.component-D_FuD6HE.js";import"./chevron-left.component-mZmKZp0V.js";import"./chevron-right.component-DnMZppbj.js";import"./arrow-up.component-DXEbWxSE.js";import"./menu-heading.component-CPTfaidA.js";import"./input.component-x2pl1vhg.js";import"./textarea.component-DCzlXMUk.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CYjS6erv.js";import"./checkbox-group.component-DBho9Us_.js";import"./toggle-control-base.component-B-16hh25.js";import"./minus-small.component-Dc8dSTIF.js";import"./radio-group.component-DxpCZLHx.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
