import React from "react";
import { useAppDispatch, useAppSelector } from "../bll/store";
import { setAppErrorAC, setAppStatusAC } from "../bll/appActions";
import { RequestStatusType } from "../bll/appReducer";

export const TestComponent: React.FC = () => {
  const as = useAppSelector((s) => s.app);
  const d = useAppDispatch();
  return (
    <div>
      {JSON.stringify(as)}
      <div>
        <button onClick={() => d(setAppErrorAC("setAppErrorAC"))}>Error</button>
        <button onClick={() => d(setAppStatusAC(RequestStatusType.loading))}>
          Status
        </button>
      </div>
    </div>
  );
};
