import { finished } from 'node:stream/promises'
import util from 'util'
import { defineDocumentType, makeSource } from '@contentlayer/source-files'

const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: '*.mdx',
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

const source = makeSource({
  contentDirPath: '.',
  documentTypes: [Component],
  onSuccess: (res) => {
    console.log(res)
  },
})

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk)
  }
}

source().then((res) => {
  console.log(process.cwd())
  console.log(
    util.inspect(
      res.fetchData({ schemaDef: res.provideSchema() }),
      true,
      10,
      true
    )
  )
})
