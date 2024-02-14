// libs/repo-tools/src/scripts/contentlayer.config.js
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
var Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string"
    },
    date: {
      type: "string"
    },
    global_id: {
      type: "string"
    }
  }
}));
var Todo = defineDocumentType(() => ({
  name: "Todo",
  filePathPattern: "**/*.md",
  contentType: "md",
  fields: {
    title: {
      type: "string"
    },
    date: {
      type: "string"
    },
    global_id: {
      type: "string"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "libs/core/src/components",
  documentTypes: [Component, Todo]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3OJZEX36.mjs.map
