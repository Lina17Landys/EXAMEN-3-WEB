import React from "react";
import { useNavigate } from "react-router-dom";

interface CreatePoemButtonProps {
  label?: string; 
}

const CreatePoemButton: React.FC<CreatePoemButtonProps> = ()=> {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form"); 
  };

  return (
    <button className="create-poem-button" onClick={handleClick}>
     Add poem
    </button>
  );
};

export default CreatePoemButton;
