import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsGroupedList } from "@sebgroup/green-core/components/grouped-list/grouped-list.js";

const tagName = getScopedTagName("gds-grouped-list");
//GdsGroupedList.define('gds-grouped-list')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsGroupedList,
  react: React,
  events: {},
  displayName: "GdsGroupedList",
});

export default reactWrapper;
