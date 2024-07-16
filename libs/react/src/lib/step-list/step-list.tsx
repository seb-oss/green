import { createComponent } from "@lit/react";
import React from "react";
import { GdsStepListItem } from "@components/Green/step-wizard/gds-step-list-item";
import { GdsStepList } from "@components/Green/step-wizard/gds-step-list";

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