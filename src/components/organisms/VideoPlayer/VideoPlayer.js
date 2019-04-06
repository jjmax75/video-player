import React from 'react';

import * as s from './styles';

const VideoPlayer = props => (
	<s.Video controls>
		<source
			src={`${process.env.REACT_APP_VIDEO_LOCATION}${props.video}.mp4`}
			type="video/mp4"
		/>
	</s.Video>
);

export default VideoPlayer;
