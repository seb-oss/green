import{x as t}from"./iframe-CoeSBRAZ.js";import{a}from"./argTableProps-DTyVduFY.js";import"./summary-mTqdX7Qy.js";import"./datepicker-CEYAsVXX.js";import"./dropdown-CayOd5od.js";import"./option-DlaP8ONG.js";import"./menu-heading-DxR3DTYn.js";import"./input-COKtA-HK.js";import"./rocket-C5TMezDA.js";import"./checkbox-group-kyPA0WDr.js";import"./radio-group-fqk8bzGP.js";import"./summary.component-CKEzqJEd.js";import"./query-async-BgFuwShq.js";import"./datepicker.component-UMqIDiLI.js";import"./localized-decorator-DaoG_-Rv.js";import"./ref-DMQVQu_A.js";import"./dropdown.component-DJzrtv9G.js";import"./icon.component-uTRHruiP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DZx-Fxuz.js";import"./form-control-header.component-Bw3t1sjR.js";import"./badge.component-BMg7_mr0.js";import"./flex.component-DzRSufS9.js";import"./triangle-exclamation.component-CUw8G_FR.js";import"./card.component-ScuPZKxv.js";import"./unwrap-slots-DR7M_yFN.js";import"./checkmark.component-FhL0iKav.js";import"./rbcb-toggle.template-3BCUL8Ac.js";import"./chevron-bottom.component-MOMidbSj.js";import"./cross-small.component-BvME2u8o.js";import"./popover.component-Cz3ytIi8.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CxSgdbND.js";import"./calender-add.component-D4ZDolWz.js";import"./chevron-left.component-CVD7Q8b9.js";import"./chevron-right.component-t9WCVZ0H.js";import"./arrow-up.component-D-iQRToq.js";import"./menu-heading.component-nAh1JP_d.js";import"./input.component-B3gHBm0g.js";import"./textarea.component-C7NysXpi.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Boz7bP-S.js";import"./checkbox-group.component-Bwb4L7o_.js";import"./toggle-control-base.component-C0YMpY9C.js";import"./minus-small.component-CQeAEKB6.js";import"./radio-group.component-DLqUjkQ_.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
