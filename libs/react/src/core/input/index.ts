import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsTextarea } from "@sebgroup/green-core/components/textarea/textarea.js";

const tagName = getScopedTagName("gds-input");
//GdsTextarea.define('gds-input')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsTextarea,
  react: React,
  events: {},
  displayName: "GdsTextarea",
});

export default reactWrapper;
