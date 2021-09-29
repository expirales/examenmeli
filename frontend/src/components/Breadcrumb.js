import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PAGES } from "../utils/pages";

import "./Breadcrumb.scss";

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
