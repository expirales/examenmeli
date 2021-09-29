import { API_ENDPOINTS } from "../utils/apiEndpoints";
import { historyManager } from "../utils/history";
import qs from "query-string";
import { parseProduct } from "../utils/parser";

async function loadProducts() {
	const keyword = qs.parse(historyManager.location.search, {
		ignoreQueryPrefix: true,
	}).search;
	const loadProducts = await fetch(API_ENDPOINTS.getProducts(keyword));
	const { items, categories } = await loadProducts.json();

	const products = items.map((item) => parseProduct(item));

	return { products, categories };
}

async function loadProduct() {
	const productId = historyManager.location.pathname.split("/").pop();
	const loadProduct = await fetch(API_ENDPOINTS.getProduct(productId));
	const { item } = await loadProduct.json();

	return item && parseProduct(item);
}

export const productsOperator = {
	loadProducts,
	loadProduct,
};
