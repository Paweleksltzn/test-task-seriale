export interface SingleSerie {
  _links: any;
  airtime: string;
  dvdCountry: any;
  externals: any;
  genres: string[];
  id: number;
  image: {
    medium: string,
    original: string
  };
  language: string;
  name: string;
  network: any;
  officialSite: string;
  premiered: string;
  rating: {
    average: number
  };
  runtime: number;
  schedule: any;
  season: number;
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: any;
  weight: number;
}
