import React from "react";
import { PAGES } from "../utils/pages";
import { Link } from "react-router-dom";
import { getStaticAssets } from "../utils/staticAssets";

import "./SessionBar.scss";

const logo = getStaticAssets("logo.png");
const searchIcon = getStaticAssets("search.png");

export default function SessionBar() {
	return (
		<header className="cnt-session-bar">
			<Link to={PAGES.root}>
				<img src={logo} className="logo" alt="logo" />
			</Link>
			<SearchForm />
		</header>
	);
}

function SearchForm() {
	return (
		<form className="form-session-bar" method="GET" action="/items">
			<input
				id="search"
				placeholder="Buscar productos, marcas y mas..."
				name="search"
				minLength={4}
				required
			/>
			<button type="submit" aria-label="Buscar">
				<img src={searchIcon} aria-label="Buscar" alt="search" />
			</button>
		</form>
	);
}
