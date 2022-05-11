import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  counter = 123;
  movieExp = {
    adult: false,
    backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
    genre_ids: [28, 878, 35, 10751, 12],
    id: 675353,
    original_language: 'en',
    original_title: 'Sonic the Hedgehog 2',
    overview:
      'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
    popularity: 12851.144,
    poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
    release_date: '2022-03-30',
    title: 'Sonic the Hedgehog 2',
    video: false,
    vote_average: 7.7,
    vote_count: 1142,
  };

  constructor() {}

  addOne() {
    this.counter++;
    return this.counter;
  }
}
