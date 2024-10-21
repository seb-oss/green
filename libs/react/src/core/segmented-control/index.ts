import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsSegmentedControl } from "@sebgroup/green-core/components/segmented-control/segmented-control.js";

const tagName = getScopedTagName("gds-segmented-control");
//GdsSegmentedControl.define('gds-segmented-control')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsSegmentedControl,
  react: React,
  events: {
    onChanged: "changed",
  },
  displayName: "GdsSegmentedControl",
});

export default reactWrapper;
