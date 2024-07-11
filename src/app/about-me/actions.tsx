// Required for side-effects
import "firebase/firestore";
import { initializeServerApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

async function initializeApp() {
  try {
    const app = initializeServerApp(firebaseConfig, {});
    return getFirestore(app);
  } catch (error) {
    console.error("Error initializing app: ", error);
  }
}

export type WorkExperience = {
  order: number;
  company: string;
  position: string;
  duration: string;
  jobItems: string[];
};

export async function getWorkExperiences(): Promise<WorkExperience[]> {
  const db = await initializeApp();
  if (!db) {
    throw new Error("Error initializing app");
  }
  const workExperiencesCol = collection(db, "WorkExperiences");
  const workExperiencesSnapshot = await getDocs(
    query(workExperiencesCol, orderBy("order"))
  );
  const workExperiencesList = workExperiencesSnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.order - b.order);

  const dataIsWorkExperience = (data: unknown): data is WorkExperience => {
    if (typeof data !== "object") return false;
    if (!data) return false;
    if (Object.keys(data).length !== 5) return false;

    Object.keys(data).forEach((key) => {
      if (!(key in ["company", "position", "duration", "jobItems", "order"])) {
        return false;
      }
    });
    return true;
  };

  if (!workExperiencesList.every(dataIsWorkExperience)) {
    throw new Error("Invalid data in work experiences");
  }

  return workExperiencesList;
}
