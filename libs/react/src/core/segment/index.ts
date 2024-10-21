import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsSegment } from "@sebgroup/green-core/components/segmented-control/segment/segment.js";

const tagName = getScopedTagName("gds-segment");
//GdsSegment.define('gds-segment')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsSegment,
  react: React,
  events: {},
  displayName: "GdsSegment",
});

export default reactWrapper;
