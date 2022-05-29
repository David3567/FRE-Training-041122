interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: string;
    'offical-artwork': {
      front_default: string;
    };
  };
  versions: any;
}

interface Ability {
  name: any;
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface Item {
  item: any;
  vesion_details: any[];
}

interface Move {
  move: {
    name: string;
    url: string;
  };
}

interface Specie {
  name: string;
  url: string;
}

export interface PokemonResponse {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indicies: any[];
  height: number;
  held_items: Item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  species: Specie;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
}
