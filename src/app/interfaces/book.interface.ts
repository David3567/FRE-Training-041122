export interface Book {
  id?: string;
  volumeInfo: {
    title: string;
    authors: string;
    imageLinks: {
      smallThumbnail: string;
    };
    publisher: string;
    publishedDate: string;
    description: string;
  };
}
