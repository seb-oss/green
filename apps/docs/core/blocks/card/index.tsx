import { forwardRef } from "react";

import "./style.css";
import Link from "next/link";

export const Card = forwardRef(({ ...props }, ref) => {
  return (
    <Link href="#" className="card">
      I am a Card
    </Link>
  );
});

Card.displayName = "Card";

export default Card;
