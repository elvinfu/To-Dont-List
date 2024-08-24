import React from "react";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";

interface IconCheckBoxProps {
  checked: boolean;
}

const IconCheckBox: React.FC<IconCheckBoxProps> = ({ checked }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {checked ? (
        <IconSquareCheckFilled size={24} />
      ) : (
        <IconSquare size={24} color="#9CA3AF" />
      )}
    </div>
  );
};

export default IconCheckBox;
