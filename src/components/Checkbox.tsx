import React from "react";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";

interface IconCheckBoxProps {
  checked: boolean;
  onClick: () => void;
}

const IconCheckBox: React.FC<IconCheckBoxProps> = ({ checked, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {checked ? (
        <IconSquareCheckFilled size={24} color="#9CA3AF" />
      ) : (
        <IconSquare size={24} />
      )}
    </div>
  );
};

export default IconCheckBox;
