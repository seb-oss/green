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
    onChange: "change",
    onGdsUiState: "gds-ui-state",
  },
  displayName: "GdsDropdown",
});

export default reactWrapper;
