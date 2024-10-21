import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsRadioGroup } from "@sebgroup/green-core/components/radio/radio-group.js";

const tagName = getScopedTagName("gds-radio-group");
//GdsRadioGroup.define('gds-radio-group')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsRadioGroup,
  react: React,
  events: {},
  displayName: "GdsRadioGroup",
});

export default reactWrapper;
