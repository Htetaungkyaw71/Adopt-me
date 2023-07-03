const fetchBreed = async ({ queryKey }) => {
  let animal = queryKey[1];
  if (!animal) return [];
  let res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
  if (!res.ok) {
    throw new Error("animal fetch is not ok");
  }
  return res.json();
};

export default fetchBreed;
