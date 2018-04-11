
import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Loadable from 'components/Loadable';
import consts from 'utils/constants';

import 'styles/App.css';


class App extends Component
{
	render() 
	{
		return (
		<div className="App container">
		
			<header className="App-header">		
				<h1 className="App-title">Welcome to CRA</h1>
				<p>
					<NavLink to={consts.paths[0].path} activeClassName="active" exact> { consts.paths[0].name } </NavLink>
					<NavLink to={consts.paths[1].path} activeClassName="active" exact> { consts.paths[1].name } </NavLink>
					<NavLink to={consts.paths[2].path} activeClassName="active" exact> { consts.paths[2].name } </NavLink>
				</p>
			</header>

			<main>
				<Switch>
					<Route exact path={consts.paths[0].path} render={						
						(props)=>
						{
							const Home = Loadable({
								loader: () => import('containers/HomeContainer')
							})
		
							return <Home />
						}
					} />
					<Route path={consts.paths[1].path} render={						
						(props)=>
						{
							const Market = Loadable({
								loader: () => import('containers/MarketContainer')
							})
		
							return <Market />
						}
					} />
					<Route path={consts.paths[2].path} render={
						(props)=>
						{
							const Schedule = Loadable({
								loader: () => import('containers/ScheduleContainer')
							})
		
							return <Schedule />
						}
					} />
				</Switch>				
			</main>
		
		</div>
		);
	}
}

export default App;
