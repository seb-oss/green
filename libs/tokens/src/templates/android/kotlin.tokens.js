import { fileHeader } from 'style-dictionary/utils'

export const staticPropertyFormatter = (options, valueFormatter) => {
  return function (token, indent) {
    let value = valueFormatter(token.token)
    const equalityIndex = value.indexOf('=')
    if (equalityIndex > 0) {
      value = value.slice(equalityIndex + 1)
    }
    return (
      indent +
      options.accessControl +
      ' static let ' +
      token.name +
      ' =' +
      value
    )
  }
}

export const swiftUiColorReferencePropertyFormatter = (
  uiKitObjectName,
  options,
) => {
  return function (token, indent) {
    const path =
      token.path
        .slice(0, token.path.length - 1)
        .map((pathComponent) => {
          return pathComponent[0].toUpperCase() + pathComponent.slice(1)
        })
        .join('.') +
      '.' +
      token.name

    return (
      indent +
      options.accessControl +
      ' static let ' +
      token.name +
      ' = Color(uiColor: ' +
      uiKitObjectName +
      '.' +
      path +
      ')'
    )
  }
}

export const uiKitColorReferencePropertyFormatter = (
  lightModeObjectName,
  darkModeObjectName,
  options,
) => {
  return function (token, indent) {
    const path =
      token.path
        .slice(0, token.path.length - 1)
        .map((pathComponent) => {
          return pathComponent[0].toUpperCase() + pathComponent.slice(1)
        })
        .join('.') +
      '.' +
      token.name

    return (
      indent +
      options.accessControl +
      ' static var ' +
      token.name +
      ': UIColor {\n' +
      indent +
      '    return UIColor { (traits) -> UIColor in\n' +
      indent +
      '        return traits.userInterfaceStyle == .dark ?\n' +
      indent +
      '           ' +
      darkModeObjectName +
      '.' +
      path +
      ' :\n' +
      indent +
      '           ' +
      lightModeObjectName +
      '.' +
      path +
      '\n' +
      indent +
      '    }\n' +
      indent +
      '}\n'
    )
  }
}

/// Structures a list of tokens into a tree by the token paths.
export const treeFromTokens = (tokens, ignorePathUpToValue) => {
  let tree = null
  tokens.forEach((token) => {
    let usablePath
    if (ignorePathUpToValue) {
      const index = token.path.indexOf(ignorePathUpToValue)
      if (index > -1) {
        usablePath = token.path.slice(index + 1)
      } else {
        usablePath = token.path
      }
    } else {
      usablePath = token.path
    }
    // Replace hyphens with camel case
    usablePath = usablePath.map((pathComponent) => {
      let result = pathComponent
      let index = -1
      while ((index = result.indexOf('-')) > -1) {
        result =
          result.slice(0, index) +
          result[index + 1].toUpperCase() +
          result.slice(index + 2)
      }
      return result
    })
    tree = placeTokenInTree(token, usablePath, usablePath, tree)
  })
  return tree
}

/// Outputs the full string contents of a Swift file constructed from the information in a given TokenTree.
export const fileContentFromTree = async (
  tree,
  options,
  file,
  propertyFormatter,
) => {
  // Headers and imports
  let result = '//\n// ' + file.destination + '\n//\n'
  result += await fileHeader({ file, commentStyle: 'short' })
  result += options.import
    .map(function (item) {
      return 'import ' + item
    })
    .join('\n')
  result += '\n\n'

  // File contents
  result +=
    options.accessControl +
    ' ' +
    options.objectType +
    ' ' +
    options.className +
    ' {\n'
  result += swiftObjectFromTree(tree, options, propertyFormatter, 1)
  result += '}\n'

  return result
}

const swiftObjectFromTree = (tree, options, propertyFormatter, indent) => {
  let result = ''
  const indentString = '    '.repeat(indent)

  tree.branches.forEach((branch) => {
    let name
    if (branch.name.length > 1) {
      name = branch.name[0].toUpperCase() + branch.name.slice(1)
    } else {
      name = branch.name.toUpperCase()
    }
    result +=
      indentString +
      options.accessControl +
      ' ' +
      options.objectType +
      ' ' +
      name +
      ' {\n'
    // Increase indent for each subnode to make the contents easy to read
    result += swiftObjectFromTree(
      branch.tree,
      options,
      propertyFormatter,
      indent + 1,
    )
    result += indentString + '}\n'
  })

  tree.properties.forEach((property) => {
    result += propertyFormatter(property, indentString) + '\n'
  })
  return result
}

const placeTokenInTree = (token, path, fullPath, tree) => {
  if (!tree) {
    tree = {
      properties: [],
      branches: [],
    }
  }

  // Invalid path, return immediately
  if (path.length < 1) {
    return tree
  }

  // End early on invalid names
  const name = path[0]
  if (!name) {
    return tree
  }
  if (name.length == 0) {
    return tree
  }

  // End to recursive loop. Final path section is always a property since it has no subnodes.
  if (path.length == 1) {
    tree.properties.push({
      name: name,
      path: fullPath,
      token: token,
    })
    return tree
  }

  // Recursively find/create branches until we reach the proper spot for the token
  const remainingPath = path.slice(1)
  const existingBranch = tree.branches.find((value) => {
    return value.name == name
  })
  let treeFromBranch = null
  let isNewBranch = false
  if (existingBranch) {
    treeFromBranch = existingBranch.tree
  } else {
    isNewBranch = true
  }
  treeFromBranch = placeTokenInTree(
    token,
    remainingPath,
    fullPath,
    treeFromBranch,
  )
  if (isNewBranch) {
    tree.branches.push({
      name: name,
      tree: treeFromBranch,
    })
  }
  return tree
}
