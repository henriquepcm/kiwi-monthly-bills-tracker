import { LocalStorageMiddleware } from "./localStorageMiddlewareTypes";

export const localStorageMiddleware: LocalStorageMiddleware =
     (storeAPI) => (next) => (action) => {
          const result = next(action);

          const bills = storeAPI.getState().bills;
          localStorage.setItem("bills", JSON.stringify(bills));

          return result;
     };
