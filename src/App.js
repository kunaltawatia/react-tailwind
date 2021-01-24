import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import Page from "./screens/Page";

import "./App.scss";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/:name" component={Page} />
			</Switch>
		</Router>
	);
}
