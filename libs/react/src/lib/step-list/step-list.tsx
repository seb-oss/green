import { createComponent } from "@lit/react";
import React from "react";
import { GdsStepList,GdsStepListItem } from "@sebgroup/green-core/step-list/index.js";

export const StepList = createComponent({
  tagName: 'gds-step-list',
  elementClass: GdsStepList,
  react: React
});

export const StepListNode = createComponent({
  tagName: 'gds-step-list-item',
  elementClass: GdsStepListItem,
  react: React
});