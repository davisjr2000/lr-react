import React from 'react';
import { connect } from 'react-redux';

const SelectedEpisode = (props) => {
  return(
    <div className="selected-episode-container">
      <div id="player"></div>
      <div className="selected-episode-info">
      <h3>{props.selectedEpisode.title}</h3>
      <h4>{props.selectedEpisode.descripton}</h4>
      </div>
    </div>
    );
};

function mapStateToProps(state){
  return {
    selectedEpisode: state.selectedEpisode
  };
}
export default connect(mapStateToProps)(SelectedEpisode);
