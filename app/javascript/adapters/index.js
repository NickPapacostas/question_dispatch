const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//USERS############################################################################

export const fetchNewUser = async (data) => {
  const resp = await fetch("http://localhost:3000/api/registrations", {
    headers: headers,
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ data }),
  });
  const json = await resp.json();
  return json;
};

export const fetchLogIn = async (data) => {
  const resp = await fetch("http://localhost:3000/api/sessions", {
    headers: headers,
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ data }),
  });
  const json = await resp.json();
  return json;
};

//QUESTIONSS############################################################################

export const fetchNewQuestion = async (questionData) => {
  const resp = await fetch("http://localhost:3000/api/questions", {
    headers,
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ questionData }),
  });
  const json = await resp.json();
  console.log("fetch question", json);
  return json;
};
