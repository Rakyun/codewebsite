import { createContext, useState, useEffect } from "react";
import initializeGA from "./analytics";
export const CookieConsentContext = createContext();

const CookieConsentProvider = ({ children }) => {
  // Get Saved Data in Local Storage to store in State, if no Data seen, then State == Undecided
  const [consentStatus, setConsentStatus] = useState(() => {
    return localStorage.getItem("consentStatus") || "undecided";
  });
  // Save whatever value your state has to local storage, so the code 6 can acess the value in the future
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
