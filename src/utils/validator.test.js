// Tests for my validators
import { describe, expect, it } from "vitest";

import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidMessage,
} from "./validators";

describe("isValidFirstName", () => {
  it("should return true for valid first names", () => {
    expect(isValidFirstName("John")).toBe(true);
    expect(isValidFirstName("Elizabeth")).toBe(true);
  });

  it("should return false for invalid first names", () => {
    expect(isValidFirstName("")).toBe(false);
    expect(isValidFirstName("8924")).toBe(false);
    expect(isValidFirstName("123jenny")).toBe(false);
    expect(isValidFirstName("John123")).toBe(false);
    expect(isValidFirstName("A".repeat(51))).toBe(false);
  });
});

describe("isValidLastName", () => {
  it("should return true for valid last names", () => {
    expect(isValidLastName("Doe")).toBe(true);
    expect(isValidLastName("Smith")).toBe(true);
  });

  it("should return false for invalid last names", () => {
    expect(isValidLastName("")).toBe(false);
    expect(isValidLastName("123Smith")).toBe(false);
    expect(isValidLastName("Man789")).toBe(false);
    expect(isValidLastName("954123")).toBe(false);
    expect(isValidLastName("B".repeat(51))).toBe(false);
  });
});

describe("isValidEmail", () => {
  it("should return true for valid emails", () => {
    expect(isValidEmail("john.doe@example.com")).toBe(true);
    expect(isValidEmail("alice.smith@example.com")).toBe(true);
    expect(isValidEmail("jim4president@example.com")).toBe(true);
  });

  it("should return false for invalid emails", () => {
    expect(isValidEmail("john.doe")).toBe(false);
    expect(isValidEmail("@example.com")).toBe(false);
    expect(isValidEmail("john.doe@example")).toBe(false);
    expect(isValidEmail("A".repeat(101))).toBe(false);
  });
});

describe("isValidMessage", () => {
  it("should return true for valid messages", () => {
    expect(isValidMessage("Hello, world!")).toBe(true);
    expect(isValidMessage("This is a test message.")).toBe(true);
    expect(isValidMessage("My number is 618-867-5309.")).toBe(true);
  });

  it("should return false for invalid messages", () => {
    expect(isValidMessage("")).toBe(false);
    expect(isValidMessage("A".repeat(501))).toBe(false);
  });
});
