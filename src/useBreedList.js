import { useGetBreedQuery } from "./petApiService";

const useBreedList = (animal) => {
  let { data: breeds, isLoading } = useGetBreedQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loaded"];
  }

  return [breeds ?? [], isLoading];
};

export default useBreedList;
