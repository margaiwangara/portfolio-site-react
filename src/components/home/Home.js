import React from "react";

const Home = props => {
  return (
    <div className="home">
      <div className="center">
        <div className="top">
          {/* <!--       <img src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12321379_1286078384741756_4791344662299519083_n.jpg?_nc_cat=100&_nc_ht=scontent-frx5-1.xx&oh=909c296ecf6f631ba02d70f7a435f9a0&oe=5CDBA5E0" alt="sample-image"> --> */}
        </div>
        <div className="bottom">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            temporibus architecto quibusdam numquam blanditiis sapiente error
            corporis, alias eum quo dicta sed, eligendi dolores officia. Nisi
            cupiditate inventore eaque nemo, nam laudantium accusamus laboriosam
            esse possimus vero ea culpa? Itaque sint accusantium assumenda
            dolorum praesentium vitae facere adipisci, illo ea.
          </p>
          <span>
            {/* <a href="#" className="btn btn-secondary">
              view resume
            </a> */}
          </span>
        </div>
      </div>
      <div className="left">
        <a href="#" className="navbar-brand">
          <span />
        </a>
        <div className="center">
          <h6>hello,</h6>
          <h3>i'm margai</h3>
          <p>a freelance web developer</p>
          <a href="#" className="btn btn-primary">
            hire me
          </a>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/margai.wangara/"
                target="_blank"
                title="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/margaiwangara/"
                target="_blank"
                title="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/margai-wangara-344872108/"
                target="_blank"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/margaiwangara/"
                target="_blank"
                title="Github"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/wangara-margai/"
                target="_blank"
                title="Codepen"
              >
                <i className="fab fa-codepen" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
