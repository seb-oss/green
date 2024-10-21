import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsBackdrop } from "@sebgroup/green-core/components/popover/backdrop.js";

const tagName = getScopedTagName("gds-backdrop");
//GdsBackdrop.define('gds-backdrop')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsBackdrop,
  react: React,
  events: {},
  displayName: "GdsBackdrop",
});

export default reactWrapper;
