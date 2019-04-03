import ReactOnRails from 'react-on-rails';

import SimsApp from '../bundles/HelloWorld/startup/SimsApp';
import Dashboard from '../bundles/HelloWorld/components/Dashboard';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  SimsApp,
  Dashboard
});
