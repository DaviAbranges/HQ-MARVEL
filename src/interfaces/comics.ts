export default interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ButtonNextPrevProps {
  increaseLimit: () => void;
}
