/* eslint-disable react/prop-types */
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pet Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            animal={pet.animal}
            key={pet.id}
            images={pet.images}
            location={pet.city}
          />
        ))
      )}
    </div>
  );
};

export default Results;
