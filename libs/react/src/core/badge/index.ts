import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsBadge } from "@sebgroup/green-core/components/badge/badge.js";

const tagName = getScopedTagName("gds-badge");
//GdsBadge.define('gds-badge')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsBadge,
  react: React,
  events: {},
  displayName: "GdsBadge",
});

export default reactWrapper;
