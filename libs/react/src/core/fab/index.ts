import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsFab } from "@sebgroup/green-core/components/button/fab/fab.js";

const tagName = getScopedTagName("gds-fab");
//GdsFab.define('gds-fab')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsFab,
  react: React,
  events: {
    onClick: "click",
  },
  displayName: "GdsFab",
});

export default reactWrapper;
