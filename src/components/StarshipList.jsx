import StarshipCard from './StarshipCard';

const StarshipList = (props) => {
    console.log('StarshipList props:', props);
    return (
      <section>
        <h2>Starships</h2>
        <ul>
            {props.starships.map((starship) => (
            <StarshipCard key={starship.name} starship={starship} />
            ))}
        </ul>
        </section>
    );
  };

export default StarshipList;