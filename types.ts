export interface IMovie {
  _id: string;
  name: string;
  genre: string;
  duration: number;
  rating: number;
  views: number;
  coverImage: string;
  trailerImage: string;
}

export interface ITrailer {
  _id: string;
  trailerImage: string;
}
