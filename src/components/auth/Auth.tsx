"use client";

import SignUp from "@/components/auth/SignUp";
import SignIn from "@/components/auth/SignIn";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/utils/firebase.browser";

function Auth() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div className="flex justify-center">
      {showRegister ? (
        <SignUp toggleShow={setShowRegister} />
      ) : (
        <SignIn toggleShow={setShowRegister} />
      )}
    </div>
  );
}

export default Auth;
