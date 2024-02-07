import { makeSource, defineDocumentType } from '@contentlayer/source-files'

const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: '**/*.md',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    global_id: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
  },
}))

const source = makeSource({
  contentDirPath: '/libs/core/src/components',
  documentTypes: [Component],
})

console.log(source)
