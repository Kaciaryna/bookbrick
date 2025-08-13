import admin, { ServiceAccount } from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import { getAuth } from "firebase/auth";
import { app } from "@/utils/firebase.browser";

const serviceAccount: ServiceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FB_CLIENT_EMAIL,
  privateKey: process.env.FB_PRIVATE_KEY,
};

const databaseURL = "https://bookbrick.firebaseio.com";

export function getFirebaseAdmin() {
  let app;

  if (!admin.apps.length) {
    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  }

  return { admin, app };
}

const firebaseAdmin = getFirebaseAdmin();
const bucket = getStorage(firebaseAdmin.app).bucket();

const db = firebaseAdmin.admin.firestore();
const auth = getAuth(app);

export { firebaseAdmin, db, bucket, auth };
