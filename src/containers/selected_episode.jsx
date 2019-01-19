import React from 'react';
import { connect } from 'react-redux';

const SelectedEpisode = (props) => {
  return(
    <div className="selected-episode-container">
      <div id="player"></div>
      <div className="selected-episode-info">
      <h1>{props.selectedEpisode.title}</h1>
      <h3><em>{props.selectedEpisode.descripton}</em></h3>
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
