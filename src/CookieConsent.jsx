import { createContext, useState, useEffect } from "react";
import initializeGA from "./analytics";
export const CookieConsentContext = createContext();

const CookieConsentProvider = ({ children }) => {
  const [consentStatus, setConsentStatus] = useState(() => {
    return localStorage.getItem("consentStatus") || "undecided";
  });

  useEffect(() => {
    // Store consent status in localStorage whenever it changes
    localStorage.setItem("consentStatus", consentStatus);
  }, [consentStatus]);

  const acceptConsent = () => {
    setConsentStatus("accepted");
  };

  const rejectConsent = () => {
    setConsentStatus("rejected");
  };

  useEffect(() => {
    // Initialize GA if consent is already given
    if (consentStatus === "accepted") {
      initializeGA();
      console.log("Google Analytics Intialized");
    }
  }, [consentStatus]);

  return (
    <CookieConsentContext.Provider
      value={[consentStatus, acceptConsent, rejectConsent]}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;
