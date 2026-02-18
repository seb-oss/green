import{x as t}from"./iframe-BMRmh1sA.js";import{a}from"./argTableProps-UAD20Ie1.js";import"./summary-lczHHCDI.js";import"./datepicker-B0PY2x2e.js";import"./dropdown-nSaUIyfx.js";import"./option-W4AAGLED.js";import"./menu-heading-ClbqhW_z.js";import"./input-BYpqUUqf.js";import"./rocket-gL_GY6bJ.js";import"./checkbox-group-BLudzf_z.js";import"./radio-group-D2eKhBzO.js";import"./summary.component-Cbv7n4rO.js";import"./query-async-CCZw2XKC.js";import"./datepicker.component-C1JcfOzn.js";import"./localized-decorator-Ci9FWaBk.js";import"./ref-BAECkcS8.js";import"./dropdown.component-DRQNqqfs.js";import"./icon.component-lh5XS7yf.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style--q07YbHd.js";import"./form-control-header.component-qlSzi4iD.js";import"./badge.component-QzOeW8Th.js";import"./flex.component-DGXBPLOU.js";import"./triangle-exclamation.component-pKuC63Uc.js";import"./card.component-C0Tmm-zx.js";import"./unwrap-slots-Bm-2-URC.js";import"./checkmark.component-BLJWZ4HS.js";import"./rbcb-toggle.template-Bmr2OIlu.js";import"./chevron-bottom.component-CoPZAXQb.js";import"./cross-small.component-BKfsuHmV.js";import"./popover.component-CfPjRnAB.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BJ4Jp2A5.js";import"./calender-add.component-CXC1_0e4.js";import"./chevron-left.component-atDidJHs.js";import"./chevron-right.component-B5CwKKfU.js";import"./arrow-up.component-Bfl4Mh68.js";import"./menu-heading.component-C5_cpJRY.js";import"./input.component-B2O5gICX.js";import"./textarea.component-C4oz7MV8.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C9BwZKWN.js";import"./checkbox-group.component-C8s2miga.js";import"./toggle-control-base.component-B-R_pjRG.js";import"./minus-small.component-Bc13lKu3.js";import"./radio-group.component-DcYKfyjj.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
