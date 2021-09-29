export const PAGES = {
	root: "/",
	products: (keyword) => `/items?search=${keyword}`,
	product: (productId) => `/items/${productId}`,
	// Already prepared in case if we need to implement this page
	productsCategory: (categoryId) => `/category/${categoryId}`,
};
