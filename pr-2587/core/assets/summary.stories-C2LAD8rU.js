import{x as t}from"./iframe--EOx3dpz.js";import{a}from"./argTableProps-D49eYQj-.js";import"./summary-DZlF1_JP.js";import"./datepicker-DzdGW-1w.js";import"./dropdown-Dx3dViAR.js";import"./option-4LLcQgz5.js";import"./menu-heading-mHx8OvL3.js";import"./input-BnQKn0lS.js";import"./rocket-BrSsT91B.js";import"./checkbox-group-C6fVf5b8.js";import"./radio-group-C-5vRlB6.js";import"./summary.component-grLZfE9u.js";import"./query-async-CHvc8cpL.js";import"./datepicker.component-BvnaD8ac.js";import"./localized-decorator-DKJ1UTxE.js";import"./ref-oeS0gsEV.js";import"./dropdown.component-C63c-GoK.js";import"./icon.component-nGk6d9tl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-B5UIi6Gn.js";import"./form-control-header.component-nSJFRdZu.js";import"./badge.component-BUErVDr-.js";import"./flex.component-DRomwThP.js";import"./triangle-exclamation.component-BdwN9oik.js";import"./card.component-CEO7KvUT.js";import"./unwrap-slots-Dc5uQENf.js";import"./checkmark.component-Bz_LTYJV.js";import"./rbcb-toggle.template-3i3638qX.js";import"./chevron-bottom.component-B4gz4TfP.js";import"./cross-small.component-oRxrF3J3.js";import"./popover.component-DpGJv4lM.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BRU5OXdp.js";import"./calender-add.component-BRvkURFu.js";import"./chevron-left.component-BIdxBmL2.js";import"./chevron-right.component-C1fKoim0.js";import"./arrow-up.component-CsANaG6R.js";import"./menu-heading.component-B68ycaLQ.js";import"./input.component-M14VGWOC.js";import"./textarea.component-DmJ37bCp.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CgtpNWTZ.js";import"./checkbox-group.component-D0d5aTqS.js";import"./toggle-control-base.component-CQzC714e.js";import"./minus-small.component-BZrCIgtK.js";import"./radio-group.component-BoYFRIt3.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
