import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={20}
          onClick={() => setRating(star)}
          className="cursor-pointer"
          color={star <= rating ? "gold" : "gray"}
        />
      ))}
    </div>
  );
}

export default StarRating;
