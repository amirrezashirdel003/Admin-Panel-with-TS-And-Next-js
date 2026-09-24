export const getToken = (): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
};

export const removeToken = (): void => {
  if (typeof document === "undefined") return;
  document.cookie = "token=; path=/; max-age=0";
};
export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const getUserName = (): string | null => {
  const token = getToken();
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.email;
  } catch {
    return null;
  }
};
