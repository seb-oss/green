import{x as t}from"./iframe-BOpMewhg.js";import{a}from"./argTableProps-DZz-TYRX.js";import"./summary-CoMEtcSI.js";import"./datepicker-BnGd03ld.js";import"./dropdown-COAOIVrA.js";import"./option-CKpWiPyk.js";import"./menu-heading-CF4sf3hH.js";import"./input-_CRmiS_1.js";import"./rocket-BoNHik_Z.js";import"./checkbox-group-BkfTurMW.js";import"./radio-group-BPTGOFRA.js";import"./summary.component-C1mRmyqr.js";import"./query-async-DX9zlT2u.js";import"./datepicker.component-CtZWaTaZ.js";import"./localized-decorator-wGmHp73-.js";import"./ref-DdQ_JXNw.js";import"./dropdown.component-Dp5R0qI6.js";import"./icon.component-c7RjI47s.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DqzLzqb8.js";import"./form-control-header.component-Dk2SIutn.js";import"./badge.component-lLxZyYDo.js";import"./flex.component-CiLmuYhc.js";import"./triangle-exclamation.component-Bk_n8iVe.js";import"./card.component-CaDj0kgd.js";import"./unwrap-slots-q2i_mraR.js";import"./checkmark.component-D3llMa0p.js";import"./rbcb-toggle.template-CRSkUznp.js";import"./chevron-bottom.component-K7QtWJYq.js";import"./cross-small.component-BajC_76i.js";import"./popover.component-D23Z55Xh.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-odFo9RBI.js";import"./calender-add.component-BsMokW24.js";import"./chevron-left.component-DSnORqFz.js";import"./chevron-right.component-CEGW8eew.js";import"./arrow-up.component-BKKeNd7h.js";import"./menu-heading.component-CtNmP9Td.js";import"./input.component-D6c0Plz8.js";import"./textarea.component-DYX0Mbez.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DO5yWjUW.js";import"./checkbox-group.component-DSU4Aqhk.js";import"./toggle-control-base.component-Dixrgfjw.js";import"./minus-small.component-CgDvtUQJ.js";import"./radio-group.component-Lrki-OlD.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
