import React from "react";
import "./Loading.scss";

/**
 * @module Loading
 * @summary Component to control loading indicator animation between ask and get information to the server.
 * @example <caption>It can be called as follows:</caption>
 *            import Loading from './{path}/Loading.jsx'
 *            return (
 *              <div>
 *                <Loading />
 *              <div/>
 *            )
 * @see
 * Components where used this:
 *    - ProductsListPage.jsx,
 *    - ProductDetailsPage.jsx,
 */
export default function Loading() {
	return <div className="loader">Cargando...</div>;
}
