var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// apps/docs/contentlayer.config.ts
import { makeSource } from "@contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

// apps/docs/utils/content/utils.tsx
import * as fs from "node:fs/promises";
import path from "node:path";
var contentDirPath = "content";
var urlFromFilePath = (doc) => {
  let urlPath = doc._raw.flattenedPath.replace(/^pages\/?/, "/");
  if (!urlPath.startsWith("/"))
    urlPath = `/${urlPath}`;
  urlPath = urlPath.split("/").map((segment) => segment.replace(/^\d\d\d\-/, "")).filter((segment) => segment !== "global_id").join("/");
  return urlPath;
};
var getLastEditedDate = async (doc) => {
  const stats = await fs.stat(
    path.join(contentDirPath, doc._raw.sourceFilePath)
  );
  return stats.mtime;
};

// apps/docs/utils/content/types/index.tsx
var types_exports = {};
__export(types_exports, {
  Changelog: () => Changelog,
  Component: () => Component,
  Member: () => Member,
  Post: () => Post
});

// apps/docs/utils/content/types/Post.tsx
import { defineDocumentType } from "@contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description: "Random ID to uniquely identify this doc, even after it moves",
      required: true
    },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: false },
    description: { type: "string", required: false }
  },
  computedFields: {
    url_path: {
      type: "string",
      description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (post) => {
        if (post._id.startsWith("blog/index.mdx"))
          return "/blog";
        return urlFromFilePath(post);
      }
    },
    pathSegments: {
      type: "json",
      resolve: (post) => urlFromFilePath(post).split("/").slice(2).map((dirName) => {
        const re = /^((\d+)-)?(.*)$/;
        const [, , orderStr, pathName] = dirName.match(re) ?? [];
        const order = orderStr ? parseInt(orderStr) : 0;
        return { order, pathName };
      })
    },
    last_edited: { type: "date", resolve: getLastEditedDate }
  },
  extensions: {}
}));

// apps/docs/utils/content/types/Component.tsx
import {
  defineDocumentType as defineDocumentType2
} from "@contentlayer/source-files";
import axios from "axios";
import GithubSlugger from "github-slugger";
var figmaAccessKey = process.env.FIGMA_ACCESS_KEY;
var figmaProjectId = process.env.FIGMA_PROJECT_ID;
var Component = defineDocumentType2(() => ({
  name: "Component",
  filePathPattern: `component/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description: "Random ID to uniquely identify this doc, even after it moves",
      required: true
    },
    title: { type: "string", required: true },
    summary: { type: "string", required: false },
    date: { type: "date", required: false },
    tags: { type: "string", required: false },
    status: { type: "string", required: false },
    node: { type: "string", required: false }
  },
  computedFields: {
    url_path: {
      type: "string",
      description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (component) => {
        if (component._id.startsWith("component/**/design.mdx"))
          return "/component";
        return urlFromFilePath(component);
      }
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          (match) => {
            const groups = match.groups;
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag ? flag.length : 0,
              text: content,
              slug: content ? slugger.slug(content) : void 0
            };
          }
        );
        return headings;
      }
    },
    pathSegments: {
      type: "json",
      resolve: (post) => urlFromFilePath(post).split("/").slice(2).map((dirName) => {
        const re = /^((\d+)-)?(.*)$/;
        const [, , orderStr, pathName] = dirName.match(re) ?? [];
        const order = orderStr ? parseInt(orderStr) : 0;
        return { order, pathName };
      })
    },
    last_edited: { type: "date", resolve: getLastEditedDate },
    figma_hero_svg: {
      type: "json",
      resolve: async (doc) => {
        const node = doc.node;
        try {
          const response = await axios.get(
            `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node}&format=svg`,
            {
              headers: {
                "X-Figma-Token": figmaAccessKey
              }
            }
          );
          const images = response.data.images;
          const imageUrl = Object.values(images)[0];
          const svgResponse = await axios.get(imageUrl);
          return {
            node,
            svg: svgResponse.data
          };
        } catch (error) {
          console.error("Error fetching Figma hero SVG:");
          return {
            node,
            svg: ""
          };
        }
      }
    },
    figma_svgs: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /node="(?<node>.+?)"/g;
        let nodes = [];
        try {
          nodes = await Promise.all(
            Array.from(doc.body.raw.matchAll(regXHeader)).map(async (match) => {
              const groups = match.groups;
              const node = groups?.node;
              try {
                const response = await axios.get(
                  `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node}&format=svg`,
                  {
                    headers: {
                      "X-Figma-Token": figmaAccessKey
                    }
                  }
                );
                const images = response.data.images;
                const imageUrl = Object.values(images)[0];
                const svgResponse = await axios.get(imageUrl);
                return {
                  node,
                  svg: svgResponse.data
                };
              } catch (error) {
                console.error(`Error fetching Figma SVG`);
                return {
                  node,
                  svg: ""
                };
              }
            })
          );
        } catch (error) {
          console.error("Error processing Figma SVGS:");
        }
        return nodes;
      }
    }
  },
  extensions: {}
}));

// apps/docs/utils/content/types/Changelog.tsx
import { defineDocumentType as defineDocumentType3 } from "@contentlayer/source-files";
var Changelog = defineDocumentType3(() => ({
  name: "Changelog",
  filePathPattern: `changelog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description: "Random ID to uniquely identify this doc, even after it moves",
      required: true
    },
    version: { type: "string", required: true },
    title: { type: "string", required: true },
    summary: { type: "string", required: false },
    date: { type: "date", required: true }
  },
  computedFields: {
    url_path: {
      type: "string",
      description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (changelog) => {
        if (changelog._id.startsWith("changelog/index.mdx"))
          return "/changelog";
        return urlFromFilePath(changelog);
      }
    },
    pathSegments: {
      type: "json",
      resolve: (changelog) => urlFromFilePath(changelog).split("/").slice(2).map((dirName) => {
        const re = /^((\d+)-)?(.*)$/;
        const [, , orderStr, pathName] = dirName.match(re) ?? [];
        const order = orderStr ? parseInt(orderStr) : 0;
        return { order, pathName };
      })
    },
    last_edited: { type: "date", resolve: getLastEditedDate }
  },
  extensions: {}
}));

// apps/docs/utils/content/types/Member.tsx
import { defineDocumentType as defineDocumentType4 } from "@contentlayer/source-files";
var Member = defineDocumentType4(() => ({
  name: "Member",
  filePathPattern: `team/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description: "Random ID to uniquely identify this doc, even after it moves",
      required: true
    },
    name: { type: "string", required: true },
    handle: { type: "string", required: false },
    email: { type: "string", required: false },
    title: { type: "string", required: false },
    location: { type: "string", required: false },
    department: { type: "string", required: false }
  },
  computedFields: {
    url_path: {
      type: "string",
      description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (member) => {
        if (member._id.startsWith("member/index.mdx"))
          return "/member";
        return urlFromFilePath(member);
      }
    },
    pathSegments: {
      type: "json",
      resolve: (team) => urlFromFilePath(team).split("/").slice(2).map((dirName) => {
        const re = /^((\d+)-)?(.*)$/;
        const [, , orderStr, pathName] = dirName.match(re) ?? [];
        const order = orderStr ? parseInt(orderStr) : 0;
        return { order, pathName };
      })
    },
    last_edited: { type: "date", resolve: getLastEditedDate }
  },
  extensions: {}
}));

// apps/docs/contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath,
  documentTypes: types_exports,
  // mdx: { rehypePlugins: [highlight] },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData();
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HBHB6M5M.mjs.map
