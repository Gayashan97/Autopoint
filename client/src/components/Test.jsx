import React, { useEffect, useState } from 'react';

const WelcomeMessage = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    // Check the local storage for the flag/key
    const welcomeMessageShown = localStorage.getItem('welcomeMessageShown');

    if (welcomeMessageShown === 'true') {
      // Welcome message has already been shown, so don't render it
      setShowWelcomeMessage(false);
    } else {
      // Welcome message hasn't been shown, set the flag/key in local storage
      localStorage.setItem('welcomeMessageShown', 'true');
    }
  }, []);

  return (
    <div>
      {showWelcomeMessage && (
        // Render your welcome message component here
        <div>Welcome to the website!</div>
      )}
      {/* Rest of your component */}
    </div>
  );
};

export default WelcomeMessage;