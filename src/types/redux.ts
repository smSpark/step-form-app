import { rootReducer } from "../store/rootReducer";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type RootState = ReturnType<typeof rootReducer>;
