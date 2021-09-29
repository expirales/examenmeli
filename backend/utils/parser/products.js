const { signFirm } = require("../helpers/signFirm");

/**
 * Function `parseProducts` receive the following parameters `products, isList`.
 * @param  {Array/Object} products isList param is true, we expect Array of products, otherwise we expect a simple Object.
 * @param  {Boolean}  isList.
 *
 * @description This function is in charge of parse the product date belongs to the meli api.
 * @return  {Object} of parse product.

 */
function parseProducts(products = [], isList = true) {
	const itemOrItemsList = isList
		? { items: products.map((product) => parseProduct(product)) }
		: { item: parseProduct(products) };

	return {
		author: signFirm,
		...itemOrItemsList,
	};
}

/**
 * Function `parseProduct` receive the following parameters `product`.
 * @param  {Object} product
 *
 * @description This function is in charge of parse the product data, belongs to the meli api.
 *              We can re use this method if is split from the `parseProducts` parser.
 * @return  {Object} Parse data from individual product.

 */
function parseProduct({
	id,
	title,
	thumbnail,
	condition,
	shipping: { free_shipping },
	sold_quantity,
	price,
	currency_id,
}) {
	return {
		id,
		title,
		picture: thumbnail,
		condition,
		isFreeShipping: free_shipping,
		price: {
			amount: price,
			decimals: Number(((price - Math.floor(price)) * 100).toFixed(0)),
			currency: currency_id,
		},
		soldQuantity: sold_quantity,
	};
}

module.exports = {
	parseProducts,
};
