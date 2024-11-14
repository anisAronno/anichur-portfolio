import {
  createUserWithEmailAndPassword,
  updateProfile as firebaseUpdateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { useCallback, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AuthContextType, AuthProviderProps, User } from '../types/auth.types';
import { mapFirebaseUser } from '../utils/user';

export const AuthProvider = ({ children, auth }: AuthProviderProps) => {
  const [currentUser, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(mapFirebaseUser(currentUser));
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [auth]);

  const login = useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        setError(null);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(mapFirebaseUser(userCredential.user));
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred during login')
        );
        throw err;
      }
    },
    [auth]
  );

  const signup = useCallback(
    async (email: string, password: string): Promise<void> => {
      console.log(email, password);

      try {
        setError(null);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(mapFirebaseUser(userCredential.user));
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred during signup')
        );
        throw err;
      }
    },
    [auth]
  );

  const logout = useCallback(async (): Promise<void> => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error('An error occurred during logout')
      );
      throw err;
    }
  }, [auth]);

  const resetPassword = useCallback(
    async (email: string): Promise<void> => {
      try {
        setError(null);
        await sendPasswordResetEmail(auth, email);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred during password reset')
        );
        throw err;
      }
    },
    [auth]
  );

  const updateProfile = useCallback(
    async (data: Partial<User>): Promise<void> => {
      try {
        setError(null);
        if (!auth.currentUser) throw new Error('No currentUser logged in');

        await firebaseUpdateProfile(auth.currentUser, {
          displayName: data.displayName || null,
          photoURL: data.photoURL || null,
        });

        setUser((prev) => (prev ? { ...prev, ...data } : null));
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred updating profile')
        );
        throw err;
      }
    },
    [auth]
  );

  const value: AuthContextType = {
    currentUser,
    loading,
    error,
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
