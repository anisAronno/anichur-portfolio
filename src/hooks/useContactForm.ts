// src/hooks/useContactForm.ts
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { ContactState, FormData } from '../types';
import { db } from '../utils/firebase.ts';

export const useContactForm = () => {
  const [state, setState] = useState<ContactState>({
    formData: {
      name: '',
      email: '',
      message: '',
    },
    isLoading: false,
    error: null,
  });

  const updateFormData = (data: Partial<FormData>) => {
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, ...data },
    }));
  };

  const resetForm = () => {
    setState({
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isLoading: false,
      error: null,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      await addDoc(collection(db, 'contacts'), {
        ...state.formData,
        timestamp: new Date(),
      });

      resetForm();
      alert('Message sent successfully!');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setState((prev) => ({ ...prev, error: errorMessage }));
      alert('Failed to send message. Please try again.');
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return {
    formData: state.formData,
    isLoading: state.isLoading,
    error: state.error,
    handleSubmit,
    updateFormData,
    resetForm,
  };
};
