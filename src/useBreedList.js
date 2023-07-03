import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchbreed";

const useBreedList = (animal) => {
  let result = useQuery(["breed", animal], fetchBreed);

  return [result?.data?.breeds ?? [], result.status];
};

export default useBreedList;
