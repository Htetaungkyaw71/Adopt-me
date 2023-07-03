import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pet = ({ name, animal, breed, location, id, images }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt="image" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} -- {breed} -- {location}{" "}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
