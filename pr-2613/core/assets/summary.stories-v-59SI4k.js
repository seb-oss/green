import{x as t}from"./iframe-Bco6RhSF.js";import{a}from"./argTableProps-IFvRSrEh.js";import"./summary-C50RNlv0.js";import"./datepicker-Cj-TyS57.js";import"./dropdown-BgAL9qMt.js";import"./option-CVYn_vRn.js";import"./menu-heading-DLJ-osvU.js";import"./input-PokMImoe.js";import"./rocket-4JWYGU1x.js";import"./checkbox-group-DWLj4GQs.js";import"./radio-group-Cc1GCoua.js";import"./summary.component-D0hfkNXc.js";import"./query-async-D1WKx4eb.js";import"./datepicker.component-DzwcSGg-.js";import"./localized-decorator-CR2PmnBm.js";import"./ref-pmhfsp5R.js";import"./dropdown.component-BKCGQmZo.js";import"./icon.component-Csrpw-lX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-cU88byQR.js";import"./form-control-header.component-CJaDfMgs.js";import"./badge.component-FCthXmj1.js";import"./flex.component-Cm2le16w.js";import"./triangle-exclamation.component-lK1rOnsM.js";import"./card.component-DWwOkFKS.js";import"./unwrap-slots-HLkw7L9g.js";import"./checkmark.component-DFzR7Pxw.js";import"./rbcb-toggle.template-fY0rAVoD.js";import"./chevron-bottom.component-C1kA2Rc3.js";import"./cross-small.component-Wgk3m4Q6.js";import"./popover.component-BwXNAIMk.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B_nLjt8L.js";import"./calender-add.component-kL2UltkF.js";import"./chevron-left.component-CuItJ3WY.js";import"./chevron-right.component-Z_E_r9Pd.js";import"./arrow-up.component-DF12ox8_.js";import"./menu-heading.component-Bl-9dBsQ.js";import"./input.component-BvC-Oikd.js";import"./textarea.component-DGzUM65t.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Cr6uWH05.js";import"./checkbox-group.component-CG8gYuIY.js";import"./toggle-control-base.component-C1WQ3dyc.js";import"./minus-small.component-CYVaJMaE.js";import"./radio-group.component-BxFU0Cvc.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
