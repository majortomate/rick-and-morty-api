const BASE_URL = 'http://localhost:8080/api';

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters`);
  return await response.json();
}


export async function getCharacter(id) {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  return await response.json();
}

export async function createCharacter(character) {

}

export async function updateCharacter(character) {

}

export async function deleteCharacter(id) {

}
