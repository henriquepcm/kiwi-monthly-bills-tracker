import "@testing-library/jest-dom";

beforeEach(() => {
     // Mock localStorage
     const localStorageMock = (function () {
          let store = {};

          return {
               length: 0,
               getItem(key) {
                    return store[key] || null;
               },
               setItem(key, value) {
                    store[key] = value.toString();
               },
               removeItem(key) {
                    delete store[key];
               },
               clear() {
                    store = {};
               },
               key(index) {
                    const keys = Object.keys(store);
                    return keys[index] || null;
               },
          };
     })();

     global.localStorage = localStorageMock;
});
