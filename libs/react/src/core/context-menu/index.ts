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
    undefined: "gds-menu-item-click" as EventName<undefined>,
    undefined: "gds-ui-state" as EventName<undefined>,
  },
  displayName: "GdsContextMenu",
});

export default reactWrapper;
