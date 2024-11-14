export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactState {
  formData: FormData;
  isLoading: boolean;
  error: string | null;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
}
