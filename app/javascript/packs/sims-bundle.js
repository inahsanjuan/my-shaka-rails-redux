import ReactOnRails from 'react-on-rails';

import SimsApp from '../bundles/HelloWorld/startup/SimsApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  SimsApp,
});
