//
// constants
//
const isServer = typeof window === "undefined";
const prefix = "restaurants-";

//
// helpers
//
const getLocal = (key: string, defaultValue: any = null, raw = false) => {
  if (isServer) {
    return defaultValue;
  }

  try {
    // @ts-nocheck
    const value = localStorage.getItem(normalizeKey(key));

    if (value != null) {
      return raw ? value : JSON.parse(value);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("LocalStorage getItem error:", error);
  }
  return defaultValue;
};

const setLocal = (key: string, value: any = null, raw = false) => {
  if (isServer) {
    return;
  }

  try {
    // @ts-nocheck
    localStorage.setItem(normalizeKey(key), raw ? value : JSON.stringify(value));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("LocalStorage setItem error:", error);
  }
};

const getSession = (key: string, defaultValue: any = null, raw = false) => {
  if (isServer) {
    return defaultValue;
  }

  try {
    // @ts-nocheck
    const value = sessionStorage.getItem(normalizeKey(key));

    if (value != null) {
      return raw ? value : JSON.parse(value);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("SessionStorage getItem error:", error);
  }
  return defaultValue;
};

const setSession = (key: string, value: any = null, raw = false) => {
  if (isServer) {
    return;
  }

  try {
    // @ts-nocheck
    sessionStorage.setItem(normalizeKey(key), raw ? value : JSON.stringify(value));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("SessionStorage setItem error:", error);
  }
};

//
// exports
//
export const normalizeKey = (key: string) => {
  return key.startsWith(prefix) ? key : `${prefix}${key}`;
};

export const storage: any = {
  getLocal,
  setLocal,
  getSession,
  setSession,
};
