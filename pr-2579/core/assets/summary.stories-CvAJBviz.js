import{x as t}from"./iframe-BQ8Xjw8d.js";import{a}from"./argTableProps-Da36wL0g.js";import"./summary-Bjjqqkvs.js";import"./datepicker-DJuY6GNV.js";import"./dropdown-DjVVlbU0.js";import"./option-BGtBIC-_.js";import"./menu-heading-C2uNdQsq.js";import"./input-R9axH3rR.js";import"./rocket-D4qXz922.js";import"./checkbox-group-BLQJ4ufh.js";import"./radio-group-BOLiKR2o.js";import"./summary.component-CGwmuLC4.js";import"./query-async-B4id_wJ0.js";import"./datepicker.component-Y9LIGd6E.js";import"./localized-decorator-Dv8nsHvA.js";import"./ref-CEPs8A2F.js";import"./dropdown.component-BkdvjRzt.js";import"./icon.component-BVf0S7fu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-eLmB68Wv.js";import"./form-control-header.component-DVTPcJ-_.js";import"./badge.component-D-cDdBON.js";import"./flex.component--lZWSZDD.js";import"./triangle-exclamation.component-CyF5Wldf.js";import"./card.component-CHHobmy3.js";import"./unwrap-slots-BRR1URhB.js";import"./checkmark.component-DrD5dzjU.js";import"./rbcb-toggle.template-D6ARypqG.js";import"./chevron-bottom.component-CDpf4dKA.js";import"./cross-small.component-DnL56KOG.js";import"./popover.component-BXOkNRrJ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Ba7s65Es.js";import"./calender-add.component-qa-ElKvW.js";import"./chevron-left.component-Di_uF66s.js";import"./chevron-right.component-Dpkawji3.js";import"./arrow-up.component-CnmpybUk.js";import"./menu-heading.component-D8qOEzL5.js";import"./input.component-DtNP_CLW.js";import"./textarea.component-_eEFpHx6.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DUvLOHIc.js";import"./checkbox-group.component-C8l2QBoi.js";import"./toggle-control-base.component-CfvUgzbr.js";import"./minus-small.component-BDCDgy6v.js";import"./radio-group.component-Ct5rS-wz.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
