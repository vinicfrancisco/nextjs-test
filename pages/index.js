import React from 'react';
import 'isomorphic-fetch';

import './style.css';

const Main = ({ repositories }) => (
  <div className="container">
    <h1>Meus repositórios</h1>

    <div>
      {repositories.map(repo => (
        <div key={repo.id} className="repo">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <span>Owner: {repo.owner.login}</span>
        </div>
      ))}
    </div>
  </div>
);

Main.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/vinicfrancisco/repos');
  const repositories = await response.json();

  return { repositories };
};

export default Main;
