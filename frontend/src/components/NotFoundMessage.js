import React, { useCallback } from "react";
import { historyManager } from "../utils/history";
import { PAGES } from "../utils/pages";

import "./NotFoundMessage.scss";
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
