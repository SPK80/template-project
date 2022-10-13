import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { appReducer } from "./appReducer";
import { AppActionsType } from "./appActions";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  app: appReducer,
  //add other reducers
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AllActionsType = AppActionsType;
//add other ActionsTypes

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppDispatch = ThunkDispatch<
  AppRootStateType,
  unknown,
  AllActionsType
>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AllActionsType
>;
