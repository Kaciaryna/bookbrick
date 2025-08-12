"use client";

import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useRef, useState } from "react";
import { db, storage } from "@/utils/firebase.browser";
import { doc, DocumentData, setDoc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "@firebase/storage";
import { BookInterface, emptyBook } from "@/models/BookInterface";

function Poll() {
  const [book, setBook] = useState<BookInterface>(emptyBook);
  const [progress, setProgress] = useState<number>(0);
  const genreRef = useRef<HTMLInputElement | null>(null);

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const newBook = {
      ...book,
      [e.target.name]: e.target.value,
    };

    setBook(newBook);
  }

  function handleOnFileChange(e: ChangeEvent<HTMLInputElement>) {
    const newBook = {
      ...book,
      file: e.target.files ? e.target.files[0] : undefined,
    };

    setBook(newBook);
  }

  function handleGenreClick() {
    const genres = [
      ...book.genres,
      (genreRef.current as HTMLInputElement).value,
    ];

    const newBook = {
      ...book,
      genres: genres,
    };

    console.log(newBook);
    (genreRef.current as HTMLInputElement).value = "";

    setBook(newBook);
  }

  async function onFormSubmit(e: any) {
    e.preventDefault();

    if (book?.author && book.name) {
      try {
        book.id = uuidv4();

        if (book?.file) {
          const bookRef = (book.name + " " + book.author)
            .replace(/\s/g, "")
            .toLowerCase();
          const storageRef = ref(storage, bookRef);
          const uploadTask = uploadBytesResumable(storageRef, book.file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(progress);
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  setProgress(progress);
                  console.log("Upload is running" + progress);
                  break;
              }
            },
            (error) => {
              console.log(error, "errr >>>>>");
              // Handle unsuccessful uploads
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setDoc(doc(db, "books", book.id), {
                  name: book.name,
                  author: book.author,
                  genres: book.genres,
                  description: book.description,
                  image: downloadURL,
                } as DocumentData);

                console.log("File available at", downloadURL);
              });
              alert("Book added");
              setBook(emptyBook);
              setProgress(0);
            },
          );
        }
      } catch (e) {
        console.log(e, "<<<<<<<<<<<<<");
      }
    }
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <fieldset className="flex flex-col mb-2">
          <input
            placeholder="Book Name"
            onChange={handleOnChange}
            type="text"
            name="name"
            value={book.name}
            className="input validator"
            required
          />
        </fieldset>

        <fieldset className="flex flex-col mb-2">
          <input
            placeholder="Book Author"
            onChange={handleOnChange}
            type="text"
            name="author"
            value={book.author}
            className="input validator"
            required
          />
        </fieldset>

        <textarea
          className="textarea"
          placeholder="Book description"
          onChange={handleOnChange}
          value={book.description}
          name="description"
        ></textarea>

        <div>
          <progress
            className="progress progress-primary w-56"
            value={progress}
            max="100"
          ></progress>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Book cover</legend>
          <input
            onChange={handleOnFileChange}
            type="file"
            name="file"
            accept="image/png, image/jpeg, image/webp"
            className="file-input"
          />
        </fieldset>

        {book.genres.map((genre) => (
          <div key={genre} className="badge badge-secondary">
            {genre}
          </div>
        ))}

        <div className="join">
          <div>
            <label className="input validator join-item">
              <input
                ref={genreRef}
                placeholder="novel"
                type="text"
                name="genres"
                className="input"
              />
            </label>
          </div>
          <button
            onClick={handleGenreClick}
            type="button"
            className="btn btn-neutral join-item"
          >
            Add genre
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          Add book
        </button>
      </form>
    </section>
  );
}

export default Poll;
