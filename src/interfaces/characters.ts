import { Items } from "./comics";

export interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  characters: Characters;
  comics: Items;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
