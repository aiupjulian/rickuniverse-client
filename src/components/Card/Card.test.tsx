import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("renders children text", () => {
    const cardText = "Test text";
    render(<Card>{cardText}</Card>);
    const textElement = screen.getByText(cardText);
    expect(textElement).toBeInTheDocument();
  });
});
