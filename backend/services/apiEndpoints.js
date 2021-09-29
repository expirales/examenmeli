const API_ML_URL = process.env.API_ML_URL;

// const API_METHODS = {
// 	GET: "GET",
// 	POST: "POST",
// };

/**
 * Object `API_ENDPOINTS`.
 * @description Object that contains all url endpoints, depending what method require, we want to pass as parameter, dynamic values.
 * @requires `node-fetch` npm library to work it out.
 *
 * @return  {Object} of specific attributes. to send to the node-fetch api.
 * @example <caption>Returns endpoint with dynamic value</caption>
 *            const {path, ...others} = API_ENDPOINT.products;
 *            const endpoint = {
 *              ...others,
 *              path: path(value)
 *            }
 *
 *            await fetch(endpoint.path, {others})

 */
const API_ENDPOINTS = {
	products: {
		path: (keyword) => `${API_ML_URL}/sites/MLA/search?q=${keyword}`,
	},
	productDetails: {
		path: (productId) => `${API_ML_URL}/items/${productId}`,
		// options: {
		// method: API_METHODS.POST,
		// headers: {}
		// body: {}
		// }
	},
	categories: {
		path: (categoryId) => `${API_ML_URL}/categories/${categoryId}`,
	},

	productDescription: {
		path: (productId) => `${API_ML_URL}/items/${productId}/description`,
	},
};

module.exports = API_ENDPOINTS;
