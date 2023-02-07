import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick: (assignee: string) => void;
};

export const Avatar: FC<Props> = ({
  children,
  isSelected = false,
  onClick,
}) => {
  const border = isSelected ? "3px solid orange" : "1px solid gray";
  return (
    <div
      onClick={() => onClick(`${children}`)}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "30px",
        userSelect: "none",
        border,
      }}
    >
      {children}
    </div>
  );
};
