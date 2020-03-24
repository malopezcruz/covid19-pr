import ReactGA from 'react-ga';

export const initializeGoogleAnalytics = () => {
  ReactGA.initialize('UA-2126086-12');
};

export const registerPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
