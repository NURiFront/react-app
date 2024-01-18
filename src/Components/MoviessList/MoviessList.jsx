import { Movi } from "../Movi/Movi";
import { Button } from "../ul/button/Button";
import "./MoviessList.css";
import { useState } from "react";
export const MoviessList = ({ state, setState }) => {
	const [stateResult] = useState([]);
	// const [stateResult, setStateResult] = useState([])
	const deleteCard = (id) => {
		const result = [...state, stateResult];
		result.splice(id);
		setState(result);
	};
	return (
		<div>
			{state.map(({ name, photo, genre, id }) => (
				<Movi key={id} name={name} photo={photo} genre={genre} />
			))}
			<Button text="Delete all" onClick={deleteCard} />
		</div>
	);
};
