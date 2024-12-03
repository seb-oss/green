/**
 * @type {UserConfig}
 */
const pluginConfig = {
  root: '#cookie-consent',
  current_lang: 'en',
  autoclear_cookies: true,
  page_scripts: true,
  cookie_name: 'GDS Cookie Consent',
  remove_cookie_tables: true,

  categories: {
    analytics: {},
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
        },
        preferencesModal: {
          title: 'Manage cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Accept current selection',
          closeIconLabel: 'Close modal',
          sections: [
            {
              title: 'Somebody said ... cookies?',
              description: 'I want one!',
            },
            {
              title: 'Strictly Necessary cookies',
              description:
                'These cookies are essential for the proper functioning of the website and cannot be disabled.',

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: 'necessary',
            },
            {
              title: 'Performance and Analytics',
              description:
                'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
            },
          ],
        },
      },
    },
  },
}

export default pluginConfig
