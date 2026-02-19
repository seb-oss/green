import{x as t}from"./iframe-3naDiogp.js";import{a}from"./argTableProps-Ci-hptin.js";import"./summary-C1gFX7Pz.js";import"./datepicker-BTMbyTtD.js";import"./dropdown-MgCLcJJp.js";import"./option-BnHrC5dB.js";import"./menu-heading-C9q5jHjP.js";import"./input-BiAlC7lM.js";import"./rocket-BJNPDaN2.js";import"./checkbox-group-BDpcfwaY.js";import"./radio-group-CviOA6H0.js";import"./summary.component-wWrKW6jA.js";import"./query-async-CGdsr6y5.js";import"./datepicker.component-Dvj011qE.js";import"./localized-decorator-BmxGT5a4.js";import"./ref-CQ_XZCGO.js";import"./dropdown.component-DFVcrcQl.js";import"./icon.component-3nTHe6ep.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-XldYPGGt.js";import"./form-control-header.component-BotjOmUk.js";import"./badge.component-Dmhi9xKi.js";import"./flex.component-s2rsx7Cf.js";import"./triangle-exclamation.component-BtRZR3K0.js";import"./card.component-B5sGSDD0.js";import"./unwrap-slots-CZQuzpb8.js";import"./checkmark.component-xqhYj-Ni.js";import"./rbcb-toggle.template-C0FgUB_F.js";import"./chevron-bottom.component-Byh3k9hm.js";import"./cross-small.component-DwZ3QtkJ.js";import"./popover.component-BURbujwz.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BFU8A5lc.js";import"./calender-add.component-B10dGWdg.js";import"./chevron-left.component-CRJPhyn7.js";import"./chevron-right.component-NzbSzFr7.js";import"./arrow-up.component-BjiPo8cq.js";import"./menu-heading.component-qblKo43q.js";import"./input.component-D1qz5au3.js";import"./textarea.component-bj22YbL7.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CKpdaLbk.js";import"./checkbox-group.component-BV7Xif6t.js";import"./toggle-control-base.component-BN1NfD26.js";import"./minus-small.component-BP9uit-9.js";import"./radio-group.component-0tuZzrOJ.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
