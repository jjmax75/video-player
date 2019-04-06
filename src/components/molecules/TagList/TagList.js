import React from 'react';

import uuid from 'uuid/v4';

const TagList = props => {
	const renderTagList = tags =>
		tags.map(tag => (
			<option key={uuid()} value={tag} onClick={() => props.setTag(tag)}>
				{tag}
			</option>
		));

	return <select multiple>{renderTagList(props.tags)}</select>;
};

export default TagList;
