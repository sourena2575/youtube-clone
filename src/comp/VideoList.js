import React, { useContext } from "react";
import styled from "styled-components";
import { ContextBase } from "./ContextProvider";

const VideoList = () => {
  const { state } = useContext(ContextBase);
  console.log(state);

  if (!state.selectedVideo) {
    return <Div>VideoList</Div>;
  } else {
    return (
      <Div>
        {state.video.map((item, index) => {
          return (
            <div key={index} className="col-10 mx-auto">
              <iframe
                frameBorder="0"
                width="100%"
                height="80%"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
              />
              <div className="container">
                <p>{item.snippet.title}</p>
              </div>
            </div>
          );
        })}
      </Div>
    );
  }
};
const Div = styled.div`
  height: 350px;
  .container {
    height: 70%;
  }
`;

export default VideoList;
