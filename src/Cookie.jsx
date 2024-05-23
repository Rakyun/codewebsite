import { useContext } from "react";
import { CookieConsentContext } from "./CookieConsent";


const Cookie = () => {
  const [consentStatus, acceptConsent, rejectConsent] =
    useContext(CookieConsentContext);

  if (consentStatus !== "undecided") {
    return null;
  }
  
 
  return (
    <div className="fixed bottom-0 z-[99999999] w-full border-t border-gray-300 bg-white p-2">
      <p>
        We use cookies to enhance your experience. Accept to enable analytics.
      </p>
      <button
        onClick={acceptConsent}
        className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Accept
      </button>
      <button
        onClick={rejectConsent}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
      >
        Reject
      </button>
    </div>
  );
};

export default Cookie;
