import localFont from "next/font/local"

const SEBSansSerif = localFont({
  src: [
    {
      path: "../../public/fonts/SEBSansSerif-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SEBSansSerif-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/SEBSansSerif-Book.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../../public/fonts/SEBSansSerif-BookItalic.woff2",
      weight: "450",
      style: "italic",
    },
    {
      path: "../../public/fonts/SEBSansSerif-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SEBSansSerif-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/SEBSansSerif-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SEBSansSerif-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/SEBSansSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SEBSansSerif-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--gds-font-family",
})
export const fontVariable = SEBSansSerif.variable
export default SEBSansSerif
