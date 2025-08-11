"use client";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { db, storage } from "@/utils/firebase.browser";
import { doc, DocumentData, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { Book, emptyBook } from "@/models/Book";

function Poll() {
  const [book, setBook] = useState<Book>(emptyBook);

  function handleOnChange(e) {
    const newBook = {
      ...book,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value,
    };

    setBook(newBook);
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    if (book?.author && book.name) {
      try {
        const id = uuidv4();

        if (book?.image) {
          const bookRef = (book.name + " " + book.author)
            .replace(/\s/g, "")
            .toLowerCase();
          const storageRef = ref(storage, bookRef);
          const uploadTask = uploadBytesResumable(storageRef, book.image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              console.log(error, "errr >>>>>");
              // Handle unsuccessful uploads
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setDoc(doc(db, "books", id), {
                  name: book.name,
                  author: book.author,
                  image: downloadURL,
                } as DocumentData);

                console.log("File available at", downloadURL);
              });
            },
          );
        }

        setBook(emptyBook);

        alert("Book added");
      } catch (e) {
        console.log(e, "<<<<<<<<<<<<<");
      }
    }
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <fieldset className="flex flex-col mb-2">
          <label htmlFor="name">Book Name</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="name"
            value={book.name}
            className="border-1 border-(--color-brown) rounded-sm py-1 px-2"
          />
        </fieldset>

        <fieldset className="flex flex-col mb-2">
          <label htmlFor="author">Book Author</label>
          <input type="text" placeholder="Type here" className="input" />
          <input
            onChange={handleOnChange}
            type="text"
            name="author"
            value={book.author}
            className="border-1 border-(--color-brown) rounded-sm py-1 px-2"
          />
        </fieldset>
        <fieldset className="flex flex-col mb-2">
          <label htmlFor="author">Book Image</label>
          <input
            onChange={handleOnChange}
            type="file"
            name="image"
            accept="image/png, image/jpeg, image/webp"
            value={book.file}
            className="border-1 border-(--color-brown) rounded-sm py-1 px-2"
          />
        </fieldset>

        <button className="btn">Default</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Responsive
        </button>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default Poll;
