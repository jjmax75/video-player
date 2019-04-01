import { connect } from "react-redux";
import { getVideoList } from "./App.actions";
import App from "./App";

const mapStateToProps = state => ({
	videos: state.appData.videos,
	tags: state.appData.tags
});

const mapDispatchToProps = dispatch => ({
	getVideoList: () => dispatch(getVideoList())
});

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;
