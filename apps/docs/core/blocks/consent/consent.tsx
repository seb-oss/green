"use client"

import React, { useEffect } from "react"

import pluginConfig from "./config"

import "vanilla-cookieconsent"
import "./style.css"

// import "vanilla-cookieconsent/dist/cookieconsent.css"

declare global {
  interface Window {
    CookieConsentApi: any
  }
}

const Consent = () => {
  useEffect(() => {
    if (!document.getElementById("cc--main")) {
      window.CookieConsentApi = window.initCookieConsent()
      window.CookieConsentApi.run(pluginConfig)
    }
  }, [])

  return null
}

export default Consent
