// todos los componentes se exportan
// Los componentes se ejecutan con la sintaxis de etiqueta.

const Image = props => {
	return (
		<div>
			<h2>{props.object}</h2>
			<img
				src={`/assets/images/${props.image}`}
				alt={`Elemento ${props.object}`}
				width='150'
			/>
		</div>
	);
};

const App = () => {
	return (
		<>
			<h2>Los componentes del diablo</h2>
			<Image object='Cocktail' image='cocktail.svg' />
			<Image object='Coffee' image='coffee.svg' />
			<Image object='Plane' image='plane.svg' />
			<Image object='Train' image='train.svg' />
		</>
	);
};

export default App;
