import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Header from "./Header";

export default () => (
	<Router>
		<>
			<Header />
			{/* Switch는 한번에 하나의 route만 render 하게 해준다. */}
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/show/:id" component={Detail} /> {/* show는 tv show */}
				{/* 일치하는 route 가 없다면(이상한 url로 들어갔을경우) home 으로 보내주는 기능 */}
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
