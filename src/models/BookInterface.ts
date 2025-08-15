export interface BookInterface {
  id: string;
  name: string;
  author: string;
  image: string;
  file?: File;
  description: string;
  genres: string[];
}

export const emptyBook: BookInterface = {
  id: '',
  name: '',
  author: '',
  image: '',
  file: undefined,
  description: '',
  genres: [],
};
