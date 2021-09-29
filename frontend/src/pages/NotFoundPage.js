import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../utils/pages";

import "./NotFoundPage.scss";

export default function NotFoundPage() {
	return (
		<div className="cnt-not-found-page">
			<div className="cnt-error-message">
				<h1>Ohh!</h1>
				<h3>No pudimos acceder a este contenido!</h3>
				<h5>
					Prueba con volver al <Link to={PAGES.root}>inicio </Link>
				</h5>
			</div>
		</div>
	);
}
