import React from "react";

const PortfolioList = ({ title, description, language, url }) => {
  return (
    <div className="card">
      <div className="logo">
        <span className="logo-text">{title.charAt(0)}</span>
      </div>
      <div className="card-body">
        <h4>
          <a href={url} className="project-name" target="_blank">
            {title}
          </a>
        </h4>
        <p className="project-description">{description}</p>
        <h6>
          <i className="fas fa-code" /> {language}
        </h6>
      </div>
    </div>
  );
};

export default PortfolioList;
