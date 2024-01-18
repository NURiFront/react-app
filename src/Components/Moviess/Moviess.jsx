import { MoviessList } from "../MoviessList/MoviessList";
// import { NewMoviess } from "../NewMoviess/NewMoviess";
import { useState } from "react";
import "./Moviess.css";
import { NewMoviess } from "../NewMoviess/NewMoviess";

export const Moviess = () => {
	const [state, setState] = useState([]);
	return (
		<div>
			{/* <NewMoviess state={state} setState={setState}/> */}
			<NewMoviess state={state} setState={setState} />
			<MoviessList state={state} setState={setState} />
		</div>
	);
};
