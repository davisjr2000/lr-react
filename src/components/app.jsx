import React from 'react';

import Landing from './landing';
import EpisodeList from '../containers/episode_list';

const App = () => {
  return (
    <div className="app">
      <Landing />
      <EpisodeList />
    </div>
  );
};

export default App;
