import { useState } from "react";

export default function useContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return { submitted, handleSubmit };
}
