// src/utils/auth.ts
console.log(localStorage.getItem("email")); // Should log null
console.log(localStorage.getItem("password"));
export const isLoggedIn = (): boolean => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  // Basic check; replace with proper authentication in production
  return !!(email && password);
};