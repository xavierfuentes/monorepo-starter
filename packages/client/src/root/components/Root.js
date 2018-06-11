import React from 'react';
// import PropTypes from 'prop-types';

import { Button } from 'ui';

const App = () => (
  <div>
    <header>
      <h1>Welcome to a monorepo</h1>

      <Button
        onClick={() => {
          console.log('clicked!');
        }}
      >
        Click me!
      </Button>
    </header>
  </div>
);

App.propTypes = {};

export default App;
