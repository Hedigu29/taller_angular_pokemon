// Respuesta parcial de la PokeAPI: https://pokeapi.co/api/v2/pokemon/{name}
export interface PokeApiResponse {
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
}

// Modelo simplificado que usa la UI
export interface Pokemon {
  name: string;
  image: string;
}
