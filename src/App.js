
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loadable from 'views/common/Loadable';
import Header from 'views/common/Header';

import consts from 'utils/constants';

import 'styles/App.css';

class App extends Component
{

	render() 
	{
		//const pageContainerPath = 'views/containers/';

		return (
		<div className="App container">
		
			<Header consts={consts} />
			
			<main>
				<Switch>
					<Route exact path={consts.paths[0].path} render={						
						(props)=>
						{
							const Home = Loadable({
								loader: () => import('views/containers/HomeContainer')
							})
		
							return <Home />
						}
					} />
					<Route path={consts.paths[1].path} render={						
						(props)=>
						{
							const Market = Loadable({
								loader: () => import('views/containers/MarketContainer')
							})
		
							return <Market />
						}
					} />
					<Route path={consts.paths[2].path} render={
						(props)=>
						{
							const Schedule = Loadable({
								loader: () => import('views/containers/ScheduleContainer')
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
