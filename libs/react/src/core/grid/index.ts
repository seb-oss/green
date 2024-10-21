import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsGrid } from "@sebgroup/green-core/components/layout/grid/grid.js";

const tagName = getScopedTagName("gds-grid");
//GdsGrid.define('gds-grid')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsGrid,
  react: React,
  events: {},
  displayName: "GdsGrid",
});

export default reactWrapper;
