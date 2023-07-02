import Book from "../model/Book";

export const readAllData = async (): Promise<Book[]> => {
  return Book.findAll();
};

export function readBookById(id: number): Promise<Book | null> {
  return Book.findByPk(id);
}

export function addBook(book: Book): Promise<Book | null> {
  return Book.create({ ...book });
}
