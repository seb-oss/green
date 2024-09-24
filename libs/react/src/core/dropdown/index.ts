import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsDropdown } from "@sebgroup/green-core/components/dropdown/dropdown.js";

const tagName = getScopedTagName("gds-dropdown");
//GdsDropdown.define('gds-dropdown')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsDropdown,
  react: React,
  events: {
    undefined: "change" as EventName<undefined>,
    undefined: "gds-ui-state" as EventName<undefined>,
  },
  displayName: "GdsDropdown",
});

export default reactWrapper;
