import { auth } from "@/utils/firebase.browser";
import { ChangeEvent, useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
import EmailInput from "@/components/auth/EmailInput";
import PasswordInput from "@/components/auth/PasswordInput";
import { signInWithEmailAndPassword } from "@firebase/auth";

function SignInForm({ toggleShow }: { toggleShow: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleOnChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onSubmit(event: any) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "<<<<");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <>
      <form onSubmit={onSubmit} className="lg:w-sm md:w-sm w-full">
        <AuthForm
          title="Sign In"
          description="Please provide email and password"
        >
          <div className="flex flex-col gap-1">
            <EmailInput
              name="email"
              value={email}
              handleOnChangeEmail={handleOnChangeEmail}
            />
          </div>
          <div className="flex flex-col gap-1">
            <PasswordInput
              value={password}
              name="passwordOne"
              handleOnPassword={handleOnChangePassword}
            />
          </div>
          <div className="card-actions items-center gap-6">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
            <button className="link" onClick={() => toggleShow(true)}>
              Or register
            </button>
          </div>
        </AuthForm>
      </form>
    </>
  );
}

export default SignInForm;
