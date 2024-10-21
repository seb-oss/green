import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsCoachmark } from "@sebgroup/green-core/components/coachmark/coachmark.js";

const tagName = getScopedTagName("gds-coachmark");
//GdsCoachmark.define('gds-coachmark')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsCoachmark,
  react: React,
  events: {
    onGdsUiState: "gds-ui-state",
  },
  displayName: "GdsCoachmark",
});

export default reactWrapper;
