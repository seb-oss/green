import "../dist/green-chlorophyll.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    stylePreview: true
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}