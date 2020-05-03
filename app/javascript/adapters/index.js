const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//############################################################################
//USERS

export const newUser = (data) => {
  return fetch("http://localhost:3000/api/registrations", {
    headers: headers,
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ data }),
  })
    .then((resp) => resp.json())
    .then((json) => json);
};
