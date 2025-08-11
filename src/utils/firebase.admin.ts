import admin, { ServiceAccount } from "firebase-admin";
import { getStorage } from "firebase-admin/storage";

const serviceAccount: ServiceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
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

export { firebaseAdmin, db, bucket };
