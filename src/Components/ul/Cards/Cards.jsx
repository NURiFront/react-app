import "./Cards.css";

export const Card = ({ data }) => {
	return (
		<div className="some">
			{data.map((item) => {
				console.log(item.id);
				return (
					<div className="cardsAll" key={item.id}>
						<div>
							<h2 className="texts">{item.name}</h2>
							<img className="allImgs" src={item.photo} alt={item.name} />
							<p>{item.nameG}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
