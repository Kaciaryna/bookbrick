import { db } from "@/utils/firebase.admin";
import BookCard from "@/components/bookCard/BookCard";
import { BookInterface } from "@/models/BookInterface";
import { testBook } from "@/utils/test/test-utils";

// async function loadBooks(): Promise<any> {
//   const snapshot = await db.collection("books").get();
//   return snapshot.docs.map((book) => {
//     return {
//       id: book.id,
//       ...(book.data() as Omit<any, "id">),
//     };
//   });
// }

async function BookList() {
  const books: BookInterface[] = [testBook];
  return (
    <section>
      {books.map((book) => {
        return <BookCard book={book} key={book.id} />;
      })}
    </section>
  );
}

export default BookList;
