import{x as t}from"./iframe-FafrkK3S.js";import{a}from"./argTableProps-bu5H_w8h.js";import"./summary-D63JY4_L.js";import"./datepicker-CuGiZ3Y6.js";import"./dropdown-BSDImydo.js";import"./option-DWiB9uox.js";import"./menu-heading-C7H7KRZk.js";import"./input-h5VbLRkK.js";import"./rocket-DL9XmFxR.js";import"./checkbox-group-P5mx6t4b.js";import"./radio-group-MEIN4YNB.js";import"./summary.component-Ce1HoMpk.js";import"./query-async-CZAe1O26.js";import"./datepicker.component-CA1i5Smd.js";import"./localized-decorator-DKsT7Tru.js";import"./ref-D63nXf4d.js";import"./dropdown.component-C9dkqCo0.js";import"./icon.component--v3QrMqc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-EjQyOZ6W.js";import"./form-control-header.component-mA7VbzDx.js";import"./badge.component-CM3KnxF3.js";import"./flex.component-DKe0Jep9.js";import"./triangle-exclamation.component-D92QxK3J.js";import"./card.component-_g7M70H6.js";import"./unwrap-slots-BMPxXyp2.js";import"./checkmark.component--b8P2xUX.js";import"./rbcb-toggle.template-D9bD3YUv.js";import"./chevron-bottom.component-BJqB42O1.js";import"./cross-small.component-LaOZDcvC.js";import"./popover.component-h5anco6T.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-xFyG6_AI.js";import"./calender-add.component-nynTy9qS.js";import"./chevron-left.component-BjRVBWj5.js";import"./chevron-right.component-s-5YP7Yr.js";import"./arrow-up.component-BiEcYt81.js";import"./menu-heading.component-DougdLzh.js";import"./input.component-B47SmGVD.js";import"./textarea.component-DkQzKuFx.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DkCgv6Pu.js";import"./checkbox-group.component-BPdp3-Cf.js";import"./toggle-control-base.component-CqPrWIi-.js";import"./minus-small.component-U2MpMmnu.js";import"./radio-group.component-CMy2AdqB.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
