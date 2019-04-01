import { SET_VIDEO_LIST } from "./App.constants";

const initialState = {
	tags: [],
	videos: []
};

const appData = (state = initialState, action) => {
	switch (action.type) {
		case SET_VIDEO_LIST:
			return action.payload;
		default:
			return state;
	}
};

export default appData;
