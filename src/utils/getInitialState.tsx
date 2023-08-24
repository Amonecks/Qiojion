export const getInitialState = (key: string) => {

  const value = localStorage.getItem("store");

  if (value) return JSON.parse(value)[key];

  return []

}