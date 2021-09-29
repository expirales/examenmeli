import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import { productsOperator } from "../operators/products";
import { withRouter } from "react-router-dom";
import SessionBar from "../components/SessionBar";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import NotFoundMessage from "../components/NotFoundMessage";

import "./ProductsListPage.scss";

function ProductsListPage() {
	const { onSearchProducts } = useProductsOperator();
	const [results, setResults] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadProducts() {
			const results = await onSearchProducts();
			setResults(results);
			setIsLoading(false);
		}
		loadProducts();
	}, [onSearchProducts]);

	return (
		<section>
			<SessionBar />
			<div className="cnt-products-list-page">
				{isLoading ? (
					<Loading />
				) : results ? (
					<>
						<Breadcrumb categories={results.categories} />
						<ProductsList items={results.products} />
					</>
				) : (
					<NotFoundMessage
						title="Busqueda finalizada"
						message="No hemos encontrados resultados del producto buscado."
					/>
				)}
			</div>
		</section>
	);
}

function useProductsOperator() {
	const operator = productsOperator;
	return {
		onSearchProducts: operator.loadProducts,
	};
}

export default withRouter(ProductsListPage);
