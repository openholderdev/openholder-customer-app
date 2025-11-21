
export const EMAIL_REGEX = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const EMAIL_REGEX_STRICT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;


export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone.trim());
};

export const isValidPassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};
