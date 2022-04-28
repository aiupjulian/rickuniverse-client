import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders children text", () => {
    const buttonText = "Test text";
    render(<Button>{buttonText}</Button>);
    const textElement = screen.getByText(buttonText);
    expect(textElement).toBeInTheDocument();
  });
  test("calls onClick function prop", () => {
    const handleClick = jest.fn();
    const buttonText = "Test text";
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    const textElement = screen.getByText(buttonText);
    fireEvent.click(textElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
