export const mockLocalStorage = (window) => {
  window.sessionStorage = {
    removeItem: () => null,
    getItem: () => null,
  }
  window.localStorage = {
    removeItem: () => null,
    getItem: () => null,
  }
}
