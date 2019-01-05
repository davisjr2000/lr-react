import React from 'react';

import Landing from './landing';
import EpisodeList from '../containers/episode_list';
import SelectedEpisode from '../containers/selected_episode';

const App = () => {
  return (
    <div className="app">
      <Landing />
      <div className="d-flex">
        <EpisodeList />
        <SelectedEpisode />
      </div>
    </div>
  );
};

export default App;
