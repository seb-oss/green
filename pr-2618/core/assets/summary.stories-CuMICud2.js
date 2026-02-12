import{x as t}from"./iframe-D1501rwE.js";import{a}from"./argTableProps-CbXzKgdZ.js";import"./summary-DpTaEolc.js";import"./datepicker-0xKz2xL5.js";import"./dropdown-zgxO7jzo.js";import"./option-dtCMDqzl.js";import"./menu-heading-CE-7KiwK.js";import"./input-rVrAwHmW.js";import"./rocket-DIAMgojj.js";import"./checkbox-group-DY_5KSyL.js";import"./radio-group-CboGeSSn.js";import"./summary.component-iH2qm3MJ.js";import"./query-async-C6mh_lGH.js";import"./datepicker.component-vvMPF7Pg.js";import"./localized-decorator-DH_n2Fgt.js";import"./ref-C4lH9sgr.js";import"./dropdown.component-C1aHGZGa.js";import"./icon.component-CBmASKX5.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-gxUqE7WE.js";import"./form-control-header.component-B-Qasx45.js";import"./badge.component-DMwKNeY3.js";import"./flex.component-CRbuC2X4.js";import"./triangle-exclamation.component-A5kaeOWn.js";import"./card.component-CrOhynkA.js";import"./unwrap-slots-CB5lwgqv.js";import"./checkmark.component-DJSdelLo.js";import"./rbcb-toggle.template-CUy631A3.js";import"./chevron-bottom.component-BInhST6G.js";import"./cross-small.component-D_fNzNeT.js";import"./popover.component-BUy_jdif.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-WcBhGYW_.js";import"./calender-add.component-nkbsHucv.js";import"./chevron-left.component-bY95TYi5.js";import"./chevron-right.component-YgmAKIYQ.js";import"./arrow-up.component-uUvUq6cm.js";import"./menu-heading.component-DFzC0KVc.js";import"./input.component-CMtAkCFN.js";import"./textarea.component-CsFtq4RR.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CS1fMmW-.js";import"./checkbox-group.component-CY-ZiSxn.js";import"./toggle-control-base.component-DXWD0RsJ.js";import"./minus-small.component-CoRzom9S.js";import"./radio-group.component-BGcZ9-jj.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
