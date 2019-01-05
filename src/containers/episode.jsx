import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Episode = (props) => {
  return (
    <li
      className="list-group-item"
    >{props.episode.title}</li>
  );
};

export default Episode;
