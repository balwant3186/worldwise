import React, { MouseEvent } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  children?: React.ReactNode;
};

const BackButton: React.FC<BackButtonProps> = () => {
  const navigate = useNavigate();

  const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <Button type="back" onClick={handleBack}>
      &larr; Back
    </Button>
  );
};
export default BackButton;
