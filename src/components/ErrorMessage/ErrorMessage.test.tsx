import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders children text", () => {
    const errorTest = "Error";
    render(<ErrorMessage>{errorTest}</ErrorMessage>);
    const textElement = screen.getByText(errorTest);
    expect(textElement).toBeInTheDocument();
  });
});
