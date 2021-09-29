import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import SessionBar from "../components/SessionBar";
import { productsOperator } from "../operators/products";
import { withRouter } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/Loading";

import "./ProductDetailsPage.scss";
import NotFoundMessage from "../components/NotFoundMessage";
function ProductDetailsPage() {
	const { onLoadProduct } = useProductsOperator();
	const [result, setResults] = useState();
	const [isLoading, setIsLoading] = useState(true);
	console.log(result);
	useEffect(() => {
		async function loadProduct() {
			const result = await onLoadProduct();
			setResults(result);
			setIsLoading(false);
		}
		loadProduct();
	}, [onLoadProduct]);

	return (
		<section>
			<SessionBar />
			<div className="cnt-product-details-page">
				{isLoading ? (
					<Loading />
				) : result ? (
					<>
						<Breadcrumb categories={result.categories} />
						<ProductDetails product={result} />
					</>
				) : (
					<NotFoundMessage
						message="No hemos encontrado ningun producto que coincida con ese nombre. Por favor vuelva al inicio y pruebe buscarlo nuevamente."
						isShowRedirectButton
					/>
				)}
			</div>
		</section>
	);
}

function useProductsOperator() {
	const operator = productsOperator;
	return {
		onLoadProduct: operator.loadProduct,
	};
}

export default withRouter(ProductDetailsPage);
