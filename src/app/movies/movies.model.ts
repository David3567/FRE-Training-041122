export interface Movie {
  id: number;
  title: string;
  overview: string;
  image: string;
}

export interface MoiveDetail {
  id: number;
  title: string;
  overview: string;
  rating: string;
  releaseDate: Date;
  homepage: string;
  genres: [string];
  image: string;
}

export interface MovieTrailer {
  id: number;
  results: Trailer[];
}

export interface Trailer {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
