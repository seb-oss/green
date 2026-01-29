import{x as t}from"./iframe-ivbVTJxO.js";import{a}from"./argTableProps-ZXUeLddG.js";import"./summary-CLN_6hYS.js";import"./datepicker-CMbPec57.js";import"./dropdown-CLR5Khiu.js";import"./option-CpVTh5ts.js";import"./menu-heading-JrYbEDBA.js";import"./input-ZxQEqMnr.js";import"./rocket-bvDalc49.js";import"./checkbox-group-Bz5yqDvu.js";import"./radio-group-CNTVoB9Z.js";import"./summary.component-DjZmhZK_.js";import"./query-async-PdZjGRyo.js";import"./datepicker.component-DHp3D_ly.js";import"./localized-decorator-Dy8Y3IuT.js";import"./ref-CxzvHTEZ.js";import"./dropdown.component-B24lVbMA.js";import"./icon.component-C_b0KA3_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DndNl1AN.js";import"./form-control-header.component-t8LzGRfg.js";import"./badge.component-BghjOjIZ.js";import"./flex.component-B_f8mxUu.js";import"./triangle-exclamation.component-CB8jYMzh.js";import"./card.component-YCIPbX_E.js";import"./unwrap-slots-D_UBRg3l.js";import"./checkmark.component-ITYfGB-c.js";import"./rbcb-toggle.template-BJb7U6x1.js";import"./chevron-bottom.component-BtksPL3l.js";import"./cross-small.component-qAO5-i7n.js";import"./popover.component-B5YD9oEZ.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D09vE-JV.js";import"./calender-add.component-BOQBucH4.js";import"./chevron-left.component-BzSsNguq.js";import"./chevron-right.component-BVT1kM4l.js";import"./arrow-up.component-zu9j2eXp.js";import"./menu-heading.component-CheRuLTM.js";import"./input.component-C5rBh3_V.js";import"./textarea.component-BsX1su7z.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CqExXdNy.js";import"./checkbox-group.component-9-_z0uYa.js";import"./toggle-control-base.component-BMbzL-Nw.js";import"./minus-small.component-B4TpaQVh.js";import"./radio-group.component-C-hJvd71.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
