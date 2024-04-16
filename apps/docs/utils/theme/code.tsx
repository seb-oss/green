import { type Options } from "rehype-pretty-code"
import { visit } from "unist-util-visit"

const BLOCK = ""
const TITLE = ""
const PRE = ""
const CODE = ""
const INLINE_BLOCK = ""
const INLINE_CODE = ""
const NUMBERED_LINES = ""

interface CustomOptions extends Options {
  copyButton: boolean
  plugins?: Function[] // Include the plugins property
}

function addCopyButton() {
  return (tree: any) => {
    visit(tree, "code", (node) => {
      node.children.push({
        type: "element",
        tagName: "button",
        properties: {
          className: ["copy-button"],
          onclick: `navigator.clipboard.writeText(${JSON.stringify(
            node.children.map((child: { value: any }) => child.value).join("\n")
          )}).then(() => alert('Code copied!')).catch((error) => console.error('Error copying code: ', error))`,
        },
        children: [{ type: "text", value: "Copy" }],
      })
    })
  }
}

export function rehypePrettyCodeClasses() {
  return (tree: any) => {
    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === "code" &&
            Object.keys(node.properties).length === 0 &&
            node.children.some((n: any) => n.type === "text")
        ),
      (node: any) => {
        const textNode = node.children.find((n: any) => n.type === "text")
        textNode.type = "element"
        textNode.tagName = "code"
        textNode.properties = { className: [INLINE_CODE] }
        textNode.children = [{ type: "text", value: textNode.value }]
        node.properties.className = [INLINE_BLOCK]
        node.tagName = "span"
      }
    )

    visit(
      tree,
      (node: any) =>
        Boolean(
          typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
            "undefined"
        ),
      (node: any) => {
        if (node.tagName === "span") {
          node.properties.className = [
            ...(node.properties.className || []),
            INLINE_BLOCK,
          ]
          node.children[0].properties.className = [
            ...(node.children[0].properties.className || []),
            INLINE_CODE,
          ]

          return node
        }

        if (node.tagName === "div") {
          node.properties.className = [
            ...(node.properties.className || []),
            BLOCK,
          ]
          node.children = node.children.map((node: any) => {
            if (
              node.tagName === "div" &&
              typeof node.properties?.["data-rehype-pretty-code-title"] !==
                "undefined"
            ) {
              node.properties.className = [
                ...(node.properties.className || []),
                TITLE,
              ]
            }
            if (node.tagName === "pre") {
              node.properties.className = [PRE]
              if (node.children[0].tagName === "code") {
                node.children[0].properties.className = [
                  ...(node.children[0].properties.className || []),
                  CODE,
                ]
                if (
                  typeof node.children[0].properties["data-line-numbers"] !==
                  "undefined"
                ) {
                  node.children[0].properties.className.push(NUMBERED_LINES)
                }
              }
            }

            return node
          })

          return node
        }
      }
    )
  }
}

// Update rehypePrettyCodeOptions to use CustomOptions
export const rehypePrettyCodeOptions: Partial<CustomOptions> = {
  theme: "one-dark-pro",
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
    node.properties.className = [""]
  },
  copyButton: true,
  plugins: [addCopyButton], // Include your custom plugins here
}
