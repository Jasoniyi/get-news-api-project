import React, { Component } from "react";
import NewsApi from "../api/NewsApi";

class RightNav extends Component {
  state = {
    isLoading: true,
    isLatest: []
  };

  componentDidMount = async () => {
    const KEY = "102a5ed4d74d4566977ed8d5a2e22e86";

    const responce = await NewsApi.get("/v2/sources", {
      params: {
        apiKey: KEY,
        language: "en",
        pageSize: 2
      }
    });

    console.log("latest", responce.data.sources);
    this.setState({
      isLoading: false,
      isLatest: responce.data.sources
    });
  };

  render() {
    return (
      <div>
        <div className="rightNav-title">
          <h5>Latest News</h5>
          {!this.state.isLoading ? (
            <ul>
              {this.state.isLatest.map((news, i) => (
                <a href={news.url}>
                  {" "}
                  <li key={i}>{news.description}</li>
                </a>
              ))}
            </ul>
          ) : (
            <div className="spinner-border text-success spin" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RightNav;
