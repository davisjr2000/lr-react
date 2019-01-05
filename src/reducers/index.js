import { combineReducers } from 'redux';
import EpisodesReducer from './episodes_reducer';
import SelectedEpisodeReducer from './selected_episode_reducer';

const rootReducer = combineReducers({
  episodes: EpisodesReducer,
  selectedEpisode: SelectedEpisodeReducer
});

export default rootReducer;
