"use client";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="sebgroup/green"
      repoId="MDEwOlJlcG9zaXRvcnkzNjQyNDgyMjY"
      category="Blog"
      categoryId="DIC_kwDOFbX8os4CaiyT"
      mapping="pathname"
      strict="1"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
