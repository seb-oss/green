import{x as t}from"./iframe-BvJ9qi3m.js";import{a}from"./argTableProps-Dlf7tHQD.js";import"./summary-Ev1drtwR.js";import"./datepicker-DDLvu-c9.js";import"./dropdown-Cqst0BoD.js";import"./option-2WwQoyF7.js";import"./menu-heading-DjgfVXnr.js";import"./input-BnIQOpKZ.js";import"./rocket-IhdPImQe.js";import"./checkbox-group-dAeSWrRs.js";import"./radio-group-BAszNVVB.js";import"./summary.component-BZ-aU15b.js";import"./query-async-BHcjGrBE.js";import"./datepicker.component-D6S_vsSz.js";import"./localized-decorator-yX1kdmUL.js";import"./ref-BSgoetkx.js";import"./dropdown.component-Bew90JJJ.js";import"./icon.component-HY8skLgu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D_HUnaog.js";import"./form-control-header.component-FtaGESf-.js";import"./badge.component-BsyDWdgM.js";import"./flex.component-D0FPoO6_.js";import"./triangle-exclamation.component-CQsyXOD_.js";import"./card.component-Bekm9NNJ.js";import"./unwrap-slots-Dpp5OLBx.js";import"./checkmark.component-CwZ40GRR.js";import"./rbcb-toggle.template-DHd-Bp_2.js";import"./chevron-bottom.component-ykSuG9hw.js";import"./cross-small.component-Yr8S-wkI.js";import"./popover.component-DaoLQkhy.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CiaVTgLS.js";import"./calender-add.component-CI6LCA38.js";import"./chevron-left.component-D30cojE4.js";import"./chevron-right.component-DJex8r26.js";import"./arrow-up.component-l8pjHy2O.js";import"./menu-heading.component-CrRl1wkC.js";import"./input.component-C9qJm53i.js";import"./textarea.component-46oxajJo.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Dle-cE2Y.js";import"./checkbox-group.component-BQGtSpIM.js";import"./toggle-control-base.component-CjIS_S9J.js";import"./minus-small.component-Cyqz6Roq.js";import"./radio-group.component-DcdYBtV5.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
