import { db } from '@/utils/firebase.admin';
import BookCard from '@/components/bookCard/BookCard';
import { BookInterface } from '@/models/BookInterface';

async function loadBooks(): Promise<BookInterface[]> {
  const snapshot = await db.collection('books').get();
  return snapshot.docs.map((book) => {
    return {
      id: book.id,
      ...(book.data() as Omit<BookInterface, 'id'>),
    };
  });
}

async function BookList() {
  const books: BookInterface[] = await loadBooks();
  return (
    <section>
      {books.map((book) => {
        return <BookCard book={book} key={book.id} />;
      })}
    </section>
  );
}

export default BookList;
