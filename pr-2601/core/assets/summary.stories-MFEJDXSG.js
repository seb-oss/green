import{x as t}from"./iframe-CvkrKpPT.js";import{a}from"./argTableProps-CK-y38vv.js";import"./summary-4yVAS1G8.js";import"./datepicker-B-RrsBHn.js";import"./dropdown-DYePpOHY.js";import"./option-CPuaybwu.js";import"./menu-heading-CSGY2oq7.js";import"./input-DXYVfbSE.js";import"./rocket-CMnY9iet.js";import"./checkbox-group-BuOjF3zD.js";import"./radio-group-Y24k432_.js";import"./summary.component-B0AXHaN-.js";import"./query-async-BciRu8vV.js";import"./datepicker.component-DRQ6Ktyu.js";import"./localized-decorator-2DBRLQZG.js";import"./ref-9FgQuRaw.js";import"./dropdown.component-DMMQbOdB.js";import"./icon.component-6kdDZ56N.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BNaR_t-T.js";import"./form-control-header.component-D1tR04bs.js";import"./badge.component-D1qOn2Rh.js";import"./flex.component-3WlUjBhB.js";import"./triangle-exclamation.component-CkmAZHAf.js";import"./card.component-Ba_9DfXW.js";import"./unwrap-slots-DejeiwFb.js";import"./checkmark.component-BDkwvF2I.js";import"./rbcb-toggle.template-DK8rNCp7.js";import"./chevron-bottom.component-DEjR8Jve.js";import"./cross-small.component-BgnfA2oV.js";import"./popover.component-DC9k34bS.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CD_bOhPy.js";import"./calender-add.component-COrWqSnj.js";import"./chevron-left.component-01iGOXXw.js";import"./chevron-right.component-DeDpcLSV.js";import"./arrow-up.component-BtUjPrK5.js";import"./menu-heading.component-q-T1yTff.js";import"./input.component-COXB2No7.js";import"./textarea.component-D6MiozLb.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BoDpWWLm.js";import"./checkbox-group.component-DlT6wZWi.js";import"./toggle-control-base.component-j8UXpkdv.js";import"./minus-small.component-SZ1UfZCW.js";import"./radio-group.component-BpIIaj6q.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
