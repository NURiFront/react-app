import "./Input.css";

export const Input = ({ type, style, value,  placeholder }) => {
	return (
		<input
			className={style}
			ref={value}
			type={type}
			placeholder={placeholder}
			
		/>
	);
};
