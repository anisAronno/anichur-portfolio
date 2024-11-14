import { User as FirebaseUser } from 'firebase/auth';
import { User } from '../types/auth.types';

export const mapFirebaseUser = (user: FirebaseUser | null): User | null => {
  if (!user) return null;

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
};
