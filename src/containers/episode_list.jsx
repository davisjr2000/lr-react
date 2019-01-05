import React, { Component } from 'react';
import { connect } from 'react-redux';

import Episode from '../containers/episode';

class EpisodeList extends Component {
  renderList() {
    return this.props.episodes.map((episode) => {
      return (
        <Episode key={episode.id} episode={episode}/>
        );
    });
  };

  render() {
    return (
      <ul className="list-group episodes">
        {this.renderList()}
      </ul>
      );
  }
};

function mapStateToProps(state) {
   return {
    episodes: state.episodes
   };
}

export default connect(mapStateToProps)(EpisodeList);
