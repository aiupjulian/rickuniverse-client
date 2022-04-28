export enum Keys {
  TOKEN = "token",
}

export function setLocalStorageItem(key: Keys, item: string) {
  localStorage.setItem(key, item);
}

export function getLocalStorageItem(key: Keys) {
  return localStorage.getItem(key);
}

export function removeLocalStorageItem(key: Keys) {
  localStorage.removeItem(key);
}
