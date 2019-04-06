import React from 'react';

const VideoList = props =>
	props.videos.map(video => (
		<div>
			<h2>{video.title}</h2>
			<span>{video.description}</span>
		</div>
	));

export default VideoList;
