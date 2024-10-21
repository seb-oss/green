import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsDatepicker } from "@sebgroup/green-core/components/datepicker/datepicker.js";

const tagName = getScopedTagName("gds-datepicker");
//GdsDatepicker.define('gds-datepicker')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsDatepicker,
  react: React,
  events: {
    onChange: "change",
    onInput: "input",
    onGdsUiState: "gds-ui-state",
  },
  displayName: "GdsDatepicker",
});

export default reactWrapper;
