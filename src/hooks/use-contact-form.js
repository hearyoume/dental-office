import { useState } from "react";

export default function useContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset the form after submission
    e.currentTarget.reset();
  };

  return { submitted, handleSubmit };
}
