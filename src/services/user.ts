import { GENERIC_ERROR_MESSAGE } from "./helpers";

export async function addFav(token: string, id: number) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/me/favs/${id}`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    return Promise.reject(GENERIC_ERROR_MESSAGE);
  }
}

export async function removeFav(token: string, id: number) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/me/favs/${id}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    return Promise.reject(GENERIC_ERROR_MESSAGE);
  }
}
