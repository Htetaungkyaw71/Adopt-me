import { useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchrequestPets from "./fetchrequestPets";
import { useSelector, useDispatch } from "react-redux";
import { all } from "./searchParamsSlice";

const SearchParams = () => {
  let animals = ["dog", "cat", "bird", "rabbit", "reptlie"];
  // let [data, setData] = useState({
  //   location: "",
  //   animal: "",
  //   breed: "",
  // });
  let [animal, setAnimal] = useState("");
  let [breeds] = useBreedList(animal);
  const dispatch = useDispatch();
  const adoptedPet = useSelector((state) => state.AdoptPetSlice.value);
  const data = useSelector((state) => state.searchParamsSlice.value);
  let result = useQuery(["request", data], fetchrequestPets);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let formdata = new FormData(e.target);
          let obj = {
            location: formdata.get("location") ?? "",
            animal: formdata.get("animal") ?? "",
            breed: formdata.get("breed") ?? "",
          };
          dispatch(all(obj));
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt="adopted Pet" />
          </div>
        ) : null}
        <label htmlFor="searchParams">
          Location
          <input type="text" name="location" />
        </label>
        <label htmlFor="animals">
          Animals
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {animals.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" disabled={breeds.length === 0} name="breed">
            <option />
            {breeds.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={result?.data?.pets ?? []} />
    </div>
  );
};

export default SearchParams;
