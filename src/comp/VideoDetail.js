import React, { useContext } from "react";
import { ContextBase } from "./ContextProvider";
import styled from "styled-components";

const VideoDetail = () => {
  const { state } = useContext(ContextBase);
  if (!state.selectedVideo) {
    return <div>Loading.....</div>;
  } else {
    const vSrc = `https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`;

    return (
      <Div>
        <div className="container">
          <iframe
            title="Video Player"
            frameBorder="0"
            width="100%"
            height="100%"
            src={vSrc}
          />
        </div>
        <div className="container">
          <h5>{state.selectedVideo.snippet.title}</h5>
          <h6>
            Channel: <p>{state.selectedVideo.snippet.channelTitle}</p>
          </h6>
          <p>{state.selectedVideo.snippet.description}</p>
        </div>
      </Div>
    );
  }
};
const Div = styled.div`
  height: 450px;
  .container {
    height: 70%;
    margin: 10px auto;
  }
`;
export default VideoDetail;
