export type Competition = {
  id: number;
  days: number[];
  name: string;
  status: string;
  beginDate: string;
  endDate: string;
  country: string;
  city: string;
  url: string;
};

export type Athlete = {
  id: number;
  surname: string;
  name: string;
  team: string;
  region: string;
  born: string;
  url: string;
};

export type Coach = {
  id: number;
  name: string;
};

export type NullableEntity = Competition | Athlete | Coach | null;
