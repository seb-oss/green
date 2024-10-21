import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsCard } from "@sebgroup/green-core/components/layout/card/card.js";

const tagName = getScopedTagName("gds-card");
//GdsCard.define('gds-card')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsCard,
  react: React,
  events: {},
  displayName: "GdsCard",
});

export default reactWrapper;
