import React from 'react';

import * as s from './styles';

import uuid from 'uuid/v4';

const VideoInfo = props => {
	// todo - calculate this on load and store in redux
	const renderTags = tags => (
		<s.Ul>
			{tags.map(tag => (
				<s.Li key={uuid()}>{tag}</s.Li>
			))}
		</s.Ul>
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
