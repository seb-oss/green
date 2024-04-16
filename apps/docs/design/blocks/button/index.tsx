import { forwardRef } from "react";

export const Button = forwardRef(({ ...props }, ref) => {
  return <button> I am a button </button>;
});

Button.displayName = "Button";

export default Button;
