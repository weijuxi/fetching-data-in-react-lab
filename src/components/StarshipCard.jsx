
const StarshipCard = (props) => {
    return (
        <article>
            <h3>{props.starship.name}</h3>
            <p>Model: {props.starship.model}</p>
            <p>Manufacturer: {props.starship.manufacturer}</p>
            <p>Starship Class: {props.starship.starship_class}</p>
        </article>
    );
}

export default StarshipCard;