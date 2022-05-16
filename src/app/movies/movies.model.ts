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
