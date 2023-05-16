import { useState, useEffect } from "react";
import axios from "axios";
import Video from "./Video";
import "./Videos.css"

function Videos() {
  const API_KEY = "8d4304d920msh07b847339a32d6bp1578a8jsn54f2e70a06c5";

  const [videos, setVideos] = useState([]);

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",

    params: {
      relatedToVideoId: "kqtD5dpn9C8",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },

    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="App">
      {videos ? (
        videos.map((video) => (
          <Video
            key={video.id.videoId}
            id={video.id.videoId}
            name={video.snippet.title}
            imgSrc={video.snippet.thumbnails.medium}
            channelTitle={video.snippet.channelTitle}
            publishTime={video.snippet.publishTime}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Videos;