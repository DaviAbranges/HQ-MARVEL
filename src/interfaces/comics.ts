export default interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  characters: Characters;
  creators: Creators;
}

//export interface ItemsComics {
// name: string;
// resourceURL: string;
// role: string;
//}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Characters {
  items: Items[];
}

export interface Creators {
  items: Items[];
}

export interface Items {
  resourceURI: string;
  name: string;
  role: string;
}

export interface ButtonNextPrevProps {
  increaseLimit: () => void;
}
