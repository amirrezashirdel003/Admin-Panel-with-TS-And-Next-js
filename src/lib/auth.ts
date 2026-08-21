const TOKEN_KEY = "token";

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const getUserName = (): string | null => {
  const token = getToken();
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.username;
};
