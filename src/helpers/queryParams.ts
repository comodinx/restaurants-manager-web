//
// constants
//
const isServer = typeof window === "undefined";

//
// exports
//
export const resolveQueryParam = (name: string, defaultValue = "") => {
  if (isServer) {
    return defaultValue;
  }

  const url = new URLSearchParams(window.location.search);

  return url.get(name) || defaultValue;
};
