import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsCalendar } from "@sebgroup/green-core/components/calendar/calendar.js";

const tagName = getScopedTagName("gds-calendar");
//GdsCalendar.define('gds-calendar')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsCalendar,
  react: React,
  events: {
    undefined: "change" as EventName<undefined>,
    undefined: "gds-date-focused" as EventName<undefined>,
  },
  displayName: "GdsCalendar",
});

export default reactWrapper;
