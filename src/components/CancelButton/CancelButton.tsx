import React from "react";
import { useDispatch } from "react-redux";
import { resetCalculatorAction } from "../../store/calculator/action";
import { Button } from "../Button/Button";

const CancelButton: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(resetCalculatorAction())}>
      {children}
    </Button>
  );
};

export { CancelButton };
