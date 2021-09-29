export const API_ENDPOINTS = {
	getProducts: (keyword) => `/api/items?q=${keyword}`,
	getProduct: (productId) => `/api/items/${productId}`,
	// Already prepared in case if we need to implement this endpoint
	getProductsByCategory: (categoryId) => `/api/category/${categoryId}`,
};
