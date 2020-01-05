import React from "react";
import Header from "./header";
import Trending from "./Trending";
import Popular from "./Popular";
const index = () => {
  return (
    <div>
      <Header />
      <Trending />
      <Popular />
    </div>
  );
};

export default index;
