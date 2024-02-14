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
var contentlayer_config_default = makeSource({
  pluginType: "local",
  contentDirPath: "libs/core/src/components",
  documentTypes: [Component],
  onExtraFieldData: "warn",
  onMissingOrIncompatibleData: "warn",
  onUnknownDocuments: "warn",
  onSuccess: (res) => {
    console.log(res);
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4FXAYWZT.mjs.map
