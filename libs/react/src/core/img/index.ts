import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsImg } from "@sebgroup/green-core/components/media/img/img.js";

const tagName = getScopedTagName("gds-img");
//GdsImg.define('gds-img')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsImg,
  react: React,
  events: {},
  displayName: "GdsImg",
});

export default reactWrapper;
