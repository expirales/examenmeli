/**
 * Variable `signFirm`
 * @summary {Object} that is include in all api response.
 */
const signFirm = {
	name: process.env.NAME_FIRM,
	lastName: process.env.LASTNAME_FIRM,
};

module.exports = {
	signFirm,
};
