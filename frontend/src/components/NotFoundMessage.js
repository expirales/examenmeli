import React, { useCallback } from "react";
import { historyManager } from "../utils/history";
import { PAGES } from "../utils/pages";

import "./NotFoundMessage.scss";

/**
 * @module NotFoundMessage
 * @summary Component to handle no products records to show or invalid search respond
 * @param `title`
 * @param `message`
 * @param `isShowRedirectButton`
 * @param `redirectButtonLabel`
 * @example <caption>It can be called as follows:</caption>
 *            import NotFoundMessage from './{path}/NotFoundMessage.jsx'
 *            return (
 *              <div>
 *                <NotFoundMessage />
 *              <div/>
 *            )
 * @see
 * Components where used this:
 *    - ProductsListPage.jsx,
 *    - ProductDetailsPage.jsx,
 */
export default function NotFoundMessage({
	title = "Ups!",
	message = "No hemos encontrado nada por aqui.",
	isShowRedirectButton = false,
	redirectButtonLabel = "Ir al inicio",
}) {
	const handleRedirect = useCallback(() => historyManager.push(PAGES.root), []);
	return (
		<div className="cnt-not-found-message">
			<h4 className="tx-title">{title}</h4>
			<p className="tx-message">{message}</p>
			{isShowRedirectButton && (
				<button onClick={handleRedirect} className="btn-redirect">
					{redirectButtonLabel}
				</button>
			)}
		</div>
	);
}
