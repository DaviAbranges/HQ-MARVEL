import { Items, Thumbnail } from "./comics";

export interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Comics;
  series: Comics;
}

export interface Comics {
  items: Items[];
}
