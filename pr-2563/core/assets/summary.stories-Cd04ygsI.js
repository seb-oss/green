import{x as t}from"./iframe-CNFifxUN.js";import{a}from"./argTableProps-tFz4Mgr1.js";import"./summary-DxYojM8J.js";import"./datepicker-BaIVuTcp.js";import"./dropdown-BiB51PYb.js";import"./option-BMxpYJnk.js";import"./menu-heading-DoWjVJql.js";import"./input-Dql2B-2B.js";import"./rocket-Bg03AL3Y.js";import"./checkbox-group-D8ZrHr7P.js";import"./radio-group-CnPOQNCM.js";import"./summary.component-DvP89tQ1.js";import"./query-async-ZzK6jajH.js";import"./datepicker.component-Bb0RTxr8.js";import"./localized-decorator-BTZE8_rm.js";import"./ref-DyaRmeqr.js";import"./dropdown.component-CulF4p4h.js";import"./icon.component-6pI-3bW1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DW2IikIC.js";import"./form-control-header.component-CJCKnW9_.js";import"./badge.component-SI4AbSa3.js";import"./flex.component-CEqnAFZd.js";import"./triangle-exclamation.component-DA-hRdSI.js";import"./card.component-BNTM-i5u.js";import"./unwrap-slots-C7UIoqXm.js";import"./checkmark.component-CnpLOGd9.js";import"./rbcb-toggle.template-DoT1fU3f.js";import"./chevron-bottom.component-DM9tr6_C.js";import"./cross-small.component-nsCVYnC9.js";import"./popover.component-BdcIQFHp.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DbaQ-4bJ.js";import"./calender-add.component-QjGzX4JU.js";import"./chevron-left.component-CX_ABIFH.js";import"./chevron-right.component-ZCEfGNEy.js";import"./arrow-up.component-uq9AwWl6.js";import"./menu-heading.component-CcwfDLjh.js";import"./input.component-LYST4SR2.js";import"./textarea.component-3WHVRnN6.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C5dUqbyu.js";import"./checkbox-group.component-C7gyoQne.js";import"./toggle-control-base.component-RGT27Av9.js";import"./minus-small.component-DuoMCSlL.js";import"./radio-group.component-BDk-KOip.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
