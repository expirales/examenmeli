const PRODUCT_CONDITION = {
	NEW: "new",
	USED: "used",
};

export const PRODUCT_CONDITION_LABELS = {
	[PRODUCT_CONDITION.NEW]: "nuevo",
	[PRODUCT_CONDITION.USED]: "usado",
};

export function parseProduct(product) {
	return {
		...product,
		condition: PRODUCT_CONDITION_LABELS[product.condition],
		price: parseProductPrice(product.price),
	};
}

function parseProductPrice({ amount, decimals, currency }) {
	const productPrice =
		decimals > 0 ? parseFloat(`${amount}.${decimals}`) : amount;
	return productPrice.toLocaleString("es-AR", {
		currency,
	});
}
