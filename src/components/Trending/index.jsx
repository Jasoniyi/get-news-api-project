import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NewsApi from "../api/NewsApi";

import G1 from "../../resources/images/g7.jpg";
class index extends Component {
  state = {
    isLoading: true,
    trending: []
  };

  componentDidMount = async () => {
    const KEY = "102a5ed4d74d4566977ed8d5a2e22e86";

    const responce = await NewsApi.get("/v2/top-headlines", {
      params: {
        country: "ng",
        pageSize: 4,
        category: "general",
        apiKey: KEY
      }
    });

    console.log(responce.data.articles);
    this.setState({
      isLoading: false,
      trending: responce.data.articles
    });
  };

  render() {
    return (
      <div className="trending-wrapper">
        <MDBContainer>
          <h5>Trending today</h5>
          {!this.state.isLoading ? (
            <MDBRow>
              {this.state.trending.map((news, i) => (
                <MDBCol md="3" key={i}>
                  <img
                    src={news.urlToImage}
                    className="img-responsive trends"
                    alt={news.source.name}
                  />
                  <div className="trending-title">{news.title}</div>
                </MDBCol>
              ))}
            </MDBRow>
          ) : (
            <div className="spinner-border text-success spin" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </MDBContainer>
      </div>
    );
  }
}

export default index;
