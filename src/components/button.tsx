import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  Component: React.ElementType;
  [key: string]: unknown;
};

function Button({
  children,
  className = "",
  Component = "a",
  ...props
}: ButtonProps) {
  return (
    <Component
      className={`bg-primary font-bold rounded-xl text-textwhite border border-border cursor-pointer hover:bg-[rgb(76,93,46)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
