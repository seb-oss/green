import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsMenuButton } from "@sebgroup/green-core/components/menu-button/menu-button.js";

const tagName = getScopedTagName("gds-menu-button");
//GdsMenuButton.define('gds-menu-button')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsMenuButton,
  react: React,
  events: {
    onClick: "click",
  },
  displayName: "GdsMenuButton",
});

export default reactWrapper;
