
import React from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';
import $ from 'jquery';

//import staticApp from 'models/Application';

//import 'styles/header.scss';

export default class Header extends React.Component
{	
	constructor(props, context)
	{
		super(props, context);
		this.state = {user: null};
	}
		
	componentDidMount()
	{				
		this._attachEventHandlers();		
	}
	
	componentDidUpdate()
	{		
	}
	
	componentWillUnmount()
	{
		$(ReactDOM.findDOMNode(this)).off();		
	}
	
	_attachEventHandlers()
	{
		let $DOMNode = $(ReactDOM.findDOMNode(this))
				
		$DOMNode.on('click', '.logout', (e)=> { this._btnClick(e); } );
		
	}

	_btnClick(e)
	{
		console.log('logout clicked');		
	}
	
	render()
	{		
		//let user = this.state.user;
		const consts = this.props.consts;
						
		let renderNavbar = ()=>
		{
			const brandStyle = {    
				'color': '#fff',
				'fontSize': 'larger'
			};

			return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" style={ brandStyle }> CRA </a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to={consts.paths[0].path} exact> { consts.paths[0].name } </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={consts.paths[1].path} exact> { consts.paths[1].name } </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={consts.paths[2].path} exact> { consts.paths[2].name } </NavLink>
						</li>
					</ul>
				</div>
			</nav>);
		};
		
		return (<div>
			{				
				renderNavbar()
			}
		</div>);
	}
}
