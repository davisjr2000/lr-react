import React from 'react';

const Landing = () => {
  return (
    <div className="landing" style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0) 1%, rgba(0,0,0,1)), url('../assets/images/lr-gang.jpeg')`}}>
      <a href="#">
        <img src="../assets/images/lr-logo.jpeg" className="lr-logo"/>
      </a>
    </div>
  );
};

export default Landing;
