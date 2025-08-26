import {
  createPropertyFormatter,
  setSwiftFileProperties,
  sortByName,
  sortByReference,
} from 'style-dictionary/utils'

import * as swift from '../templates/ios/swift.tokens.ts'

const greenIosSwiftClassTree = {
  name: 'green/ios-swift-class-tree',
  format: ({ dictionary, options, file, platform }) => {
    let allTokens
    const { outputReferences, usesDtcg } = options
    options = setSwiftFileProperties(options, 'class', platform.transformGroup)

    if (outputReferences) {
      allTokens = [...dictionary.allTokens].sort(sortByReference(dictionary))
    } else {
      allTokens = [...dictionary.allTokens].sort(sortByName)
    }

    let propertyformat

    if (options.colorType == 'uiKitDynamicProvider') {
      propertyformat = swift.uiKitColorReferencePropertyFormatter(
        options.lightModeObjectName,
        options.darkModeObjectName,
        options,
      )
    } else if (options.colorType == 'swiftUiReferenceToUiKit') {
      propertyformat = swift.swiftUiColorReferencePropertyFormatter(
        options.uiKitObjectName,
        options,
      )
    } else {
      const valueformat = createPropertyFormatter({
        outputReferences,
        dictionary,
        formatting: {
          suffix: '',
        },
        usesDtcg,
      })

      propertyformat = swift.staticPropertyFormatter(options, valueformat)
    }
    const tree = swift.treeFromTokens(allTokens, options.type)
    const fileContent = swift.fileContentFromTree(
      tree,
      options,
      file,
      propertyformat,
    )
    return fileContent
  },
}

export default greenIosSwiftClassTree
