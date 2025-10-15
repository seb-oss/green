import UIKit

extension Typography {
    public enum Weight: CaseIterable {
        case bold
        case boldItalic
        case book
        case bookItalic
        case italic
        case medium
        case mediumItalic
        case regular
        

        var fontName: String {
            switch self {
            case .bold : "SEBSansSerif-Bold"
            case .boldItalic : "SEBSansSerif-BoldItalic"
            case .book : "SEBSansSerif-Book"
            case .bookItalic : "SEBSansSerif-BookItalic"
            case .italic : "SEBSansSerif-Italic"
            case .medium : "SEBSansSerif-Medium"
            case .mediumItalic : "SEBSansSerif-MediumItalic"
            case .regular : "SEBSansSerif-Regular"
            }
        }
    }
}