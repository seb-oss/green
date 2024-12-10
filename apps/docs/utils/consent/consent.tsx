import { useEffect } from 'react';
import { GdsTheme } from '$/import/components';
import * as CookieConsent from 'vanilla-cookieconsent';

import pluginConfig from './config';
import './consentnew.css';

const Consent = () => {
  useEffect(() => {
    // Run the cookie consent plugin
    const cc = CookieConsent.run({
      ...pluginConfig,
      onConsent: () => {
        console.log('User provided consent'); // Log the action
        hideCookieConsentModal(); // Hide the modal
      },
    });

    // Function to hide the modal
    const hideCookieConsentModal = () => {
      const modalElement = document.querySelector('.cm[role="dialog"]'); // Update selector if needed
      if (modalElement) {
        modalElement.style.opacity = '0'; // Fade out
        modalElement.style.pointerEvents = 'none'; // Disable interaction
        setTimeout(() => {
          modalElement.style.display = 'none'; // Remove from layout
        }, 300); // Delay for transition effect
      } else {
        console.error('Modal element not found');
      }
    };

    return () => {
      // Clean up
      if (cc && typeof cc.destroy === 'function') {
        cc.destroy();
      }
    };
  }, []);

  return <GdsTheme id="cookie-consent"></GdsTheme>;
};

export default Consent;

