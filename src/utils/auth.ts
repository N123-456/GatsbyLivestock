// src/utils/auth.ts
export const isLoggedIn = (): boolean => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  console.log("isLoggedIn: email =", email, "password =", password);
  return !!(email && password);
};
