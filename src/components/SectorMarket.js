
import React from 'react';
import PropTypes from 'prop-types';

import CssLoader from 'templates/components/CssLoader';

import 'styles/sectormarket.scss';
//import loadingImg from 'styles/loading.gif';

const SectorMarket = ({data, lastUpdated, loading})=>
{
	//console.log(data);
		
	//const fields = ['t', 'e', 'l_cur', 'hi', 'lo', 'name']
	
	let renderSector = (item)=>
	{	
		//console.log(item);
		if(!item)
			return item;
			
		item.cp += '';
				
		let chngClass = item.cp.indexOf('-') > -1 ? 'col-md-6 negative' : 'col-md-6 positive';		
		
		return <tr key={ item.name } >	
			<td>{ item.name }</td>
			<td className={ chngClass } >{ item.l } ( { item.cp + '%' } )</td>
		</tr>
	};
	
	return <div className="section market-card sector">
		<h4>Indian Sectors
			<button className="btn btn-default pull-right sector-refresh">
			<i className="glyphicon glyphicon-refresh" /></button>
		</h4>
		<p className="updated-on">
			<span className="pull-right"> Last Updated on: {lastUpdated} </span>
		</p>
		<hr />
		{
			/*data ? <div className="">
				<table className="table table-condensed">
					<tbody>
						{ data.map(renderSector) }
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
						{ data.map(renderSector) }
					</tbody>
				</table> : <div className="" > :( Unable to load</div> )
		}		

	</div>
}


SectorMarket.propTypes = {
	data: PropTypes.array,
	lastUpdated: PropTypes.string.isRequired,
}

export default SectorMarket;