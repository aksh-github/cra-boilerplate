
import React from 'react';
import PropTypes from 'prop-types';

import CssLoader from 'templates/components/CssLoader';

import 'styles/indiamarket.scss';
//import loadingImg from 'styles/loading.gif';

const IndiaMarket = ({data, lastUpdated, loading})=>
{
	//console.log(data);
	let I=0;
	
	//const fields = ['t', 'e', 'l_cur', 'hi', 'lo', 'hi52', 'lo52', 'name']

	let roundToTwo = (num)=>
	{
		return parseFloat(num+'').toFixed(2);
	}
	
	let renderIndex = (item)=>
	{		
		if(!item)
			return item;

		item.c += '';
		//let chngClass = item.c.indexOf('-') > -1 ? 'negative' : 'positive';

		let chngClass = (item.l < item.p) ? 'negative' : 'positive';
		
		return <div key={ item.id } className="">
			<h3>
				{ item.name } : <span className={ chngClass }> { item.l } ( { roundToTwo(item.l - item.p) }, { item.c + '%' }) </span>
			</h3>
			<p className="low-hi"> Days Low: { item.lo } | High: { item.hi }</p>
			<p className="low-hi"> 52 Week Low: { item.lo52 } | High: { item.hi52 }</p>
		</div>

		//return <div>akshay</div>;
	};
	
	return <div className="section market-card india">
		<h4>India
			<button className="btn btn-default pull-right india-refresh"><i className="glyphicon glyphicon-refresh" /></button>
		</h4>		
		<p className="updated-on">
			<span className="pull-right"> Last Updated on: {lastUpdated} </span>
		</p>
		<hr />
		{
			loading ? <div className="loading-info">
				<CssLoader />
			</div> : (data && data.length ? data.map(renderIndex) : <div className="" > :( Unable to load</div> )						
		}

		

	</div>
}


IndiaMarket.propTypes = {
	data: PropTypes.array,
	lastUpdated: PropTypes.string.isRequired,
}

export default IndiaMarket;