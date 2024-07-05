import { createComponent } from "@lit/react";
import React from "react";
import { GdsStepListItem } from "../../../../core/src/components/step-list/step-list-item";
import { GdsStepList } from "../../../../core/src/components/step-list/step-list";

export const StepList = createComponent({
  tagName: 'gds-step-list',
  elementClass: GdsStepList,
  react: React
});

export const StepListItem = createComponent({
  tagName: 'gds-step-list-item',
  elementClass: GdsStepListItem,
  react: React
});


