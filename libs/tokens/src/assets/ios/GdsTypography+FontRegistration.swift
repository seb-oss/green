import UIKit

extension Typography {
    static func registerFonts() {
        for weight in Weight.allCases {
            Typography.registerFont(named: weight.fontName)
        }
    }
    
    private static func registerFont(named name: String) {
        guard
         let asset = NSDataAsset(name: "Fonts/\(name)", bundle: Bundle.module),
         let provider = CGDataProvider(data: asset.data as NSData),
         let font = CGFont(provider),
         CTFontManagerRegisterGraphicsFont(font, nil)
         else {
            let message = "Failed to register font \(name)"
            assertionFailure(message)
            print(message)
            return
        }
     }
}

#if DEBUG
import SwiftUI

/// Registers SebGreen fonts exactly once for SwiftUI previews.
private enum _PreviewFontRegistrar {
    static var didRegister = false
    static func registerIfNeeded() {
        guard !didRegister else { return }
        Typography.registerFonts()
        didRegister = true
    }
}

public extension View {
    /// Call this in your `#Preview` or `PreviewProvider` to ensure package fonts are available.
    ///
    /// Example:
    /// ```swift
    /// #Preview {
    ///     MyComponent()
    ///         .sebRegisterFontsForPreview()
    /// }
    /// ```
    func previewByRegisteringFonts() -> some View {
        _PreviewFontRegistrar.registerIfNeeded()
        return self
    }
}
#endif