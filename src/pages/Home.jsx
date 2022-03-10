import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home ">
        <div>
          <input
            type="text"
            className="input-search"
          />
        </div>
        <div className="main">
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>

      </div>
    );
  }
}

export default Home;
