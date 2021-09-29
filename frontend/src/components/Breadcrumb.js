import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PAGES } from "../utils/pages";

import "./Breadcrumb.scss";

/**
 * @module Breadcrumb
 * @summary Component to control as a breadcrumb the products categories.
 * @param `categories` [{id:1, name:"Autos"}]
 * @example <caption>It can be called as follows:</caption>
 *            import Breadcrumb from './{path}/Breadcrumb.jsx'
 *            return (
 *              <div>
 *                <Breadcrumb categories={[]} /
 *              <div/>
 *            )
 * @see
 * Components where used this:
 *    - ProductsListPage.jsx,
 *    - ProductDetailsPage.jsx,
 */
export default function Breadcrumb({ categories }) {
	return (
		<div className="cnt-breadcrumb">
			{categories.map((category) => (
				<CategoryLink key={category.id} {...category} />
			))}
		</div>
	);
}

function CategoryLink(propsWithNoPropTypes) {
	const { id, name } = propsWithNoPropTypes;
	return <Link to={PAGES.productsCategory(id)}>{name}</Link>;
}

Breadcrumb.prototypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};
