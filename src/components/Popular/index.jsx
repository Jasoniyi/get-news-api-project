import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NewsApi from "../api/NewsApi";

import RightNav from "./RightNav";

import G7 from "../../resources/images/g7.jpg";

class index extends Component {
  state = {
    isLoading: true,
    isPopular: []
  };

  componentDidMount = async () => {
    const KEY = "102a5ed4d74d4566977ed8d5a2e22e86";

    const responce = await NewsApi.get("/v2/everything", {
      params: {
        q: "general",
        language: "en",
        // sortBy: "popularity",
        // page: 50,
        apiKey: KEY
      }
    });

    console.log("popular", responce.data.articles);
    this.setState({
      isLoading: false,
      isPopular: responce.data.articles
    });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <h5 className="heading">Popular News</h5>
          <MDBRow>
            <MDBCol md="8" className="timeline">
              {!this.state.isLoading ? (
                <ul className="tweets">
                  {this.state.isPopular.map((news, i) => (
                    <li className="arrange" key={i}>
                      <img src={news.urlToImage} alt="avatar" />
                      <div className="info">
                        <strong>
                          {news.title}
                          <span>{news.author}</span>
                        </strong>
                        <p>{news.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="spinner-border text-success spin" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </MDBCol>
            <MDBCol md="4" className="rightnav-wrapper">
              <RightNav />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default index;
