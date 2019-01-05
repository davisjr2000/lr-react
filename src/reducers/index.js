import { combineReducers } from 'redux';
import EpisodesReducer from './episodes_reducer';

const rootReducer = combineReducers({
  episodes: EpisodesReducer,
});

export default rootReducer;
