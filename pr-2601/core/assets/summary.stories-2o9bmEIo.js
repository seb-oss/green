import{x as t}from"./iframe-CiafQbDh.js";import{a}from"./argTableProps-HGKLgTYS.js";import"./summary-CgvYe6hq.js";import"./datepicker-Zy4GbPgN.js";import"./dropdown-BlzGg2YN.js";import"./option-BR4fyEfw.js";import"./menu-heading-DSF6xHGY.js";import"./input-DN2kuXyI.js";import"./rocket-ChcQjVv8.js";import"./checkbox-group-CngVqF84.js";import"./radio-group-CmV5-qzE.js";import"./summary.component-3wvaObmJ.js";import"./query-async-C_8NzSKu.js";import"./datepicker.component-D7sPEx76.js";import"./localized-decorator-BfadPoab.js";import"./ref-D9gc23SX.js";import"./dropdown.component-D4AKEpqX.js";import"./icon.component-DUnEPO_I.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C6LI5om1.js";import"./form-control-header.component-BznDGf2e.js";import"./badge.component-8HDEjyEy.js";import"./flex.component-Cm4ZQlRX.js";import"./triangle-exclamation.component-B7ti4QR5.js";import"./card.component-DBCk7HQI.js";import"./unwrap-slots-mMFwu9PV.js";import"./checkmark.component-VnB2AVAh.js";import"./rbcb-toggle.template-CYRWoROu.js";import"./chevron-bottom.component-pTVn53pq.js";import"./cross-small.component-Dia5meSO.js";import"./popover.component-D2gyFYBz.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DgG_F9lC.js";import"./calender-add.component-C8XN3Lyy.js";import"./chevron-left.component-CFM6lTPs.js";import"./chevron-right.component-DqCVTxK5.js";import"./arrow-up.component-B5qq_Nsr.js";import"./menu-heading.component-xilre-CK.js";import"./input.component-as0aSWMb.js";import"./textarea.component-CX2WpP0T.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-D5TD0rUk.js";import"./checkbox-group.component-BmT_XGxI.js";import"./toggle-control-base.component-lea3nOKe.js";import"./minus-small.component-CiMzLfzO.js";import"./radio-group.component-DyBS7t_L.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
