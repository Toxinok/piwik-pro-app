import React, { useEffect } from 'react';
import { initializePiwik, trackPageView, trackGoal } from './tracking';

function App() {
  useEffect(() => {
    // Initialize Piwik PRO when the app loads
    initializePiwik();

    // Track the initial page view
    trackPageView();
  }, []);

  const handleGoalClick = () => {
    // Track a goal conversion when a button is clicked
    trackGoal(1, 50); // Goal ID: 1, Revenue: 50
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Piwik PRO Tracking Demo</h1>
          <p>Click the button below to track a goal conversion:</p>
          <button onClick={handleGoalClick}>Track Goal</button>
        </header>
      </div>
  );
}

export default App;
