export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    aithors: Array<string>;
  };
}
