import React, { Component } from "react";
import PortfolioList from "./PortfolioList";
import axios from "axios";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      count: 6,
      frequency: 6
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.requestHandler = this.requestHandler.bind(this);
  }

  componentDidMount() {
    this.requestHandler();
  }

  clickHandler(e) {
    e.preventDefault();

    const { count, frequency } = this.state;

    this.setState({ count: count + frequency });

    this.requestHandler();
  }

  requestHandler() {
    const { count } = this.state;
    axios
      .get(`/api/portfolio?count=${count}`)
      .then(resp => this.setState({ repos: resp.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { repos } = this.state;
    const reposList = repos.map(repo => (
      <PortfolioList
        key={repo.id}
        title={repo.name}
        description={repo.description}
        language={repo.language}
        url={repo.html_url}
      />
    ));
    return (
      <div className="portfolio">
        <div className="portfolio-inner">
          <h5>the selected of</h5>
          <h3>portfolİo</h3>
          <div className="works">
            <div className="work">{reposList}</div>
            <span>
              <a
                href="#loadmore"
                className="btn btn-primary"
                onClick={this.clickHandler}
              >
                Load More...
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
