import { Middleware, Action } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a generic type parameter for actions
export type LocalStorageMiddleware<A extends Action = Action> = Middleware<
     A,
     RootState
>;
