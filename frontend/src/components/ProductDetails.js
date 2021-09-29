import React from "react";
import PropTypes from "prop-types";
import { PRODUCT_CONDITION_LABELS } from "../utils/parser";

import "./ProductDetails.scss";

export default function ProductDetails({ product }) {
	const {
		title,
		description,
		picture,
		price,
		condition,
		soldQuantity,
	} = product;

	return (
		<div className="cnt-product-details">
			<div className="product-details">
				<img src={picture} className="product-img" alt="product" />
				<div className="product-info">
					<span className="tx-condition">
						{condition} - {soldQuantity} vendidos
					</span>
					<h5 className="tx-name">{title}</h5>
					<h5 className="tx-price">$ {price}</h5>
					<button className="btn-buy">Comprar</button>
				</div>
			</div>
			<div>
				<h4 className="tt-description">Descripcion del producto</h4>
				<p className="tx-description">{description}</p>
			</div>
		</div>
	);
}

ProductDetails.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		picture: PropTypes.string,
		price: PropTypes.string,
		condition: PropTypes.oneOf(Object.values(PRODUCT_CONDITION_LABELS)),
		soldQuantity: PropTypes.number,
	}),
};
