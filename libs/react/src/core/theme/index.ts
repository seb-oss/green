import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsTheme } from "@sebgroup/green-core/components/theme/theme.js";

const tagName = getScopedTagName("gds-theme");
//GdsTheme.define('gds-theme')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsTheme,
  react: React,
  events: {},
  displayName: "GdsTheme",
});

export default reactWrapper;
