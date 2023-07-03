const fetchrequestPets = async ({ queryKey }) => {
  let { animal, location, breed } = queryKey[1];
  let res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`
  );
  if (!res.ok) {
    throw new Error("request fetch is not ok");
  }
  return res.json();
};

export default fetchrequestPets;
