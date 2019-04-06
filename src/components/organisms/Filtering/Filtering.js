import React from 'react';

import { Tags } from './../Tags';
import { Duration } from './../../molecules';

const Filtering = props => {
	return (
		<React.Fragment>
			<Tags
				tagList={props.tags}
				selectedTag={props.selectedTag}
				setTag={props.setTag}
			/>
			<Duration />
		</React.Fragment>
	);
};

export default Filtering;
