import React from "react";
import styled from "styled-components";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
const Base = () => {
  return (
    <Div>
      <div className="justify-content-center">
        <div className="col-sm-12 col-lg-10 mx-auto">
          <div className="row">
            <div className="col-sm-12">
              <SearchBar />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <VideoDetail />
            </div>
            <div className="col-4">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin: 100px 10px;
`;
export default Base;
