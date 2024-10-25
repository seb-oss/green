/** Gets an array of components from a CEM object. */
function getAllComponents(metadata) {
  const allComponents = []

  metadata.modules.map((module) => {
    module.declarations?.map((declaration) => {
      if (declaration.customElement) {
        const component = declaration
        const path = module.path

        if (component) {
          allComponents.push(Object.assign(component, { path }))
        }
      }
    })
  })

  return allComponents
}

module.exports = {
  getAllComponents,
}
