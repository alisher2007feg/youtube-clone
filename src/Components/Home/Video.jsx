import React from "react";
import './Video.css'

function Video(props) {
  const { imgSrc, name, id, channelTitle, publishTime } = props;

  const url = `https://www.youtube.com/watch?v=${id}`;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="videoBox">
        <img
          className="videoBoxImg"
          src={imgSrc.url}
          alt="img"
          width={imgSrc.width}
          height={imgSrc.height}
        />
        <div className="videoBottom">
          <h4 className="videoBottom_h4">{name}</h4>
          <h5 className="videoBottom_h5">{channelTitle}</h5>
          <h6 className="videoBottom_h6">{publishTime}</h6>
        </div>
      </div>
    </a>
  );
}

export default Video;