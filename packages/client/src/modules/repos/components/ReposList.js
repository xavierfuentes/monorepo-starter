import React from 'react';
import PropTypes from 'prop-types';

const ReposList = ({ repos = [] }) => {
  const renderRepos = repos => repos.map(({ name }) => <div>{name}</div>);
  return <div>{renderRepos(repos)}</div>;
};

ReposList.propTypes = {};

export default ReposList;
