
import React from 'react';
import PropTypes from 'prop-types';

import CssLoader from 'templates/components/CssLoader';

import 'styles/worldmarket.scss';
//import loadingImg from 'styles/loading.gif';

const WorldMarket = ({data, lastUpdated, loading})=>
{
	//console.log(data ? Object.keys(data) : null)
	
	let renderRow = (key, i)=>
	{
		return <tr key={key} >
			<td>{key}</td>
			<td>{data[key]}</td>
		</tr>
	};
	
	return <div className="section market-card world">
		<h4>
			World 
			<button className="btn btn-default pull-right world-refresh"><i className="glyphicon glyphicon-refresh" /></button>
		</h4>
		<p className="updated-on">
			<span className="pull-right"> Last Updated on: {lastUpdated} </span>
		</p>
		<hr />
			
		{
			/*data ? <div className="table-responsive">
				<table className="table table-condensed">
					<tbody>
						{ Object.keys(data).map(renderRow) }
					</tbody>
				</table>
			</div>
				: <div className="loading-info">
				<CssLoader />
			</div>*/

			loading ? <div className="loading-info">
				<CssLoader />
			</div> : (data ? <table className="table table-condensed">
				<tbody>
					{ Object.keys(data).map(renderRow) }
				</tbody>
			</table> : <div className="" > :( Unable to load</div> )
		}
		
	</div>
}


WorldMarket.propTypes = {
	data: PropTypes.object,
	lastUpdated: PropTypes.string.isRequired,
}

export default WorldMarket;