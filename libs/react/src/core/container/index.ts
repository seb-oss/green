import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsContainer } from "@sebgroup/green-core/components/layout/container/container.js";

const tagName = getScopedTagName("gds-container");
//GdsContainer.define('gds-container')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsContainer,
  react: React,
  events: {},
  displayName: "GdsContainer",
});

export default reactWrapper;
