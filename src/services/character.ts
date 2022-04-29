import { ApiError, GENERIC_ERROR_MESSAGE } from "./helpers";

type Place = { name: string; url: string };

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Place;
  location: Place;
  image: string;
  episode: string[];
  url: string;
  created: Date;
  fav: boolean;
}

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface Characters {
  info: Info;
  results: Character[];
}

export async function getCharacters(token: string): Promise<Characters> {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/character`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data: Characters & ApiError = await response.json();
  if (response.ok && data.results) {
    return data as Characters;
  }
  return Promise.reject(GENERIC_ERROR_MESSAGE);
}

export async function getCharacter(token: string, id: string) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/character/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data: Character & ApiError = await response.json();
  if (response.ok && data.id) {
    return data;
  }
  return Promise.reject(GENERIC_ERROR_MESSAGE);
}
