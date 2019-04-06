import { SET_VIDEO_LIST } from './App.constants';

export const getVideoList = () => {
	const videoList = `${window.location.origin}${
		process.env.REACT_APP_VIDEO_LIST
	}`;
	return dispatch => {
		return fetch(videoList)
			.then(response => response.json())
			.then(json => dispatch(setVideoList(json)))
			.catch(error => console.log('get video list failed:', error));
	};
};

const setVideoList = videoList => ({
	type: SET_VIDEO_LIST,
	payload: videoList,
});
