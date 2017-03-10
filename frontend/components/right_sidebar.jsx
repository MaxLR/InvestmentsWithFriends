import React from 'react';

const RightSidebar = () => {
  return(
    <div className="right-sidebar-wrapper">
      <div className="right-sidebar">
        <div className="sponsored">
          <div className="sidebar-title">SPONSORED</div>
          <div className="sidebar-section">
            <a href="https://github.com/MaxLR/InvestmentsWithFriends">
              <img className="sponsored-photo"
              src='https://s3.amazonaws.com/investments-with-friends-pro/github.jpg'/>
            </a>
            <a className="sponsored-link"
              href="https://github.com/MaxLR/InvestmentsWithFriends">
              Project Github
            </a>
            <div className="sponsored-description">
              Take a look at the source code and documentation for this app!
            </div>
          </div>
          <div className="sidebar-section">
            <a href="https://www.linkedin.com/in/MaxLR">
            <img className="sponsored-photo"
              src='https://s3.amazonaws.com/investments-with-friends-pro/linkedin.jpg'/>
            </a>
            <a className="sponsored-link"
              href="https://www.linkedin.com/in/MaxLR">LinkedIn
            </a>
            <div className="sponsored-description">Find me on linkedin!</div>
          </div>
        </div>
        <div className="build-description">
          <div className="used-libraries">
            Built with: React • Ruby • Rails • AWS • CSS • HTML
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
