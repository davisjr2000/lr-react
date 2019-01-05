import React from 'react';
import { connect } from 'react-redux';

const SelectedEpisode = (props) => {
  return(
    <div>
    <div id="player"></div>
    <h3>{props.selectedEpisode.title}</h3>
    <h4>{props.selectedEpisode.descripton}</h4>
    </div>
    );
};

function mapStateToProps(state){
  return {
    selectedEpisode: state.selectedEpisode
  };
}
export default connect(mapStateToProps)(SelectedEpisode);
