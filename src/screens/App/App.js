import './App.css';

import React, { useEffect, useState } from 'react';

import {
  Filtering,
  Modal,
  VideoList,
  VideoPlayer,
} from './../../components/organisms';

const App = props => {
  const [selectedTag, setTag] = useState();
  const [selectedVideo, setVideo] = useState();

  useEffect(() => {
    props.getVideoList();
  }, []);

  const filterVideos = (videos, tag) =>
    videos.filter(video => video.tags.includes(tag));

  return (
    <div className="main">
      <header className="main-header">Video List</header>

      <main>
        <Filtering
          tags={props.tags}
          selectedTag={selectedTag}
          setTag={setTag}
        />
        <VideoList
          videos={
            selectedTag ? filterVideos(props.videos, selectedTag) : props.videos
          }
          selectVideo={setVideo}
        />
        {selectedVideo && (
          <Modal closeModal={() => setVideo(null)}>
            <VideoPlayer video={selectedVideo} />
          </Modal>
        )}
      </main>
    </div>
  );
};

export default App;
