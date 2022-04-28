import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("renders label text", () => {
    const inputLabel = "Test text";
    render(<Input label={inputLabel} name="test" />);
    const textElement = screen.getByText(inputLabel);
    expect(textElement).toBeInTheDocument();
  });
  test("sends value prop to input", () => {
    const inputLabel = "Test text";
    const inputValue = "hello";
    const handleChange = jest.fn();
    render(
      <Input
        label={inputLabel}
        name="test"
        value={inputValue}
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByRole("textbox", {
      name: inputLabel,
    }) as HTMLInputElement;
    expect(inputElement.value).toEqual(inputValue);
  });
  test("calls onChange when changing input value", () => {
    const inputLabel = "Test text";
    const inputValue = "hello";
    const handleChange = jest.fn();
    render(
      <Input
        label={inputLabel}
        name="test"
        value={inputValue}
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByRole("textbox", {
      name: inputLabel,
    }) as HTMLInputElement;
    const newValue = "123";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(handleChange).toHaveBeenCalled();
  });
  test("sets input type", () => {
    const inputLabel = "Test text";
    const inputValue = "pass1234";
    const handleChange = jest.fn();
    render(
      <Input
        label={inputLabel}
        name="test"
        type="password"
        value={inputValue}
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByLabelText(inputLabel) as HTMLInputElement;
    expect(inputElement.type).toEqual("password");
  });
});
