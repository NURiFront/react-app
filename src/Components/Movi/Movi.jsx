
import "./Movi.css";
// import { useState } from "react";

export const Movi = ({ name, photo, genre, id }) => {
	// const [] = useState(undefined);

	return (
		<div key={id} className="cardsAll">
			<h3 className="texts">{name}</h3>
			<img className="allImgs" src={photo} alt={name} />
			<p className="janer">{genre}</p>
		</div>
	);
};
