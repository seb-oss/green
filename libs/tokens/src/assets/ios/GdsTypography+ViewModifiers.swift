import SwiftUI

// MARK: - Modifier function

public extension View {
  /// Apply SEB font + the correct Apple leading for a given text style.
  func typography(_ style: Typography) -> some View {
    modifier(style)
  }
}

// MARK: - ViewModifier that enforces leading (line height)

extension Typography: ViewModifier {
    public func body(content: Content) -> some View {
        content.font(
              .custom(weight.fontName, size: size, relativeTo: textStyle)
            )
    }
}