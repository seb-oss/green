import React from "react";
import { Mermaid as MdxMermaid } from 'mdx-mermaid/Mermaid';

export const SBMermaid = ({ chart }) => {
  if(!chart) {
    return null
  }
  return React.createElement(MdxMermaid, { chart, config: { theme: { light: 'neutral', dark: 'dark' } } });

  return chart;
};
