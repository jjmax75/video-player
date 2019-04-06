import React from 'react';

import { SelectedTag, TagList } from './../../molecules';

const Tags = props => {
	return (
		<React.Fragment>
			<SelectedTag tag={props.selectedTag} />
			<TagList tags={props.tagList} setTag={props.setTag} />
		</React.Fragment>
	);
};

export default Tags;
