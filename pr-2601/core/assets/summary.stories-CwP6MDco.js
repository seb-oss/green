import{x as t}from"./iframe-BjnJkqwv.js";import{a}from"./argTableProps-Blubdwx0.js";import"./summary-he2j1mrf.js";import"./datepicker-DEiJcrPI.js";import"./dropdown-BVb7FN6V.js";import"./option-DkfoD9in.js";import"./menu-heading-BM8N7KXw.js";import"./input-X2I3i2D6.js";import"./rocket-kY7qm8bG.js";import"./checkbox-group--OIoD3CH.js";import"./radio-group-DZFHPnlL.js";import"./summary.component-HYd7pb5M.js";import"./query-async-CRo97lGl.js";import"./datepicker.component-Buzs7q0M.js";import"./localized-decorator-a78JXZiA.js";import"./ref-CgmV0QwQ.js";import"./dropdown.component-C_rO_kCK.js";import"./icon.component-CfBnFFAe.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CEnnvJAb.js";import"./form-control-header.component-D_dahNtb.js";import"./badge.component-DER1NVRx.js";import"./flex.component-DYRxf4FB.js";import"./triangle-exclamation.component-CvGBSwO1.js";import"./card.component-CNRv87Ji.js";import"./unwrap-slots-CcvspIou.js";import"./checkmark.component-DS5LjRpw.js";import"./rbcb-toggle.template-CKiIJmEB.js";import"./chevron-bottom.component-bZzMooNd.js";import"./cross-small.component-Dn4ni-OB.js";import"./popover.component-DOMOHAY4.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-hk8WR_rk.js";import"./calender-add.component-Gxz9EUKL.js";import"./chevron-left.component-waD21Cs0.js";import"./chevron-right.component-DH4cr6NG.js";import"./arrow-up.component-gLy7eVjR.js";import"./menu-heading.component-DRLtB96W.js";import"./input.component-C3Vkao3e.js";import"./textarea.component-BhGwS7JA.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BIP-Ti-9.js";import"./checkbox-group.component-DXwiICjx.js";import"./toggle-control-base.component-BtUQf0yj.js";import"./minus-small.component-gg1pSzMc.js";import"./radio-group.component-aryKy1YP.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
