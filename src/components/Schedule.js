
import React from 'react';
import PropTypes from 'prop-types';

import CssLoader from 'templates/components/CssLoader';

const Schedule = ({data, loading})=>
{

	let renderSchedule = (item)=>
	{		
		if(!item)
			return item;
		
		return <div key={ item.id } className="">
			{ item.desc }
		</div>
	};

	//console.log(loading);

	return <div className="section market-card india">
	<h4> Schedule for Today	</h4>
	
	{
		loading ? <div className="loading-info">
		<CssLoader />
		</div> : (data && data.length ? data.map(renderSchedule) : <div className="" > :( Unable to load</div>)			
	}

	</div>
}

Schedule.propTypes = {
	data: PropTypes.array	
};

export default Schedule;