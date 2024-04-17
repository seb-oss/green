/**
 * @type {UserConfig}
 */
const pluginConfig = {
  current_lang: "en",
  autoclear_cookies: true,
  page_scripts: true,
  cookie_name: "GDS Cookie Consent",
  remove_cookie_tables: true,

  onFirstAction: function (user_preferences, cookie) {
    const analyticsEnabled =
      window.CookieConsentApi.allowedCategory("analytics")
  },

  onAccept: function (cookie) {
    if (window.CookieConsentApi.allowedCategory("analytics")) {
      // ...
    }
  },

  onChange: function (cookie, changed_preferences) {
    // ...
  },

  languages: {
    en: {
      consent_modal: {
        title: "We use cookies!",
        description:
          'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: "Accept all",
          role: "accept_all",
        },
        secondary_btn: {
          text: "Reject all",
          role: "accept_necessary",
        },
      },
      settings_modal: {
        title: "Cookie Settings",
        save_settings_btn: "Save settings",
        accept_all_btn: "Accept all",
        reject_all_btn: "Reject all",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
          { col4: "Description" },
        ],
        blocks: [
          {
            title: "Cookie usage 📢",
            description:
              "Our website utilizes analytics solely for testing purposes and to track page views. These analytics cookies are crucial for ensuring the smooth functioning of our site. Please be assured that the data collected is not used for marketing or any other purposes beyond website optimization.",
          },
          {
            title: "Basic cookies",
            description: "Tracking page views and other essential functions",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true,
            },
          },
        ],
      },
    },
  },
}

export default pluginConfig
