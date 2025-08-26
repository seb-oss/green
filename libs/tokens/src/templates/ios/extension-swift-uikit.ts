type TemplateOptions = {
  header: string
  imports?: string[]
  formatProperty: (token: any) => string
  options?: any
  allTokens: any[]
}

export default ({
  allTokens,
  header,
  options,
  formatProperty,
}: TemplateOptions): string => `
${header}

import UIKit
import SwiftUI

public extension UIColor {
	${allTokens
    .map((token) => {
      const name = token.name.replace('sysColor', '')
      const smallFirstLetter = name.charAt(0).toLowerCase() + name.slice(1)
      return `static var ${smallFirstLetter}: UIColor { gdsColor(named: "${name}") }`
    })
    .join('\n    ')}

	static func gdsColor(named name: String) -> UIColor {
	guard let c = UIColor(named: name, in: .module, compatibleWith: nil) else {
			assertionFailure("Missing color asset '\(name)' in GdsColours resources")
			return .clear
		}
		return c
	}
}

public extension Color {
${allTokens
  .map((token) => {
    const name = token.name.replace('sysColor', '')
    const smallFirstLetter = name.charAt(0).toLowerCase() + name.slice(1)
    return `static var ${smallFirstLetter}: Color { Color("${name}", bundle: .module) }`
  })
  .join('\n    ')}

		static func gdsColor(_ name: String) -> Color {
				Color(name, bundle: .module)
		}
}
`
