import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsFlex } from "@sebgroup/green-core/components/layout/flex/flex.js";

const tagName = getScopedTagName("gds-flex");
//GdsFlex.define('gds-flex')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsFlex,
  react: React,
  events: {},
  displayName: "GdsFlex",
});

export default reactWrapper;
