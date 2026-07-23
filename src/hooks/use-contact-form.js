import { useState } from "react";

import {
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  isValidMessage,
} from "../utils/validators";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const initialErrors = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

function validateField(name, value) {
  switch (name) {
    case "firstName":
      return isValidFirstName(value)
        ? ""
        : "First name must contain only letters and be 2 to 50 characters long.";
    case "lastName":
      return isValidLastName(value)
        ? ""
        : "Last name must contain only letters and be 2 to 50 characters long.";
    case "email":
      return isValidEmail(value)
        ? ""
        : "Please enter a valid email address between 5 and 100 characters.";
    case "message":
      return isValidMessage(value)
        ? ""
        : "Message must be between 1 and 500 characters.";
    default:
      return "";
  }
}

export default function useContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialFormData);
    setErrors(initialErrors);
  };

  return {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  };
}
