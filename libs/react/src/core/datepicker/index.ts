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
    undefined: "change" as EventName<undefined>,
    undefined: "input" as EventName<undefined>,
    undefined: "gds-ui-state" as EventName<undefined>,
  },
  displayName: "GdsDatepicker",
});

export default reactWrapper;
