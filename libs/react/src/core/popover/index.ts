import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsPopover } from "@sebgroup/green-core/components/popover/popover.js";

const tagName = getScopedTagName("gds-popover");
//GdsPopover.define('gds-popover')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsPopover,
  react: React,
  events: {
    onGdsUiState: "gds-ui-state",
  },
  displayName: "GdsPopover",
});

export default reactWrapper;
