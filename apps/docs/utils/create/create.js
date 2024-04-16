const fs = require("fs")
const path = require("path")

const buttonName = process.argv[2]
const dirPath = path.join(
  __dirname,
  "..",
  "..",
  "content",
  "component",
  buttonName
)

// Create the directory
fs.mkdirSync(dirPath, { recursive: true })

// Create the .mdx files
const files = ["accessibility", "code", "index", "ux-text"]

files.forEach((file) => {
  let title = file.charAt(0).toUpperCase() + file.slice(1)
  if (file === "ux-text") {
    title = "UX text"
  }

  let frontmatter = `---
title: ${title}
global_id: ${buttonName}${file}
date: ${new Date().toISOString().split("T")[0]}
---\n`

  if (file === "index") {
    title = buttonName.charAt(0).toUpperCase() + buttonName.slice(1)
    frontmatter = `---
title: ${title}
summary: ${title} Summary
date: ${new Date().toISOString().split("T")[0]}
global_id: ${buttonName}index
status: work in progress
tags: 
node: 
---\n`
  }

  fs.writeFileSync(path.join(dirPath, `${file}.mdx`), frontmatter)
})
