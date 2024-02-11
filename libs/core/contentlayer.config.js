import { defineDocumentType, makeSource } from '@contentlayer/source-files'

const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    global_id: {
      type: 'string',
    },
  },
}))

const Todo = defineDocumentType(() => ({
  name: 'Todo',
  filePathPattern: '**/*.md',
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    global_id: {
      type: 'string',
    },
  },
}))

export default makeSource({
  contentDirPath: 'libs/core/src/components',
  documentTypes: [Component, Todo],
})
