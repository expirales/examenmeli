const ProductsService = require("../services/ProductsService");

module.exports.products = async (req, res) => {
	try {
		const { q: keyword } = req.params;
		const results = await ProductsService.getProducts(keyword);
		res.send(results);
	} catch (e) {
		res.send(e);
	}
};

module.exports.productDetails = async (req, res) => {
	try {
		const { id: productId } = req.params;
		const product = await ProductsService.getProductDetails(productId);
		res.send(product);
	} catch (e) {
		res.send(e);
	}
};
