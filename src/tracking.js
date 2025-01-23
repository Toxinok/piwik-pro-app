import PiwikPro, { PageViews, GoalConversions } from '@piwikpro/tracking-base-library';

// Replace with your actual container ID and container URL
const CONTAINER_ID = 'your-container-id';
const CONTAINER_URL = 'https://your-container-url';

export const initializePiwik = () => {
    PiwikPro.initialize(CONTAINER_ID, CONTAINER_URL, { dataLayerName: 'my-data-layer' });
};

export const trackPageView = () => {
    PageViews.trackPageView();
};

export const trackGoal = (goalId, revenue = 0) => {
    GoalConversions.trackGoal(goalId, revenue);
};
