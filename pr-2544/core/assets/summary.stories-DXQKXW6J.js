import{x as t}from"./iframe-CTNWM5mu.js";import{a}from"./argTableProps-D99bc5Nh.js";import"./summary-DDdVklNz.js";import"./datepicker-ChjLN_7h.js";import"./dropdown-G5ED8uVt.js";import"./option-DhRw52xw.js";import"./menu-heading-Dm4LkeFE.js";import"./input-Drm_t0SR.js";import"./rocket-iKyPEe0K.js";import"./checkbox-group-BFrzVeGJ.js";import"./radio-group-DKD1lDYi.js";import"./summary.component-hKBo6FUq.js";import"./query-async-4yg1OZVr.js";import"./datepicker.component-CQjPwqef.js";import"./localized-decorator-BscK7hUg.js";import"./ref-CtjW3RXb.js";import"./dropdown.component-NNjnF53_.js";import"./icon.component-wzSptf-L.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-C9zY0GhY.js";import"./form-control-header.component-B5FNlWbJ.js";import"./badge.component-B3nrdbJa.js";import"./flex.component-DohOSJ5U.js";import"./triangle-exclamation.component-BkA4rKhh.js";import"./card.component-DAlTngvE.js";import"./unwrap-slots-ClGhbgoQ.js";import"./checkmark.component-a6Fn-cML.js";import"./rbcb-toggle.template-CHSo1Gkn.js";import"./chevron-bottom.component-D78BkuX1.js";import"./cross-small.component-BVqPcggV.js";import"./popover.component-B-i7Ggv1.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D2E69u45.js";import"./calender-add.component-BIcf1Hxy.js";import"./chevron-left.component-CLkZf7mv.js";import"./chevron-right.component-tOAXaL4m.js";import"./arrow-up.component-vt72_jJj.js";import"./menu-heading.component-B-CFwaAy.js";import"./input.component-CCtVlOr5.js";import"./textarea.component-Bh5p4Fcs.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-g36vM4p7.js";import"./checkbox-group.component-C13rir3F.js";import"./toggle-control-base.component-CQiQsKse.js";import"./minus-small.component-DBNg5a_3.js";import"./radio-group.component-_SRCGcbN.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
