import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PAGES } from "../utils/pages";
import { getStaticAssets } from "../utils/staticAssets";

import "./ProductsList.scss";

const MAX_PRODUCT_ITEMS = 4;

const shippingIcon = getStaticAssets("shipping.png");

export default function ProductsList({ items }) {
	const products = items.slice(0, MAX_PRODUCT_ITEMS);
	return (
		<ul className="cnt-products-list">
			{products.map(({ id, title, picture, isFreeShipping, price }) => {
				return (
					<li key={id}>
						<div className="cnt-product">
							<Link to={PAGES.product(id)}>
								<img src={picture} className="img-product" alt="img-product" />
							</Link>
							<div className="cnt-product-info">
								<h1 className="tx-price">
									$ {price}
									{isFreeShipping && (
										<img
											src={shippingIcon}
											className="img-shipping"
											alt="shipping"
										/>
									)}
								</h1>
								{/* FIXME: add to the bk service the right field  */}
								<h6 className="tx-zone">Capital Federal</h6>
								<Link to={PAGES.product(id)}>
									<h3 className="tx-name">{title}</h3>
								</Link>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

ProductsList.prototypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			picture: PropTypes.string,
		})
	),
};
