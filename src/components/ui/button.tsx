import React from "react";

type ButtonProps = {
  bgColor: string;
  textColor: string;
  hoverBg: string;
  hoverText: string;
  buttonText: string;
};

const Button: React.FC<ButtonProps> = ({
  bgColor,
  textColor,
  hoverBg,
  hoverText,
  buttonText,
}) => {
  return (
    <button
      className={`px-6 py-2 bg-${bgColor} text-${textColor} rounded-md hover:bg-${hoverBg} border-2 font-bold hover:border-2 hover:text-${hoverText} duration-300`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
