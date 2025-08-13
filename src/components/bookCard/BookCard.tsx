import Image from "next/image";
import { BookInterface } from "@/models/BookInterface";

function BookCard({ book }: { book: BookInterface }) {
  return (
    <div className="flex card card-border lg:card-side bg-base-100 shadow-smshadow-sm mb-5">
      <figure className="w-1/6">
        {book.image ? (
          <img src={book.image} alt={book.name} width="250" height="300" />
        ) : (
          <Image
            src="/cover-placeholder.jpg"
            alt={book.name}
            width="250"
            height="300"
          />
        )}
      </figure>
      <div className="card-body w-5/6">
        <h2 className="card-title">
          {book.name} by {book.author}
        </h2>
        <p>{book.description}</p>
        <div className="flex flex-row">
          {book.genres &&
            book.genres.map((genre) => {
              return (
                <div key={genre} className="badge badge-secondary">
                  {genre}
                </div>
              );
            })}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
