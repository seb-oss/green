import * as React from "react";
import { createComponent } from "@lit/react";
import { getScopedTagName } from "@sebgroup/green-core/scoping";
import { GdsVideo } from "@sebgroup/green-core/components/media/video/video.js";

const tagName = getScopedTagName("gds-video");
//GdsVideo.define('gds-video')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsVideo,
  react: React,
  events: {},
  displayName: "GdsVideo",
});

export default reactWrapper;
