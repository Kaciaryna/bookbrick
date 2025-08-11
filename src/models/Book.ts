export interface Book {
  id: string;
  name: string;
  author: string;
  image?: File;
  file: string;
  description?: string;
  genres: string[];
}

export const emptyBook: Book = {
  id: "",
  name: "",
  author: "",
  file: "",
  description: "",
  genres: [],
};
