import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsListPage from "./pages/ProductsListPage";
import SearchProductsPage from "./pages/SearchProductsPage";
import { historyManager } from "./utils/history";

export default function App() {
	return (
		<main role="main" id="root-app">
			<Router history={historyManager}>
				<Switch>
					<Route exact path="/" component={SearchProductsPage} />
					<Route exact path="/items" component={ProductsListPage} />
					<Route exact path="/items/:id" component={ProductDetailsPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</main>
	);
}
