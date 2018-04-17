
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _debounce from 'lodash/debounce';

export default class MarketContainer extends React.Component 
{
	constructor(props, context)
	{
		super(props, context);
		this.state = {
		}

	}
		
	componentDidMount()
	{
		this._attachEventHandlers();
		//this._getData();		
	}
	
	componentDidUpdate()
	{
		this._attachEventHandlers();
	}
	
	componentWillUnmount()
	{
		$(ReactDOM.findDOMNode(this)).off();
	}
	
	_getData()
	{	
		
	}//()
		
	
	_attachEventHandlers()
	{
		let $DOMNode = $(ReactDOM.findDOMNode(this));		
								
		$DOMNode.on('click', '.sector-refresh', _debounce( (e)=> {
			this._btnSectorRefreshClick(e);
		}, 1300, { 'leading': true }) );

	}
			
	render() 
	{
		return <div className="market">
			<h2>Market</h2>
			<hr />			
		</div>
	}
	
}
