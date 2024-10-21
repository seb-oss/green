import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsContextMenu } from "@sebgroup/green-core/components/context-menu/context-menu.js";

const tagName = getScopedTagName("gds-context-menu");
//GdsContextMenu.define('gds-context-menu')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsContextMenu,
  react: React,
  events: {
    onGdsMenuItemClick: "gds-menu-item-click",
    onGdsUiState: "gds-ui-state",
  },
  displayName: "GdsContextMenu",
});

export default reactWrapper;
