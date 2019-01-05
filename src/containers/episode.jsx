import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectEpisode from '../actions/index';

const Episode = (props) => {
  return (
    <li
      className="list-group-item" onClick={() => props.selectEpisode(props.episode)}
    >{props.episode.number}. {props.episode.title} </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEpisode}, dispatch);
}
export default connect(null, mapDispatchToProps)(Episode);
