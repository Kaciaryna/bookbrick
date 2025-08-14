"use client";

import Auth from "@/components/auth/Auth";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/utils/firebase.browser";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";

function HomePage() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        console.log("uid", uid);

        setUser(uid);
        setLoading(false);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <h2>user is logged in</h2>;
  } else {
    return <Auth />;
  }
}

export default HomePage;
