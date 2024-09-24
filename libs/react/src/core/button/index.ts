import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsButton } from "@sebgroup/green-core/components/button/button.js";

const tagName = getScopedTagName("gds-button");
//GdsButton.define('gds-button')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsButton,
  react: React,
  events: {
    undefined: "click" as EventName<undefined>,
  },
  displayName: "GdsButton",
});

export default reactWrapper;
