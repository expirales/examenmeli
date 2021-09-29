const fetch = require("isomorphic-fetch");
const { parseProducts } = require("../utils/parser/products");
const API_ENDPOINTS = require("./apiEndpoints");

/**
 * Function getProducts
 * @summary search in the Meli api the keyword that represent a product's name
 * @param {string} keyword
 */
async function getProducts(keyword) {
	const { path, ...others } = API_ENDPOINTS.products;

	const endpoint = {
		...others,
		path: path(keyword),
	};

	try {
		const requestProducts = await fetch(endpoint.path);
		const { results } = await requestProducts.json();

		if (!results.length) return parseProducts();

		// FIXME: i don't know if is the right way to access to this value (?)
		const categoryId = results.shift().category_id;
		const categories = await getCategories(categoryId);

		return {
			...parseProducts(results),
			categories,
		};
	} catch (e) {
		console.log(e);
	}
}

/**
 * Function getProductDetails
 * @summary search in the Meli api the productId of a product to retrieve more details.
 * @param {string} productId
 */
async function getProductDetails(productId) {
	const { path, ...others } = API_ENDPOINTS.productDetails;

	const endpoint = {
		...others,
		path: path(productId),
	};

	try {
		const requestProduct = await fetch(endpoint.path);
		const result = await requestProduct.json();

		if (result?.error) return parseProducts();

		const description = await getProductDescription(productId);
		const categories = await getCategories(result.category_id);

		// FIXME: review later
		const product = parseProducts(result, false);
		return {
			...product,
			item: {
				...product.item,
				description,
				categories,
			},
		};
	} catch (e) {
		console.log(e);
	}
}

/**
 * Function getCategories
 * @summary search in the Meli api the categories with categoryId.
 * @param {string} categoryId
 */
async function getCategories(categoryId) {
	const { path, ...others } = API_ENDPOINTS.categories;

	const endpoint = {
		...others,
		path: path(categoryId),
	};

	try {
		const requestCategories = await fetch(endpoint.path);
		const { path_from_root: categories } = await requestCategories.json();
		return categories;
	} catch (e) {
		console.log(e);
	}
}

/**
 * Function getProductDescription
 * @summary search in the Meli api the description text of a product.
 * @param {string} productId
 */
async function getProductDescription(productId) {
	const { path, ...others } = API_ENDPOINTS.productDescription;

	const endpoint = {
		...others,
		path: path(productId),
	};

	try {
		const requestDescription = await fetch(endpoint.path);
		const { plain_text } = await requestDescription.json();
		return plain_text;
	} catch (e) {
		console.log(e);
	}
}

module.exports = {
	getProducts,
	getProductDetails,
};
