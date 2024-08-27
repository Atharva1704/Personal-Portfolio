import React, { useState, useEffect } from 'react';
import './FadeText.css';  // Import the stylesheet

const FadeText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to toggle visibility after a delay (you can adjust the delay as needed)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);  // Adjust the delay in milliseconds

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fade-in-text ${isVisible ? 'visible' : ''}`}>
        Atharva Chavan
        {/* <span className="introName slideinleft">Atharva Chavan</span><br/>  */}
    </div>
  );
};

export default FadeText;
