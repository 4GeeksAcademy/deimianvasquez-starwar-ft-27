import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite {store.favorites.length}
						</a>

						<ul className="dropdown-menu">
							{
								store.favorites.map((item) => (
									<li key={item._id}>
										<Link className="dropdown-item" to={`/detalle/${item._id}`}>{item.properties.name}</Link>
									</li>

								))
							}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
