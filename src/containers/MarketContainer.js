
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _debounce from 'lodash/debounce';

export default class MarketContainer extends React.Component 
{
	/*constructor(props, context)
	{
		super(props, context);
		this.state = {
		}

	}*/
		
	componentDidMount()
	{
		//this._attachEventHandlers();
		//this._getData();		
	}
	
	componentDidUpdate()
	{
	}
	
	componentWillUnmount()
	{
		$(ReactDOM.findDOMNode(this)).off();
	}
	
	_getData()
	{	
		
	}//()
			
	_getSectorData(forceRefresh)
	{
		/*let dt = this.state.sector.lastUpdated, data=this.state.sector.data;

		this.setState({ 
			sector: { data: null, lastUpdated: '', processing: true }
		});

		MarketDataStore.getSectorData(forceRefresh)
		.then( (response)=>
		{			
			if(response.data)
			{				
				dt = response.lastUpdated;

				this.setState({ 
					sector: { 
						data: response.data.crawlResponse, 
						lastUpdated: dt.getHours() + ':' + dt.getMinutes(),
						processing: false
					}
				});

			}
				
			else
			{
				this.setState({ 
					sector: { 
						data: data, 
						lastUpdated: dt,
						processing: false
					}
				});
			}
				
			return null;
		} )
		.catch( ()=>
		{
			this.setState({ 
				sector: { 
					data: data, 
					lastUpdated: dt,
					processing: false
				}
			});
		} )*/

	}//()
	
	_attachEventHandlers()
	{
		let $DOMNode = $(ReactDOM.findDOMNode(this));		
								
		$DOMNode.on('click', '.sector-refresh', _debounce( (e)=> {
			this._btnSectorRefreshClick(e);
		}, 1300, { 'leading': true }) );

	}
	
	_btnSectorRefreshClick(e)
	{		
		if(this.state.sector.processing)
			return;

		//foll setstate unnecc.

		/*this.setState({
			sector: {
				data: this.state.sector.data, 
				lastUpdated: this.state.sector.lastUpdated,
				processing: true
			}
		});*/

		this._getSectorData(true);

	}//()
	
	_btnWorldRefreshClick(e)
	{
		if(this.state.world.processing)
			return;

		this.setState({
			world: {
				data: this.state.world.data, 
				lastUpdated: this.state.world.lastUpdated,
				processing: true
			}
		});

		this._getWorldData(true);
		
	}//()
	
	_btnIndiaRefreshClick(e)
	{		
		if(this.state.india.processing)
			return;

		this.setState({
			india: {
				data: this.state.india.data, 
				lastUpdated: this.state.india.lastUpdated,
				processing: true
			}
		});

		this._getIndiaData(true);
		
	}//()
		
	render() 
	{
		return <div className="market">
			<h2>Market</h2>
			<hr />			
		</div>
	}
	
}
