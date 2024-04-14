export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string;
  weight: number;
  jersey_number: number;
  college: string;
  country: string;
  draft_year: number;
  draft_round: number;
  draft_number: number;
  team: {
    id: number;
    conference: string;
    division: string;
    city: string;
    name: string;
    full_name: string;
    abbreviation: string;
  };
}
