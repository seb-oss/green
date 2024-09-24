import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsFilterChips } from "@sebgroup/green-core/components/filter-chips/filter-chips.js";

const tagName = getScopedTagName("gds-filter-chips");
//GdsFilterChips.define('gds-filter-chips')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsFilterChips,
  react: React,
  events: {
    onChange: "change",
  },
  displayName: "GdsFilterChips",
});

export default reactWrapper;
