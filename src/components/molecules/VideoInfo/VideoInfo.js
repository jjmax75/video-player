import React from 'react';

import uuid from 'uuid/v4';

const VideoInfo = props => {
	// todo - calculate this on load and store in redux
	const renderTags = tags => (
		<ul>
			{tags.map(tag => (
				<li key={uuid()}>{tag}</li>
			))}
		</ul>
	);

	// todo - calculate this on load and store in redux
	const renderTime = duration => {
		const minutes = Math.floor(duration / 60);
		const seconds = Math.floor(duration % 60);

		return `${minutes}:${seconds}`;
	};

	return (
		<div onClick={() => props.selectVideo(props.video.video_id)}>
			<h2>{props.video.title}</h2>
			<p>{props.video.description}</p>
			<span>Tags: {renderTags(props.video.tags)}</span>{' '}
			<span>Duration: {renderTime(props.video.duration)}</span>
		</div>
	);
};

export default VideoInfo;
