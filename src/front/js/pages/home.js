import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<div className="container">
			<h1 className="text-danger">Character</h1>
			<div className="my-carousel border border-danger">
				{
					store.people.map((item) => {
						return (
							<div key={item._id} className="my-card">
								<img src={item.image} alt={item.properties.name} />


								<div className="p-3">
									<p>Name: {item.properties.name}</p>
									<p>Hair-color: {item.properties.hair_color}</p>
									<p>Eye-Color: {item.properties.eye_color}</p>
								</div>

								<div className="d-flex justify-content-between p-3">
									<Link to={`/detalle/${item._id}`} className="btn btn-primary">Learn More</Link>
									<button
										className={store.favorites.includes(item) ? "btn btn-danger" : "btn btn-warning"}
										onClick={() => actions.addFavorite(item)}
									>Fav</button>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};
