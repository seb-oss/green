import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsFilterChip } from "@sebgroup/green-core/components/filter-chips/filter-chip/filter-chip.js";

const tagName = getScopedTagName("gds-filter-chip");
//GdsFilterChip.define('gds-filter-chip')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsFilterChip,
  react: React,
  events: {},
  displayName: "GdsFilterChip",
});

export default reactWrapper;
