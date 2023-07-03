const fetchPet = async ({ queryKey }) => {
  let id = queryKey[1];
  let res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!res.ok) {
    throw new Error("details fetch is not ok");
  }
  return res.json();
};

export default fetchPet;
