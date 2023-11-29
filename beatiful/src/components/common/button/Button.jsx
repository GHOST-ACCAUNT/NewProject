import React from "react";

export const Button = ({ type, children }) => {
  const buttonStyles = {
    primary: "py-[13px] px-[34px]",
    secondary: "py-[11px] px-[25px]",
  };

  const styles = `text-globalWhite rounded-md bg-globalBlue-default ${
    buttonStyles.common
  } ${type === "primary" ? buttonStyles.primary : buttonStyles.secondary}`;

  return <button className={styles}>{children}</button>;
};
