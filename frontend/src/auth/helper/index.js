import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/carthelper";

export const signup = (user) => {
  return fetch(`${API}user/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (uesr) => {
  const formdata = new FormData();

  for (const name in user) {
    formdata.append(name, user[name]);
  }

  return fetch(`${API}user/login/`, {
    method: "POST",
    body: FormData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
