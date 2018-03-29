import React from 'react';
// import PropTypes from 'prop-types';

import ReposList from '../../repos/components/ReposList';

const App = () => (
  <div>
    <header>
      <h1>Welcome to Roshi</h1>
    </header>

    <main>
      <section>Filters</section>
      <ReposList repos={[{ name: 'caca' }, { name: 'de vaca' }]} />
    </main>

    <footer>Made with love</footer>
  </div>
);

App.propTypes = {};

export default App;
