"use client"

import { useEffect } from "react"

import pluginConfig from "./config"

import "vanilla-cookieconsent"
import "./style.css"

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
