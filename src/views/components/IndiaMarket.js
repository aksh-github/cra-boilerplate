
import React from 'react';

const IndiaMarket = ({data, lastUpdated, loading})=>
{				
	return <div className="section india-card">
		<h4>India
			<button className="btn btn-default pull-right india-refresh"><i className="glyphicon glyphicon-refresh" /></button>
		</h4>

		<h2>BSE: {data.bse} | NSE: {data.nse} </h2>
		<small>{lastUpdated.toString()}</small>
	</div>
}

export default IndiaMarket;