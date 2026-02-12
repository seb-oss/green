import{x as t}from"./iframe-CDmSi8W6.js";import{a}from"./argTableProps-m9REvccD.js";import"./summary-aFTw4QB3.js";import"./datepicker-Bbdb7UxS.js";import"./dropdown-C6yw3rBL.js";import"./option-CyTCFz4g.js";import"./menu-heading-Lub-0N5P.js";import"./input-C-3ImJKf.js";import"./rocket-DrTvVc1t.js";import"./checkbox-group-Bx6k9Dm2.js";import"./radio-group-DxT0g0-B.js";import"./summary.component-DI0c8uVe.js";import"./query-async-C8aIsxTH.js";import"./datepicker.component-C_LhEmYL.js";import"./localized-decorator-CV3CwOWD.js";import"./ref-B85JCLfN.js";import"./dropdown.component-Bd2pFs4F.js";import"./icon.component-ZJ0CFeFx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DAxOIUHW.js";import"./form-control-header.component-DAG67txe.js";import"./badge.component-5jGHgOF2.js";import"./flex.component-vI19mTc0.js";import"./triangle-exclamation.component-GhY_4JgD.js";import"./card.component-D1FWN4fX.js";import"./unwrap-slots-ClX7HkZI.js";import"./checkmark.component-Be44zSMi.js";import"./rbcb-toggle.template-Duo2J5hV.js";import"./chevron-bottom.component-CVtWNg5m.js";import"./cross-small.component-C3r-1Q2S.js";import"./popover.component-DXvOnWwT.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Dy-AKZSg.js";import"./calender-add.component-o-JarOQn.js";import"./chevron-left.component-CgztwddE.js";import"./chevron-right.component-6U39xlui.js";import"./arrow-up.component-BCuNNTtU.js";import"./menu-heading.component-Cs2ERqSg.js";import"./input.component-DFKWHerL.js";import"./textarea.component-B057Bv9n.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DKnasj2R.js";import"./checkbox-group.component-C6-yyS4-.js";import"./toggle-control-base.component-BAnTb9bj.js";import"./minus-small.component-CgIn4oJv.js";import"./radio-group.component-D53cQ_pl.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
