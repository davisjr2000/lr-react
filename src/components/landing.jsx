import React from 'react';

const Landing = () => {
  return (
    <div className="landing" style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0) 1%, rgba(0,0,0,1)), url('https://res.cloudinary.com/dppztxeda/image/upload/v1547867819/lr-gang.jpg')`}}>
      <a href="#">
        <img src="https://res.cloudinary.com/dppztxeda/image/upload/v1547867811/lr-logo.jpg" className="lr-logo"/>
      </a>
    </div>
  );
};

export default Landing;
