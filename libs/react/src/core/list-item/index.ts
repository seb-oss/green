import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsListItem } from "@sebgroup/green-core/components/grouped-list/list-item.js";

const tagName = getScopedTagName("gds-list-item");
//GdsListItem.define('gds-list-item')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsListItem,
  react: React,
  events: {},
  displayName: "GdsListItem",
});

export default reactWrapper;
