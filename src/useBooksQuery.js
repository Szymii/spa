export const useBooksQuery = async () => {
  const res = await fetch("http://127.0.0.1:5173/api/books");
  const books = await res.json();

  return books;
};
