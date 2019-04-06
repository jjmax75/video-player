import React from 'react';

import { VideoInfo } from './../../molecules';

const VideoList = props =>
	props.videos.map(video => (
		<VideoInfo
			key={video.video_id}
			video={video}
			selectVideo={props.selectVideo}
		/>
	));

export default VideoList;
