export interface TimelineItem {
  time: string;
  description: string;
}

export interface KeyPoint {
  title?: string;
  details?: string
  todo?: string[];
  list?: string[];
  timeline?: TimelineItem[];
}

export interface Activity {
  time: { [day: string]: string };
  name: string;
  location: string;
  key_points: KeyPoint[];
}

export interface DayTopics {
  [day: string]: {
    topics: string[];
  };
}


export interface Section1 {
  titulo?: string;
  descricao?: string;
  principais_pontos?: string[];
  compromisso?: string;
}

export interface Section2 {
  titulo?: string;
  descricao?: string;
  regras?: string[];
}

export interface Section3 {
  titulo?: string;
  descricao?: string;
  itens?: string[];
  consequencias?: string;
}

export interface Section4 {
  titulo?: string;
  descricao?: string;
  armas_proibidas?: string[];
  outros_itens_proibidos?: string[];
  consequencias?: string;
}

export interface DataStructure {
  "1"?: Section1;
  "2"?: Section2;
  "3"?: Section3;
  "4"?: Section4;
}
