import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();



export const getAllPosts = async (difficulty) => {
  if (!db) return;
  const doc = await db.collection(difficulty).get();
  let res = [];
  doc.forEach((element) => {
    res.push({...element.data(), id: element.id});
  });
  return res;
};

export const createPost = async (difficulty ,post) => {
  if (!db) return;
  const res = await db.collection(difficulty).add(post);

  return res;
};