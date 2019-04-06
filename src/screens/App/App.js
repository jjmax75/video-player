import './App.css';

import React, { useEffect, useState } from 'react';

import { Filtering } from './../../components/organisms/Filtering';
import { VideoList } from './../../components/organisms/VideoList';

const App = props => {
  const [selectedTag, setTag] = useState();

  useEffect(() => {
    props.getVideoList();
  }, []);

  const filterVideos = (videos, tag) =>
    videos.filter(video => video.tags.includes(tag));

  return (
    <div className="main">
      <header className="main-header">Video List</header>
      <Filtering tags={props.tags} selectedTag={selectedTag} setTag={setTag} />
      <VideoList
        videos={
          selectedTag ? filterVideos(props.videos, selectedTag) : props.videos
        }
      />
      <main />
    </div>
  );
};

export default App;
