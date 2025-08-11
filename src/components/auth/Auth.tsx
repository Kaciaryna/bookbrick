"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/utils/firebase.browser";

function Auth() {
  const [email, setEmail] = useState("xx@xx.xx");
  const [passwordOne, setPasswordOne] = useState("123123");
  const [passwordTwo, setPasswordTwo] = useState("123123");
  const [error, setError] = useState(null);

  function handleOnChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleOnPassOne(e) {
    setPasswordOne(e.target.value);
  }

  function handleOnPassTwo(e) {
    setPasswordTwo(e.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(auth, email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
        })
        .catch((error) => {
          console.log(error, "errrrrrr");
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    } else {
      console.log("Password do not match");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input
          onChange={handleOnChangeEmail}
          type="email"
          placeholder="mail@site.com"
          value={email}
          name="email"
          required
        />
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>

      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        <input
          onChange={handleOnPassOne}
          name="passwordOne"
          value={passwordOne}
          type="password"
          required
          placeholder="Password"
          // minLength="8"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
      </label>
      <p className="validator-hint hidden">
        Must be more than 8 characters, including
        <br />
        At least one number <br />
        At least one lowercase letter <br />
        At least one uppercase letter
      </p>

      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        <input
          onChange={handleOnPassTwo}
          name="passwordTwo"
          value={passwordTwo}
          type="password"
          required
          placeholder="Password"
          // minLength="8"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
      </label>
      <p className="validator-hint hidden">
        Must be more than 8 characters, including
        <br />
        At least one number <br />
        At least one lowercase letter <br />
        At least one uppercase letter
      </p>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Auth;
