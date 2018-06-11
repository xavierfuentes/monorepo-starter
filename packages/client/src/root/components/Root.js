import React from 'react';
// import PropTypes from 'prop-types';

import { Button } from '@xlabs/monorepo-ui';

const Root = () => (
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

Root.propTypes = {};

export default Root;
